export const CaseStudyCard = ({
  caseStudy,
  caseLabel = "Case",
  visitLiveLabel = "Visit live site",
  reverse = false,
}) => {
  const { index, slug, title, client, role, summary, detail, image, tags, liveUrl } =
    caseStudy;

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
        <div className="relative overflow-hidden border border-ink bg-[#EAEAEA]">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-testid={`case-image-link-${slug}`}
              className="block"
              aria-label={`${visitLiveLabel} — ${title}`}
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </a>
          ) : (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          )}
          <span className="pointer-events-none absolute left-0 top-0 border-b border-r border-ink bg-[#0F0F0F] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]">
            {caseLabel} · {index}
          </span>
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
