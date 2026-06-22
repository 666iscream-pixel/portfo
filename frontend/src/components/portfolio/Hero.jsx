import { profile } from "../../data/portfolio";

const marqueeItems = [
  "SYSTEMS",
  "WORKFLOWS",
  "AUTOMATION",
  "WEBSITES",
  "LEAD FLOWS",
  "BOOKINGS",
  "FOLLOW-UP",
  "OFFERS",
];

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden border-b border-ink"
    >
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-[1480px] px-5 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
        {/* Meta row */}
        <div className="flex flex-col gap-3 border-b border-ink/30 pb-6 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#555555] sm:flex-row sm:items-center sm:justify-between sm:pb-8">
          <span data-testid="hero-meta-location">
            <span className="text-[#0F0F0F]">[01]</span> &nbsp;Based in {profile.location}
          </span>
          <span className="hidden sm:inline">
            <span className="text-[#0F0F0F]">[02]</span> &nbsp;Available for new engagements
          </span>
          <span>
            <span className="text-[#0F0F0F]">[03]</span> &nbsp;
            {new Date().getFullYear()} / Portfolio v.01
          </span>
        </div>

        {/* Massive headline */}
        <div className="grid grid-cols-12 gap-x-6 pt-10 sm:pt-16">
          <div className="reveal col-span-12 lg:col-span-9">
            <p
              data-testid="hero-eyebrow"
              className="mb-6 inline-block border border-ink bg-[#F4F4F0] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#0F0F0F] sm:text-xs"
            >
              <span className="mr-2 inline-block h-2 w-2 -translate-y-[1px] bg-[#FF3E1A]" />
              {profile.role}
            </p>
            <h1
              data-testid="hero-headline"
              className="font-display text-[44px] font-black uppercase leading-[0.92] tracking-tighter text-[#0F0F0F] sm:text-7xl lg:text-[110px]"
            >
              I fix digital
              <br />
              <span className="text-[#FF3E1A]">bottlenecks</span> for
              <br />
              service businesses.
            </h1>
          </div>

          <div className="col-span-12 mt-8 grid grid-cols-12 gap-x-6 gap-y-10 lg:col-span-12 lg:mt-14">
            <div className="reveal col-span-12 sm:col-span-7 lg:col-span-6 lg:col-start-7">
              <p className="font-display text-base font-medium leading-relaxed text-[#0F0F0F] sm:text-lg">
                {profile.bio}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  data-testid="hero-cta-work"
                  className="group inline-flex items-center gap-3 border border-ink bg-[#0F0F0F] px-5 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#F4F4F0] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3E1A] hover:shadow-[4px_4px_0_0_#0F0F0F]"
                >
                  See selected work
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#contact"
                  data-testid="hero-cta-contact"
                  className="inline-flex items-center gap-3 border border-ink bg-transparent px-5 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#0F0F0F] transition-all hover:bg-[#0F0F0F] hover:text-[#F4F4F0]"
                >
                  Start a project
                </a>
              </div>
            </div>

            <aside className="reveal col-span-12 border-t border-ink/30 pt-8 sm:col-span-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 lg:col-span-3 lg:col-start-1 lg:row-start-1">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
                / What I do
              </p>
              <ul className="mt-4 space-y-2 font-display text-sm text-[#0F0F0F] sm:text-base">
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-px w-3 bg-[#0F0F0F]" />Websites & booking experiences</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-px w-3 bg-[#0F0F0F]" />Lead capture & follow-up</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-px w-3 bg-[#0F0F0F]" />Offer & document automation</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-px w-3 bg-[#0F0F0F]" />Discovery, scope & QA</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        aria-hidden
        className="relative overflow-hidden border-t border-ink bg-[#0F0F0F] py-4"
      >
        <div className="marquee-track flex whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-8 inline-flex items-center gap-8 font-mono-tech text-sm uppercase tracking-[0.3em] text-[#F4F4F0]"
            >
              {item}
              <span className="inline-block h-1.5 w-1.5 bg-[#FF3E1A]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
