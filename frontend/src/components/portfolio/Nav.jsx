import { useEffect, useState } from "react";
import { useT } from "../../i18n/I18nContext";
import { LangSwitcher } from "./LangSwitcher";
import { profile } from "../../data/portfolio";

export const Nav = () => {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "font-mono-tech text-xs uppercase tracking-[0.18em] text-[#0F0F0F] hover:text-[#FF3E1A] transition-colors duration-200";

  const socialBtnBase =
    "inline-flex items-center gap-1.5 border border-ink bg-[#0F0F0F] px-3 py-2 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#F4F4F0] transition-transform hover:-translate-y-[2px] hover:bg-[#FF3E1A]";

  return (
    <header
      data-testid="site-nav"
      className={`sticky top-0 z-50 w-full border-b border-ink bg-[#F4F4F0]/85 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_#0F0F0F]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
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

        <nav className="flex items-center gap-4 sm:gap-6">
          <a href="#work" data-testid="nav-work-link" className={linkBase}>
            {t.nav.work}
          </a>
          <a href="#about" data-testid="nav-about-link" className={`${linkBase} hidden sm:inline`}>
            {t.nav.about}
          </a>
          <a href="#contact" data-testid="nav-contact-link" className={linkBase}>
            {t.nav.contact}
          </a>
          <LangSwitcher className="hidden sm:inline-flex" />
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="nav-linkedin-link"
              className={socialBtnBase}
              aria-label="LinkedIn"
            >
              {t.nav.linkedin} ↗
            </a>
            <a
              href={profile.telegram}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="nav-telegram-link"
              className={socialBtnBase}
              aria-label="Telegram"
            >
              {t.nav.telegram} ↗
            </a>
          </div>
        </nav>
      </div>
      {/* Mobile row: lang switcher + social buttons */}
      <div className="flex items-center border-t border-ink/15 px-5 py-2 md:hidden">
        <LangSwitcher />
        <div className="hidden items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="nav-linkedin-link-mobile"
            className={socialBtnBase}
            aria-label="LinkedIn"
          >
            LI ↗
          </a>
          <a
            href={profile.telegram}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="nav-telegram-link-mobile"
            className={socialBtnBase}
            aria-label="Telegram"
          >
            TG ↗
          </a>
        </div>
      </div>
    </header>
  );
};
