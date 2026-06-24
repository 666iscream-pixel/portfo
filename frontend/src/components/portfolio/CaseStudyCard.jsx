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

const getSlide = (slide) =>
  typeof slide === "string"
    ? { src: slide, fit: "contain", position: "center" }
    : {
        src: slide.src,
        fit: slide.fit || "contain",
        position: slide.position || "center",
      };

const MickiewiczShowcase = ({ title }) => {
  const screens = [
    "/case-mickiewicz.jpg",
    "/case-mickiewicz-02.jpg",
    "/case-mickiewicz-03.jpg",
  ];

  return (
    <div className="relative min-h-[360px] overflow-hidden border border-ink bg-[#E9F0F2] p-4 sm:min-h-[440px] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[#F7F7F4]" aria-hidden />
      <div className="relative mx-auto flex h-full max-w-[720px] flex-col justify-center gap-4">
        <div className="border border-ink bg-[#0F0F0F] p-2 hard-shadow-sm">
          <div className="aspect-video overflow-hidden bg-[#F4F4F0]">
            <img
              src={screens[0]}
              alt={`${title} - desktop overview`}
              loading="eager"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:absolute sm:bottom-4 sm:right-2 sm:w-[58%]">
          {screens.slice(1).map((src, i) => (
            <div
              key={src}
              className="border border-ink bg-[#FFFFFF] p-1.5 shadow-[4px_4px_0_0_#0F0F0F]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#F4F4F0]">
                <img
                  src={src}
                  alt={`${title} - screen ${i + 2}`}
                  loading="lazy"
                  className="h-full w-full object-contain object-top"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden border border-ink bg-[#FFFFFF] px-4 py-2 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#0F0F0F] shadow-[3px_3px_0_0_#0F0F0F] sm:absolute sm:bottom-6 sm:left-0 sm:block">
          Mickiewicz Dental Clinic
        </div>
      </div>
    </div>
  );
};

export const CaseStudyCard = ({
  caseStudy,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  slideOfLabel = "of",
  reverse = false,
}) => {
  const { slug, title, client, role, summary, detail, image, tags, gallery } = caseStudy;

  const slides = (gallery && gallery.length > 0 ? gallery : [image]).map(getSlide);
  const [idx, setIdx] = useState(0);
  const goTo = (i) => setIdx(((i % slides.length) + slides.length) % slides.length);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);
  const hasCarousel = slides.length > 1;
  const isMickiewicz = slug === "mickiewicz-dental-clinic";

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
        {isMickiewicz ? (
          <MickiewiczShowcase title={title} />
        ) : (
          <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-[#EAEAEA]">
            {slides.map((slide, i) => (
              <div key={`${slide.src}-${i}`} aria-hidden={i !== idx} className="absolute inset-0">
                <img
                  src={slide.src}
                  alt={`${title} - ${i + 1}/${slides.length}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                    slide.fit === "cover" ? "object-cover" : "object-contain"
                  } ${
                    i === idx ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ objectPosition: slide.position }}
                />
              </div>
            ))}

            {hasCarousel && (
              <>
                <span
                  data-testid={`case-counter-${slug}`}
                  className="pointer-events-none absolute right-0 top-0 z-10 border-b border-l border-ink bg-[#F4F4F0] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#0F0F0F]"
                >
                  {pad(idx + 1)} {slideOfLabel} {pad(slides.length)}
                </span>

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
        )}
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
