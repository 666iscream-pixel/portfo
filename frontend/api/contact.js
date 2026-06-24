const RESEND_ENDPOINT = "https://api.resend.com/emails";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isEmail = (value = "") => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const trimString = (value, maxLength) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ detail: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ detail: "Email service is not configured yet." });
  }

  const name = trimString(req.body?.name, 120);
  const email = trimString(req.body?.email, 180).toLowerCase();
  const company = trimString(req.body?.company, 180);
  const message = trimString(req.body?.message, 4000);

  if (!name || !email || !message || !isEmail(email)) {
    return res.status(400).json({ detail: "Please check the form fields and try again." });
  }

  const to = process.env.CONTACT_TO_EMAIL || "ihnatzinkevich@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const subject = `Portfolio inquiry from ${name}`;
  const submittedAt = new Date().toISOString();

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const text = [
    `New portfolio inquiry`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Submitted: ${submittedAt}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.55; color: #111;">
      <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Company:</strong> ${safeCompany}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />
      <p style="white-space: normal;"><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Resend error", result);
      return res.status(502).json({ detail: "Could not send the message. Please try again." });
    }

    return res.status(200).json({ ok: true, id: result.id });
  } catch (error) {
    console.error("Contact form error", error);
    return res.status(500).json({ detail: "Could not send the message. Please try again." });
  }
}
