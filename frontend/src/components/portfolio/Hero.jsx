import { useT } from "../../i18n/I18nContext";
import { profile } from "../../data/portfolio";

const PortraitCard = ({ caption, className = "" }) => (
  <figure
    data-testid="hero-portrait"
    className={`group relative border border-ink bg-[#FFFFFF] p-2 hard-shadow-sm ${className}`}
  >
    <div className="relative overflow-hidden border border-ink bg-[#EAEAEA]">
      <img
        src={profile.photo}
        alt={profile.name}
        loading="eager"
        className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
      />
      <span className="pointer-events-none absolute left-0 top-0 border-b border-r border-ink bg-[#0F0F0F] px-2.5 py-1 font-mono-tech text-[9px] uppercase tracking-[0.22em] text-[#F4F4F0]">
        {profile.role}
      </span>
    </div>
    <figcaption className="mt-2 flex items-center justify-between gap-2 px-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#0F0F0F]">
      <span>{caption}</span>
      <span className="text-[#FF3E1A]">●</span>
    </figcaption>
  </figure>
);

export const Hero = () => {
  const t = useT();
  const items = t.hero.marquee;

  const renderHeadlineC = () => {
    const { headlineC, headlineHighlight } = t.hero;
    if (!headlineHighlight || !headlineC.includes(headlineHighlight)) {
      return headlineC;
    }
    const [before, after] = headlineC.split(headlineHighlight);
    return (
      <>
        {before}
        <span className="text-[#FF3E1A]">{headlineHighlight}</span>
        {after}
      </>
    );
  };

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
            <span className="text-[#0F0F0F]">[01]</span> &nbsp;{t.hero.metaLocation}
          </span>
          <span className="hidden sm:inline">
            <span className="text-[#0F0F0F]">[02]</span> &nbsp;{t.hero.metaAvailable}
          </span>
          <span>
            <span className="text-[#0F0F0F]">[03]</span> &nbsp;{new Date().getFullYear()} / {t.hero.metaPortfolio}
          </span>
        </div>

        {/* Headline + portrait */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-10 sm:pt-16">
          {/* Mobile portrait (small, top) */}
          <div className="reveal col-span-12 lg:hidden">
            <PortraitCard caption={t.hero.portraitCaption} className="mx-auto w-44 sm:w-52" />
          </div>

          <div className="reveal col-span-12 lg:col-span-9">
            <p
              data-testid="hero-eyebrow"
              className="mb-6 inline-block border border-ink bg-[#F4F4F0] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#0F0F0F] sm:text-xs"
            >
              <span className="mr-2 inline-block h-2 w-2 -translate-y-[1px] bg-[#FF3E1A]" />
              {t.hero.eyebrow}
            </p>
            <h1
              data-testid="hero-headline"
              className="font-display text-[40px] font-black uppercase leading-[0.95] tracking-tighter text-[#0F0F0F] sm:text-6xl lg:text-[88px]"
            >
              {t.hero.headlineA}
              <br />
              {t.hero.headlineB}
              <br />
              {renderHeadlineC()}
            </h1>
          </div>

          {/* Desktop portrait (right column) */}
          <div className="reveal hidden lg:col-span-3 lg:block">
            <PortraitCard caption={t.hero.portraitCaption} className="w-full max-w-[260px] ml-auto" />
          </div>

          <div className="col-span-12 mt-6 grid grid-cols-12 gap-x-6 gap-y-10 lg:mt-4">
            <div className="reveal col-span-12 sm:col-span-7 lg:col-span-6 lg:col-start-7">
              <p className="font-display text-base font-medium leading-relaxed text-[#0F0F0F] sm:text-lg">
                {t.hero.bio}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  data-testid="hero-cta-work"
                  className="group inline-flex items-center gap-3 border border-ink bg-[#0F0F0F] px-5 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#F4F4F0] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3E1A] hover:shadow-[4px_4px_0_0_#0F0F0F]"
                >
                  {t.hero.ctaWork}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#contact"
                  data-testid="hero-cta-contact"
                  className="inline-flex items-center gap-3 border border-ink bg-transparent px-5 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#0F0F0F] transition-all hover:bg-[#0F0F0F] hover:text-[#F4F4F0]"
                >
                  {t.hero.ctaContact}
                </a>
              </div>
            </div>

            <aside className="reveal col-span-12 border-t border-ink/30 pt-8 sm:col-span-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 lg:col-span-3 lg:col-start-1 lg:row-start-1">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
                / {t.hero.whatIDo}
              </p>
              <ul className="mt-4 space-y-2 font-display text-sm text-[#0F0F0F] sm:text-base">
                {t.hero.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-px w-3 bg-[#0F0F0F]" />
                    {c}
                  </li>
                ))}
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
          {[...items, ...items, ...items].map((item, i) => (
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
