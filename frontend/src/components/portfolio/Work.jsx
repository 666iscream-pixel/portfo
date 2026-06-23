import { useT } from "../../i18n/I18nContext";
import { CaseStudyCard } from "./CaseStudyCard";

export const Work = () => {
  const t = useT();
  const cases = t.caseStudies;

  return (
    <section
      id="work"
      data-testid="work-section"
      className="relative border-b border-ink bg-[#F4F4F0]"
    >
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-24">
        <header className="grid grid-cols-12 gap-x-6 border-b border-ink/30 pb-10">
          <div className="col-span-12 lg:col-span-3">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
              {t.work.eyebrow}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-testid="work-heading"
              className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#0F0F0F] sm:text-5xl lg:text-6xl"
            >
              {t.work.headingA} <br className="hidden sm:block" />
              {(() => {
                const b = t.work.headingB || "";
                const hl = t.work.headingHighlight;
                if (!hl || !b.includes(hl)) return b;
                const [before, after] = b.split(hl);
                return (
                  <>
                    {before}
                    <span className="text-[#FF3E1A]">{hl}</span>
                    {after}
                  </>
                );
              })()}
            </h2>
            {t.work.subheading && (
              <p className="mt-6 max-w-2xl font-display text-base text-[#555555] sm:text-lg">
                {t.work.subheading}
              </p>
            )}
          </div>
        </header>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 sm:mt-16">
          {cases.map((cs, idx) => (
            <CaseStudyCard
              key={cs.slug}
              caseStudy={cs}
              caseLabel={t.caseLabel}
              reverse={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
