import { profile } from "../../data/portfolio";

const principles = [
  {
    n: "01",
    t: "Clarity before code.",
    d: "Discovery, scope and a clear definition of success come before any pixels or pipelines.",
  },
  {
    n: "02",
    t: "Systems, not screens.",
    d: "Each interface is part of a flow — booking, follow-up, document handoff. The flow is the product.",
  },
  {
    n: "03",
    t: "Lightweight & maintainable.",
    d: "Lean stacks, CMS-ready content and automations a team can actually own after launch.",
  },
  {
    n: "04",
    t: "Partner where useful.",
    d: "For complex builds I coordinate vetted partner developers — staying close to discovery, QA and launch.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative border-b border-ink bg-[#0F0F0F] text-[#F4F4F0]"
    >
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]/60">
              / Section 03 — About
            </p>
            <h2
              data-testid="about-heading"
              className="mt-4 font-display text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl"
            >
              How I <span className="text-[#FF3E1A]">work</span>.
            </h2>
            <div className="mt-8 inline-flex flex-col gap-1 border border-[#F4F4F0]/30 p-4 font-mono-tech text-xs uppercase tracking-[0.18em]">
              <span className="text-[#F4F4F0]/60">Based in</span>
              <span>{profile.location}</span>
              <span className="mt-3 text-[#F4F4F0]/60">Currently</span>
              <span className="text-[#FF3E1A]">Accepting projects</span>
            </div>
          </div>

          <ul className="col-span-12 grid grid-cols-1 gap-px bg-[#F4F4F0]/15 lg:col-span-8 lg:grid-cols-2">
            {principles.map((p) => (
              <li
                key={p.n}
                className="reveal flex flex-col gap-3 bg-[#0F0F0F] p-6 sm:p-8"
              >
                <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#FF3E1A]">
                  {p.n}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {p.t}
                </h3>
                <p className="font-display text-sm leading-relaxed text-[#F4F4F0]/70 sm:text-base">
                  {p.d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
