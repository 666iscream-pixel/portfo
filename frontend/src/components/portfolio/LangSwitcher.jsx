import { useI18n } from "../../i18n/I18nContext";

export const LangSwitcher = ({ className = "" }) => {
  const { lang, setLang, langs } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language selector"
      data-testid="lang-switcher"
      className={`inline-flex items-center border border-ink bg-[#F4F4F0] ${className}`}
    >
      {langs.map((l, i) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            data-testid={`lang-btn-${l.code}`}
            className={`px-2.5 py-1.5 font-mono-tech text-[10px] uppercase tracking-[0.18em] transition-colors ${
              active
                ? "bg-[#0F0F0F] text-[#F4F4F0]"
                : "bg-transparent text-[#0F0F0F] hover:bg-[#0F0F0F]/10"
            } ${i > 0 ? "border-l border-ink" : ""}`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
};
