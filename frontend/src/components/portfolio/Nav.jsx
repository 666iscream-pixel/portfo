import { useEffect, useState } from "react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "font-mono-tech text-xs uppercase tracking-[0.18em] text-[#0F0F0F] hover:text-[#FF3E1A] transition-colors duration-200";

  return (
    <header
      data-testid="site-nav"
      className={`sticky top-0 z-50 w-full border-b border-ink bg-[#F4F4F0]/85 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_#0F0F0F]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3"
          aria-label="Ihnat Zinkevich — home"
        >
          <span className="grid h-8 w-8 place-items-center border border-ink bg-[#0F0F0F] font-display text-sm font-bold text-[#F4F4F0]">
            IZ
          </span>
          <span className="hidden font-display text-sm font-bold uppercase tracking-tight sm:inline">
            Ihnat Zinkevich
          </span>
        </a>

        <nav className="flex items-center gap-6 sm:gap-10">
          <a href="#work" data-testid="nav-work-link" className={linkBase}>
            Work
          </a>
          <a href="#about" data-testid="nav-about-link" className={`${linkBase} hidden sm:inline`}>
            About
          </a>
          <a href="#contact" data-testid="nav-contact-link" className={linkBase}>
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/ihnat-zinkevich/"
            target="_blank"
            rel="noreferrer noopener"
            data-testid="nav-linkedin-link"
            className="hidden border border-ink bg-[#0F0F0F] px-3 py-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#F4F4F0] transition-transform hover:-translate-y-[2px] hover:bg-[#FF3E1A] sm:inline-block"
          >
            LinkedIn ↗
          </a>
        </nav>
      </div>
    </header>
  );
};
