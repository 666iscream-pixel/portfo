// All site copy in 3 languages. Keep keys identical across languages.
export const LANGS = [
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "ru", label: "RU" },
];

const sharedImages = {
  cs1: "https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg",
  cs2: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc",
  cs3: "https://images.pexels.com/photos/19650853/pexels-photo-19650853.jpeg",
};

const en = {
  meta: { htmlLang: "en" },
  nav: { work: "Work", about: "About", contact: "Contact", linkedin: "LinkedIn", telegram: "Telegram" },
  hero: {
    metaLocation: "Based in Warsaw, Poland",
    metaAvailable: "Available for new engagements",
    metaPortfolio: "Portfolio v.01",
    eyebrow: "Digital Systems Developer",
    headlineA: "Websites and workflows",
    headlineB: "that help service businesses",
    headlineC: "capture more inquiries.",
    headlineHighlight: "more inquiries",
    bio:
      "I build websites, booking pages, lead capture flows and automation for service businesses that want clearer client communication, faster follow-up and fewer lost leads.",
    ctaWork: "See selected work",
    ctaContact: "Start a project",
    whatIDo: "What I do",
    capabilities: [
      "Websites & booking pages",
      "Lead capture & follow-up",
      "Offer & document automation",
      "Discovery, scope & QA",
    ],
    marquee: ["SYSTEMS", "WORKFLOWS", "AUTOMATION", "WEBSITES", "LEAD FLOWS", "BOOKINGS", "FOLLOW-UP", "OFFERS"],
    portraitCaption: "Ihnat Zinkevich · Warsaw",
  },
  work: {
    eyebrow: "/ Section 02 — Selected work",
    headingA: "Selected work and",
    headingB: "workflow examples.",
    headingHighlight: "workflow",
    subheading: "",
  },
  about: {
    eyebrow: "/ Section 03 — About",
    headingA: "How I",
    headingHighlight: "work.",
    locationLabel: "Based in",
    location: "Warsaw, Poland",
    currentlyLabel: "Currently",
    currentlyValue: "Accepting projects",
    principles: [
      {
        t: "Clarity before code.",
        d: "I start by defining the real task: who the system is for, what action matters, and what needs to become easier for the business.",
      },
      {
        t: "Clear next steps.",
        d: "Every page, form or workflow should make the next action obvious for the client and easier for the team to handle.",
      },
      {
        t: "Fast enough to matter.",
        d: "I work in focused iterations: define the first useful version, build it quickly, and improve from real feedback instead of dragging the project through endless planning.",
      },
      {
        t: "Partner where useful.",
        d: "For more complex builds, I work with trusted technical partners while keeping discovery, scope, QA and communication clear.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Section 04 — Contact",
    headingA: "Have a",
    headingHighlight: "digital task",
    headingB: "that’s been stuck?",
    subheading:
      "Share what you’re trying to improve — a website, booking path, lead flow, follow-up or document workflow.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    telegramLabel: "Telegram",
    locationLabel: "Location",
    locationValue: "Warsaw, Poland",
    form: {
      name: "Name *",
      namePlaceholder: "Your name",
      email: "Email *",
      emailPlaceholder: "you@company.com",
      company: "Company (optional)",
      companyPlaceholder: "Company / studio",
      message: "Project details *",
      messagePlaceholder:
        "What are you trying to improve? Tell me about the task, the audience and the timeline.",
      required: "Required",
      invalidEmail: "Invalid email",
      submit: "Send message",
      submitting: "Sending…",
      toastSuccess: "Message sent. I’ll get back to you shortly.",
      toastError: "Could not send your message. Please try again.",
    },
  },
  footer: {
    eyebrow: "/ Let’s build a calmer system",
    headlineA: "Less chaos.",
    headlineB: "More throughput.",
    contactLabel: "Contact",
    socialLabel: "Social",
    linkedin: "LinkedIn ↗",
    telegram: "Telegram ↗",
    rights: "All rights reserved",
  },
  caseStudies: [
    {
      index: "01",
      slug: "premium-service-website",
      image: sharedImages.cs1,
      title: "Premium Service Website & Booking Experience",
      client: "Service business website",
      role: "Website design · Front-end · Booking flow · CMS-ready structure",
      summary:
        "A premium website for a high-ticket service business, focused on turning visitor interest into clear inquiries and bookings.",
      detail:
        "Includes a polished visual direction, mobile-first layout, service presentation, trust-building sections, clear calls to action and a CMS-ready content structure for future updates.",
      tags: ["Website Design", "Front-end", "Booking Flow", "Premium Services", "CMS-ready", "Mobile-first"],
    },
    {
      index: "02",
      slug: "lead-capture-workflow",
      image: sharedImages.cs2,
      title: "Lead Capture & Follow-up Workflow",
      client: "Service business workflow",
      role: "Workflow automation · Lead routing · Follow-up logic",
      summary:
        "A lightweight workflow for service businesses receiving inquiries from forms, calls or direct messages.",
      detail:
        "The system collects lead details, asks qualification questions, creates a structured lead summary, notifies the owner or admin and prepares a follow-up reminder.",
      tags: ["Automation", "Lead Capture", "Follow-up", "CRM-ready", "Service Business"],
    },
    {
      index: "03",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs3,
      title: "Offer From Brief Workflow",
      client: "B2B & service business workflow",
      role: "Document workflow · Sales support · Follow-up automation",
      summary:
        "A workflow that turns a client brief, call notes or chat summary into structured requirements, an offer draft, an email draft and a follow-up task.",
      detail:
        "Designed for businesses that spend too much time manually preparing proposals, summaries and client follow-ups.",
      tags: ["Automation", "Offers", "Documents", "B2B", "Sales Workflow", "Follow-up"],
    },
  ],
  caseLabel: "Case",
  langSwitcherLabel: "Language",
};

const pl = {
  meta: { htmlLang: "pl" },
  nav: { work: "Prace", about: "O mnie", contact: "Kontakt", linkedin: "LinkedIn", telegram: "Telegram" },
  hero: {
    metaLocation: "Z siedzibą w Warszawie, Polska",
    metaAvailable: "Dostępny do nowych projektów",
    metaPortfolio: "Portfolio v.01",
    eyebrow: "Digital Systems Developer",
    headlineA: "Strony i procesy,",
    headlineB: "które pomagają firmom usługowym",
    headlineC: "pozyskiwać więcej zapytań.",
    headlineHighlight: "więcej zapytań",
    bio:
      "Buduję strony, ścieżki rezerwacji, procesy pozyskiwania leadów i automatyzacje dla firm usługowych, którym zależy na klarownej komunikacji z klientem, szybszym follow-upie i mniejszej liczbie utraconych leadów.",
    ctaWork: "Zobacz wybrane prace",
    ctaContact: "Rozpocznij projekt",
    whatIDo: "Co robię",
    capabilities: [
      "Strony i ścieżki rezerwacji",
      "Pozyskiwanie i obsługa leadów",
      "Automatyzacja ofert i dokumentów",
      "Discovery, zakres i QA",
    ],
    marquee: ["SYSTEMY", "PROCESY", "AUTOMATYZACJA", "STRONY", "LEADY", "REZERWACJE", "FOLLOW-UP", "OFERTY"],
    portraitCaption: "Ihnat Zinkevich · Warszawa",
  },
  work: {
    eyebrow: "/ Sekcja 02 — Wybrane prace",
    headingA: "Wybrane prace",
    headingB: "i przykłady procesów.",
    headingHighlight: "procesów",
    subheading: "",
  },
  about: {
    eyebrow: "/ Sekcja 03 — O mnie",
    headingA: "Jak",
    headingHighlight: "pracuję.",
    locationLabel: "Z siedzibą",
    location: "Warszawa, Polska",
    currentlyLabel: "Obecnie",
    currentlyValue: "Przyjmuję projekty",
    principles: [
      {
        t: "Najpierw klarowność, potem kod.",
        d: "Zaczynam od zdefiniowania prawdziwego zadania: dla kogo jest system, jakie działanie jest najważniejsze i co ma stać się łatwiejsze dla biznesu.",
      },
      {
        t: "Jasne kolejne kroki.",
        d: "Każda strona, formularz lub proces powinien sprawiać, że kolejne działanie jest oczywiste dla klienta i łatwiejsze do obsługi przez zespół.",
      },
      {
        t: "Szybko na tyle, by miało to znaczenie.",
        d: "Pracuję w skupionych iteracjach: definiuję pierwszą użyteczną wersję, buduję ją szybko i ulepszam na podstawie realnego feedbacku, zamiast ciągnąć projekt przez nieskończone planowanie.",
      },
      {
        t: "Partnerstwo tam, gdzie ma sens.",
        d: "Przy bardziej złożonych wdrożeniach współpracuję ze sprawdzonymi partnerami technicznymi, dbając o jasność discovery, zakresu, QA i komunikacji.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Sekcja 04 — Kontakt",
    headingA: "Masz",
    headingHighlight: "zadanie cyfrowe,",
    headingB: "które utknęło?",
    subheading:
      "Napisz, co chcesz usprawnić — stronę, ścieżkę rezerwacji, proces pozyskiwania leadów, follow-up lub obieg dokumentów.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    telegramLabel: "Telegram",
    locationLabel: "Lokalizacja",
    locationValue: "Warszawa, Polska",
    form: {
      name: "Imię *",
      namePlaceholder: "Twoje imię",
      email: "E-mail *",
      emailPlaceholder: "ty@firma.pl",
      company: "Firma (opcjonalnie)",
      companyPlaceholder: "Firma / studio",
      message: "Szczegóły projektu *",
      messagePlaceholder:
        "Co chcesz usprawnić? Napisz o zadaniu, odbiorcach i ramach czasowych.",
      required: "Wymagane",
      invalidEmail: "Niepoprawny e-mail",
      submit: "Wyślij wiadomość",
      submitting: "Wysyłanie…",
      toastSuccess: "Wiadomość wysłana. Odezwę się wkrótce.",
      toastError: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
    },
  },
  footer: {
    eyebrow: "/ Zbudujmy spokojniejszy system",
    headlineA: "Mniej chaosu.",
    headlineB: "Większa przepustowość.",
    contactLabel: "Kontakt",
    socialLabel: "Social",
    linkedin: "LinkedIn ↗",
    telegram: "Telegram ↗",
    rights: "Wszelkie prawa zastrzeżone",
  },
  caseStudies: [
    {
      index: "01",
      slug: "premium-service-website",
      image: sharedImages.cs1,
      title: "Strona i ścieżka rezerwacji dla usług premium",
      client: "Strona dla biznesu usługowego",
      role: "Projekt strony · Front-end · Ścieżka rezerwacji · Struktura pod CMS",
      summary:
        "Premium strona dla biznesu usługowego z wysokim koszykiem — zaprojektowana, by zamieniać zainteresowanie odwiedzającego w jasne zapytania i rezerwacje.",
      detail:
        "Zawiera spójny kierunek wizualny, układ mobile-first, prezentację usług, sekcje budujące zaufanie, jasne CTA i strukturę treści przygotowaną pod CMS.",
      tags: ["Projekt strony", "Front-end", "Ścieżka rezerwacji", "Usługi premium", "CMS-ready", "Mobile-first"],
    },
    {
      index: "02",
      slug: "lead-capture-workflow",
      image: sharedImages.cs2,
      title: "Proces pozyskiwania i obsługi leadów",
      client: "Proces dla biznesu usługowego",
      role: "Automatyzacja procesu · Routing leadów · Logika follow-upu",
      summary:
        "Lekki proces dla firm usługowych otrzymujących zapytania z formularzy, telefonów lub wiadomości.",
      detail:
        "System zbiera dane leada, zadaje pytania kwalifikujące, tworzy strukturalne podsumowanie, powiadamia właściciela lub admina i przygotowuje przypomnienie o follow-upie.",
      tags: ["Automatyzacja", "Pozyskiwanie leadów", "Follow-up", "Gotowe pod CRM", "Biznes usługowy"],
    },
    {
      index: "03",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs3,
      title: "Proces „oferta z briefu”",
      client: "Proces B2B i biznesu usługowego",
      role: "Workflow dokumentów · Wsparcie sprzedaży · Automatyzacja follow-upu",
      summary:
        "Proces, który zamienia brief klienta, notatki z rozmowy lub podsumowanie czatu w strukturalne wymagania, draft oferty, draft maila i zadanie follow-up.",
      detail:
        "Dla firm, które tracą zbyt dużo czasu na ręczne przygotowanie ofert, podsumowań i follow-upów.",
      tags: ["Automatyzacja", "Oferty", "Dokumenty", "B2B", "Sprzedaż", "Follow-up"],
    },
  ],
  caseLabel: "Case",
  langSwitcherLabel: "Język",
};

const ru = {
  meta: { htmlLang: "ru" },
  nav: { work: "Работы", about: "Обо мне", contact: "Контакт", linkedin: "LinkedIn", telegram: "Telegram" },
  hero: {
    metaLocation: "Базируюсь в Варшаве, Польша",
    metaAvailable: "Открыт к новым проектам",
    metaPortfolio: "Портфолио v.01",
    eyebrow: "Digital Systems Developer",
    headlineA: "Сайты и процессы,",
    headlineB: "которые помогают сервисному бизнесу",
    headlineC: "получать больше заявок.",
    headlineHighlight: "больше заявок",
    bio:
      "Делаю сайты, страницы бронирования, процессы захвата лидов и автоматизации для сервисного бизнеса — для тех, кому важна понятная коммуникация с клиентом, быстрый follow-up и меньше потерянных лидов.",
    ctaWork: "Смотреть избранные работы",
    ctaContact: "Начать проект",
    whatIDo: "Что я делаю",
    capabilities: [
      "Сайты и страницы бронирования",
      "Захват и обработка лидов",
      "Автоматизация офферов и документов",
      "Discovery, скоуп и QA",
    ],
    marquee: ["СИСТЕМЫ", "ПРОЦЕССЫ", "АВТОМАТИЗАЦИЯ", "САЙТЫ", "ЛИДЫ", "БРОНИРОВАНИЯ", "FOLLOW-UP", "ОФФЕРЫ"],
    portraitCaption: "Ihnat Zinkevich · Варшава",
  },
  work: {
    eyebrow: "/ Раздел 02 — Избранные работы",
    headingA: "Избранные работы",
    headingB: "и примеры процессов.",
    headingHighlight: "процессов",
    subheading: "",
  },
  about: {
    eyebrow: "/ Раздел 03 — Обо мне",
    headingA: "Как я",
    headingHighlight: "работаю.",
    locationLabel: "Базируюсь",
    location: "Варшава, Польша",
    currentlyLabel: "Сейчас",
    currentlyValue: "Принимаю проекты",
    principles: [
      {
        t: "Сначала ясность, потом код.",
        d: "Начинаю с определения настоящей задачи: для кого эта система, какое действие важно и что должно стать проще для бизнеса.",
      },
      {
        t: "Понятные следующие шаги.",
        d: "Каждая страница, форма или процесс должны делать следующее действие очевидным для клиента и удобным для команды.",
      },
      {
        t: "Достаточно быстро, чтобы это имело значение.",
        d: "Работаю короткими итерациями: определяю первую полезную версию, быстро её собираю и улучшаю на основе реальной обратной связи, а не тяну проект через бесконечное планирование.",
      },
      {
        t: "Партнёрство там, где это нужно.",
        d: "Для более сложных задач работаю с проверенными техническими партнёрами, сохраняя ясность discovery, скоупа, QA и коммуникации.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Раздел 04 — Контакт",
    headingA: "Есть",
    headingHighlight: "цифровая задача,",
    headingB: "которая застряла?",
    subheading:
      "Расскажите, что хотите улучшить — сайт, путь бронирования, процесс захвата лидов, follow-up или работу с документами.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    telegramLabel: "Telegram",
    locationLabel: "Локация",
    locationValue: "Варшава, Польша",
    form: {
      name: "Имя *",
      namePlaceholder: "Ваше имя",
      email: "E-mail *",
      emailPlaceholder: "you@company.com",
      company: "Компания (необязательно)",
      companyPlaceholder: "Компания / студия",
      message: "Детали проекта *",
      messagePlaceholder:
        "Что хотите улучшить? Расскажите о задаче, аудитории и сроках.",
      required: "Обязательно",
      invalidEmail: "Неверный e-mail",
      submit: "Отправить сообщение",
      submitting: "Отправляю…",
      toastSuccess: "Сообщение отправлено. Скоро вернусь с ответом.",
      toastError: "Не удалось отправить сообщение. Попробуйте ещё раз.",
    },
  },
  footer: {
    eyebrow: "/ Построим более спокойную систему",
    headlineA: "Меньше хаоса.",
    headlineB: "Больше пропускной способности.",
    contactLabel: "Контакт",
    socialLabel: "Соцсети",
    linkedin: "LinkedIn ↗",
    telegram: "Telegram ↗",
    rights: "Все права защищены",
  },
  caseStudies: [
    {
      index: "01",
      slug: "premium-service-website",
      image: sharedImages.cs1,
      title: "Сайт и процесс бронирования для премиум-услуг",
      client: "Сайт для сервисного бизнеса",
      role: "Дизайн сайта · Front-end · Процесс бронирования · Структура под CMS",
      summary:
        "Премиум-сайт для сервисного бизнеса с высоким чеком — превращает интерес посетителя в чёткие заявки и бронирования.",
      detail:
        "Включает визуальное направление, mobile-first вёрстку, презентацию услуг, секции доверия, чёткие CTA и структуру контента, готовую под CMS.",
      tags: ["Дизайн сайта", "Front-end", "Бронирование", "Премиум-услуги", "CMS-ready", "Mobile-first"],
    },
    {
      index: "02",
      slug: "lead-capture-workflow",
      image: sharedImages.cs2,
      title: "Процесс захвата и обработки лидов",
      client: "Процесс для сервисного бизнеса",
      role: "Автоматизация процесса · Маршрутизация лидов · Логика follow-up",
      summary:
        "Лёгкий процесс для сервисных компаний, получающих заявки из форм, звонков или сообщений.",
      detail:
        "Система собирает данные лида, задаёт квалифицирующие вопросы, создаёт структурированное резюме, уведомляет владельца и готовит напоминание для follow-up.",
      tags: ["Автоматизация", "Захват лидов", "Follow-up", "Под CRM", "Сервисный бизнес"],
    },
    {
      index: "03",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs3,
      title: "Процесс «оффер из брифа»",
      client: "Процесс для B2B и сервисного бизнеса",
      role: "Документооборот · Поддержка продаж · Автоматизация follow-up",
      summary:
        "Процесс превращает бриф клиента, заметки со звонка или резюме чата в структурированные требования, черновик оффера, черновик письма и задачу follow-up.",
      detail:
        "Для компаний, которые тратят слишком много времени на ручную подготовку предложений, резюме и follow-up.",
      tags: ["Автоматизация", "Офферы", "Документы", "B2B", "Продажи", "Follow-up"],
    },
  ],
  caseLabel: "Кейс",
  langSwitcherLabel: "Язык",
};

export const translations = { en, pl, ru };
