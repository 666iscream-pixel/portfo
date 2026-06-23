import { useState } from "react";

const ChevronLeft = ({ className = "" }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
  >
    <polyline points="15 6 9 12 15 18" />
  </svg>
);
const ChevronRight = ({ className = "" }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const pad = (n) => String(n).padStart(2, "0");

export const CaseStudyCard = ({
  caseStudy,
  caseLabel = "Case",
  visitLiveLabel = "Visit live site",
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  slideOfLabel = "of",
  reverse = false,
}) => {
  const { index, slug, title, client, role, summary, detail, image, tags, liveUrl, gallery } =
    caseStudy;

  const slides = gallery && gallery.length > 0 ? gallery : [image];
  const [idx, setIdx] = useState(0);
  const goTo = (i) => setIdx(((i % slides.length) + slides.length) % slides.length);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);
  const hasCarousel = slides.length > 1;

  return (
    <article
      data-testid={`case-study-${slug}`}
      className="reveal group col-span-12 grid grid-cols-12 gap-x-6 gap-y-6 border border-ink bg-[#FFFFFF] p-5 transition-shadow hover:shadow-[8px_8px_0_0_#0F0F0F] sm:p-7"
    >
      <div
        className={`col-span-12 lg:col-span-7 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-[#EAEAEA]">
          {slides.map((src, i) => {
            const img = (
              <img
                src={src}
                alt={`${title} — ${i + 1}/${slides.length}`}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            );
            return (
              <div key={src} aria-hidden={i !== idx} className="absolute inset-0">
                {liveUrl && i === 0 ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${visitLiveLabel} — ${title}`}
                    className="block h-full w-full"
                    tabIndex={i === idx ? 0 : -1}
                  >
                    {img}
                  </a>
                ) : (
                  img
                )}
              </div>
            );
          })}

          {/* Case label */}
          <span className="pointer-events-none absolute left-0 top-0 z-10 border-b border-r border-ink bg-[#0F0F0F] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]">
            {caseLabel} · {index}
          </span>

          {hasCarousel && (
            <>
              {/* Counter */}
              <span
                data-testid={`case-counter-${slug}`}
                className="pointer-events-none absolute right-0 top-0 z-10 border-b border-l border-ink bg-[#F4F4F0] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#0F0F0F]"
              >
                {pad(idx + 1)} {slideOfLabel} {pad(slides.length)}
              </span>

              {/* Arrows */}
              <button
                type="button"
                onClick={prev}
                aria-label={prevLabel}
                data-testid={`case-prev-${slug}`}
                className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-ink bg-[#F4F4F0] text-[#0F0F0F] transition-transform hover:-translate-x-[2px] hover:-translate-y-[calc(50%+2px)] hover:bg-[#0F0F0F] hover:text-[#F4F4F0]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={nextLabel}
                data-testid={`case-next-${slug}`}
                className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-ink bg-[#F4F4F0] text-[#0F0F0F] transition-transform hover:translate-x-[2px] hover:-translate-y-[calc(50%+2px)] hover:bg-[#0F0F0F] hover:text-[#F4F4F0]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    data-testid={`case-dot-${slug}-${i}`}
                    className={`h-2 border border-ink transition-all ${
                      i === idx ? "w-6 bg-[#FF3E1A]" : "w-3 bg-[#F4F4F0] hover:bg-[#0F0F0F]"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className={`col-span-12 flex flex-col justify-between lg:col-span-5 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div>
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#555555]">
            {client}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-[#0F0F0F] sm:text-3xl">
            {title}
          </h3>
          <p className="mt-2 font-mono-tech text-xs uppercase tracking-[0.14em] text-[#0F0F0F]">
            {role}
          </p>
          <p className="mt-5 font-display text-base leading-relaxed text-[#0F0F0F] sm:text-[17px]">
            {summary}
          </p>
          <p className="mt-3 font-display text-sm leading-relaxed text-[#555555] sm:text-base">
            {detail}
          </p>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-testid={`case-live-link-${slug}`}
              className="mt-5 inline-flex items-center gap-2 border border-ink bg-[#0F0F0F] px-4 py-2 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#F4F4F0] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3E1A] hover:shadow-[3px_3px_0_0_#0F0F0F]"
            >
              {visitLiveLabel}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-ink bg-transparent px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#0F0F0F]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
