import { profile } from "../../data/portfolio";
import { useT } from "../../i18n/I18nContext";

export const Footer = () => {
  const t = useT();
  return (
    <footer data-testid="site-footer" className="bg-[#0F0F0F] text-[#F4F4F0]">
      <div className="mx-auto max-w-[1480px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]/60">
              {t.footer.eyebrow}
            </p>
            <h3 className="mt-4 font-display text-3xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl">
              {t.footer.lineA}
              <br />
              {t.footer.lineB}
              <br />
              <span className="text-[#FF3E1A]">{t.footer.lineC}</span>
            </h3>
          </div>

          <div className="col-span-12 flex flex-wrap gap-x-10 gap-y-8 lg:col-span-5 lg:justify-end">
            <div className="min-w-[200px]">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]/60">
                {t.footer.contactLabel}
              </p>
              <a
                href={`mailto:${profile.email}`}
                data-testid="footer-email-link"
                className="mt-2 block font-display text-sm font-bold text-[#F4F4F0] underline decoration-[#FF3E1A] decoration-2 underline-offset-4 hover:text-[#FF3E1A] sm:text-base"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                data-testid="footer-phone-link"
                className="mt-1 block font-display text-sm font-bold text-[#F4F4F0] underline decoration-[#FF3E1A] decoration-2 underline-offset-4 hover:text-[#FF3E1A] sm:text-base"
              >
                {profile.phone}
              </a>
            </div>
            <div className="min-w-[100px]">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]/60">
                LinkedIn
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                data-testid="footer-linkedin-link"
                className="mt-2 inline-block font-display text-sm font-bold text-[#F4F4F0] underline decoration-[#FF3E1A] decoration-2 underline-offset-4 hover:text-[#FF3E1A] sm:text-base"
              >
                LinkedIn ↗
              </a>
            </div>
            <div className="min-w-[100px]">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]/60">
                Telegram
              </p>
              <a
                href={profile.telegram}
                target="_blank"
                rel="noreferrer noopener"
                data-testid="footer-telegram-link"
                className="mt-2 inline-block font-display text-sm font-bold text-[#F4F4F0] underline decoration-[#FF3E1A] decoration-2 underline-offset-4 hover:text-[#FF3E1A] sm:text-base"
              >
                Telegram ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#F4F4F0]/20 pt-6 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F4F4F0]/60">
          © {new Date().getFullYear()} {profile.name} — {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
