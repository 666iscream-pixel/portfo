import { caseStudies } from "../../data/portfolio";
import { CaseStudyCard } from "./CaseStudyCard";

export const Work = () => {
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
              / Section 02 — Selected work
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-testid="work-heading"
              className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#0F0F0F] sm:text-5xl lg:text-6xl"
            >
              Projects shaped <br className="hidden sm:block" />around
              <span className="text-[#FF3E1A]"> measurable</span> outcomes.
            </h2>
            <p className="mt-6 max-w-2xl font-display text-base text-[#555555] sm:text-lg">
              A mix of premium service websites, lead workflows and document
              automation — each focused on closing the gaps where service
              businesses lose time, revenue or clarity.
            </p>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 sm:mt-16">
          {caseStudies.map((cs, idx) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
