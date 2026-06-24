import { useEffect, useState } from "react";

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
  const [modalOpen, setModalOpen] = useState(false);
  const goTo = (i) => setIdx(((i % slides.length) + slides.length) % slides.length);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);
  const hasCarousel = slides.length > 1;
  const canOpenModal = Number.parseInt(caseStudy.index, 10) <= 3;
  const activeSlide = slides[idx];

  useEffect(() => {
    if (!modalOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setModalOpen(false);
      if (event.key === "ArrowLeft" && hasCarousel) {
        setIdx((current) => ((current - 1) % slides.length + slides.length) % slides.length);
      }
      if (event.key === "ArrowRight" && hasCarousel) {
        setIdx((current) => (current + 1) % slides.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen, hasCarousel, slides.length]);

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
        <div
          className={`relative aspect-[4/3] overflow-hidden border border-ink bg-[#EAEAEA] ${
            canOpenModal ? "cursor-zoom-in" : ""
          }`}
          onClick={() => canOpenModal && setModalOpen(true)}
          role={canOpenModal ? "button" : undefined}
          tabIndex={canOpenModal ? 0 : undefined}
          onKeyDown={(event) => {
            if (!canOpenModal) return;
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setModalOpen(true);
            }
          }}
          aria-label={canOpenModal ? `Open ${title} image preview` : undefined}
        >
          {slides.map((slide, i) => (
            <div key={`${slide.src}-${i}`} aria-hidden={i !== idx} className="absolute inset-0">
              <img
                src={slide.src}
                alt={`${title} - ${i + 1}/${slides.length}`}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                  slide.fit === "cover" ? "object-cover" : "object-contain"
                } ${i === idx ? "opacity-100" : "opacity-0"}`}
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
                onClick={(event) => {
                  event.stopPropagation();
                  prev();
                }}
                aria-label={prevLabel}
                data-testid={`case-prev-${slug}`}
                className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-ink bg-[#F4F4F0] text-[#0F0F0F] transition-transform hover:-translate-x-[2px] hover:-translate-y-[calc(50%+2px)] hover:bg-[#0F0F0F] hover:text-[#F4F4F0]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
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
                    onClick={(event) => {
                      event.stopPropagation();
                      goTo(i);
                    }}
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

      {canOpenModal && modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F0F0F]/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative flex h-full w-full max-w-[1500px] flex-col border border-[#F4F4F0] bg-[#0F0F0F]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#F4F4F0] bg-[#0F0F0F] px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]/60">
                  {client}
                </p>
                <p className="truncate font-display text-sm font-bold text-[#F4F4F0] sm:text-base">
                  {title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="grid h-10 w-10 shrink-0 place-items-center border border-[#F4F4F0] bg-[#F4F4F0] font-mono-tech text-xs text-[#0F0F0F] transition-colors hover:bg-[#FF3E1A]"
                aria-label="Close preview"
              >
                X
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-[#111111]">
              <img
                src={activeSlide.src}
                alt={`${title} - enlarged ${idx + 1}/${slides.length}`}
                className="h-full w-full object-contain"
                style={{ objectPosition: activeSlide.position }}
              />

              {hasCarousel && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label={prevLabel}
                    className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-[#F4F4F0] bg-[#F4F4F0] text-[#0F0F0F] transition-colors hover:bg-[#FF3E1A]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label={nextLabel}
                    className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-[#F4F4F0] bg-[#F4F4F0] text-[#0F0F0F] transition-colors hover:bg-[#FF3E1A]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 border border-[#F4F4F0] bg-[#0F0F0F] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]">
                    {pad(idx + 1)} {slideOfLabel} {pad(slides.length)}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
