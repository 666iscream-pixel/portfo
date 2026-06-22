import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { profile } from "../../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", email: "", company: "", message: "" };

const FieldLabel = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    className="mb-2 inline-block font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#0F0F0F]"
  >
    {children}
  </label>
);

const inputClass =
  "w-full border border-ink bg-[#F4F4F0] px-4 py-3 font-display text-base text-[#0F0F0F] placeholder:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#FF3E1A] focus:ring-offset-0";

export const Contact = () => {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k) => (ev) => setForm((f) => ({ ...f, [k]: ev.target.value }));

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim() || null,
        message: form.message.trim(),
      });
      toast.success("Message sent. I’ll get back to you shortly.");
      setForm(initial);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(
        typeof detail === "string"
          ? detail
          : "Could not send your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative border-b border-ink bg-[#F4F4F0]"
    >
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Left */}
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
              / Section 04 — Contact
            </p>
            <h2
              data-testid="contact-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0F0F0F] sm:text-6xl"
            >
              Have a <span className="text-[#FF3E1A]">bottleneck</span> worth fixing?
            </h2>
            <p className="mt-6 max-w-md font-display text-base leading-relaxed text-[#0F0F0F] sm:text-lg">
              Share a few details about your business and the problem you’re
              solving. I usually reply within 1–2 working days.
            </p>

            <div className="mt-10 space-y-5 border-t border-ink/30 pt-8">
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  data-testid="contact-email-link"
                  className="font-display text-lg font-bold text-[#0F0F0F] underline decoration-[#FF3E1A] decoration-2 underline-offset-4 hover:text-[#FF3E1A]"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
                  LinkedIn
                </p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-testid="contact-linkedin-link"
                  className="font-display text-lg font-bold text-[#0F0F0F] underline decoration-[#FF3E1A] decoration-2 underline-offset-4 hover:text-[#FF3E1A]"
                >
                  /ihnat-zinkevich ↗
                </a>
              </div>
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
                  Location
                </p>
                <p className="font-display text-lg font-bold text-[#0F0F0F]">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            data-testid="contact-form"
            noValidate
            className="col-span-12 border border-ink bg-[#FFFFFF] p-6 hard-shadow sm:p-8 lg:col-span-7"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <FieldLabel htmlFor="name">Name *</FieldLabel>
                <input
                  id="name"
                  data-testid="contact-name-input"
                  type="text"
                  value={form.name}
                  onChange={onChange("name")}
                  className={inputClass}
                  placeholder="Your name"
                  required
                />
                {errors.name && (
                  <p className="mt-2 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#FF3E1A]">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FieldLabel htmlFor="email">Email *</FieldLabel>
                <input
                  id="email"
                  data-testid="contact-email-input"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className={inputClass}
                  placeholder="you@company.com"
                  required
                />
                {errors.email && (
                  <p className="mt-2 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#FF3E1A]">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <FieldLabel htmlFor="company">Company (optional)</FieldLabel>
                <input
                  id="company"
                  data-testid="contact-company-input"
                  type="text"
                  value={form.company}
                  onChange={onChange("company")}
                  className={inputClass}
                  placeholder="Company / studio"
                />
              </div>
              <div className="col-span-2">
                <FieldLabel htmlFor="message">Project details *</FieldLabel>
                <textarea
                  id="message"
                  data-testid="contact-message-input"
                  value={form.message}
                  onChange={onChange("message")}
                  className={`${inputClass} min-h-[160px] resize-y`}
                  placeholder="What are you trying to solve? Tell me about the bottleneck, the audience and the timeline."
                  required
                />
                {errors.message && (
                  <p className="mt-2 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#FF3E1A]">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 border-t border-ink/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
                Replies within 1–2 working days
              </p>
              <button
                type="submit"
                data-testid="contact-submit-button"
                disabled={submitting}
                className="group inline-flex items-center gap-3 border border-ink bg-[#0F0F0F] px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#F4F4F0] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3E1A] hover:shadow-[4px_4px_0_0_#0F0F0F] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:bg-[#0F0F0F] disabled:hover:shadow-none"
              >
                {submitting ? "Sending…" : "Send message"}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
