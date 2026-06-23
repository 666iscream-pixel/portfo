// All site copy in 3 languages. Keep keys identical across languages.
export const LANGS = [
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "ru", label: "RU" },
];

const sharedImages = {
  cs1: "/case-mickiewicz.jpg",
  cs2: "https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg",
  cs3: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc",
  cs4: "https://images.pexels.com/photos/19650853/pexels-photo-19650853.jpeg",
};

const mickiewiczGallery = [
  "/case-mickiewicz.jpg",
  "/case-mickiewicz-02.jpg",
  "/case-mickiewicz-03.jpg",
  "https://customer-assets.emergentagent.com/job_pro-portfolio-363/artifacts/za2d405a_ssstt.png",
  "https://customer-assets.emergentagent.com/job_pro-portfolio-363/artifacts/ga4fitqh_SSSS.png",
];

const en = {
  meta: { htmlLang: "en" },
  nav: { work: "Work", about: "About", contact: "Contact", linkedin: "LinkedIn", telegram: "Telegram" },
  hero: {
    metaLocation: "Based in Warsaw, Poland",
    metaAvailable: "Available for new engagements",
    metaPortfolio: "Portfolio v.01",
    eyebrow: "Web Design · Development · Automation",
    headlineA: "Websites and client workflows",
    headlineB: "",
    headlineC: "for service businesses.",
    headlineHighlight: "service businesses",
    bio:
      "I build websites, lead flows and lightweight automation systems that help service teams get clearer inquiries, respond faster and reduce manual admin.",
    ctaWork: "See selected work",
    ctaContact: "Start a project",
    whatIDo: "What I do",
    capabilities: [
      "Web design & development",
      "Lead flows & follow-up",
      "Business process automation",
      "Scope, QA & delivery",
    ],
    marquee: ["DESIGN", "DEVELOPMENT", "AUTOMATION", "LEAD FLOWS", "FORMS", "FOLLOW-UP", "BUSINESS PROCESSES", "QA", "DELIVERY"],
    portraitCaption: "Ihnat Zinkevich · Warsaw",
  },
  work: {
    eyebrow: "/ Section 02 — Selected work",
    headingA: "Selected work and",
    headingB: "solution examples.",
    headingHighlight: "solution",
    subheading:
      "A mix of client work and focused examples around websites, lead handling, document workflows and process automation.",
    visitLive: "Visit live site",
    prevSlide: "Previous slide",
    nextSlide: "Next slide",
    slideOf: "of",
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
        d: "I start by defining the real business task: what needs to work better, who uses it, and what result the first version should create.",
      },
      {
        t: "Clear next steps.",
        d: "I make the path easier for both sides: what the client should do next, what the team should receive, and how the request moves forward.",
      },
      {
        t: "Fast enough to matter.",
        d: "I work in focused iterations: define the useful first version, build quickly, test, and improve without turning every project into a long agency process.",
      },
      {
        t: "One owner, trusted partners.",
        d: "You work with one person responsible for scope, communication and quality. For complex builds, I bring in trusted technical partners when useful.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Section 04 — Contact",
    headingA: "Need a",
    headingHighlight: "digital project",
    headingB: "moved forward?",
    subheading:
      "Share what you want to improve — a website, form, lead flow, follow-up, document process or internal workflow. I’ll reply with the clearest next step.",
    emailLabel: "Email",
    phoneLabel: "Phone",
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
    eyebrow: "/ Digital work without the drag",
    lineA: "Clear scope.",
    lineB: "Fast delivery.",
    lineC: "One point of contact.",
    contactLabel: "Contact",
    rights: "All rights reserved",
  },
  caseStudies: [
    {
      index: "01",
      slug: "mickiewicz-dental-clinic",
      image: sharedImages.cs1,
      gallery: mickiewiczGallery,
      liveUrl: "https://www.mickiewiczdental.pl/",
      title: "Premium Healthcare Website & CMS",
      client: "Mickiewicz Dental Clinic — Warsaw",
      role: "Design · React development · Strapi CMS · Multilingual structure",
      summary:
        "A premium website for a private dental clinic in Warsaw, built from scratch with a fully editable CMS.",
      detail:
        "Polished visual direction, mobile-first React build, service pages, treatment-result sections, pricing, multilingual structure and a clear path to booking a consultation. The clinic team manages texts, media, services, pricing, team profiles and case sections through an admin panel.",
      tags: ["Healthcare", "Dental Clinic", "Web Design", "React", "Strapi CMS", "Multilingual", "Mobile-first", "SEO Structure"],
    },
    {
      index: "02",
      slug: "premium-service-website",
      image: sharedImages.cs2,
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
      index: "03",
      slug: "lead-capture-workflow",
      image: sharedImages.cs3,
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
      index: "04",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs4,
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
    eyebrow: "Projekt stron · Development · Automatyzacja",
    headlineA: "Cyfrowa praca na poziomie agencji",
    headlineB: "",
    headlineC: "bez agencyjnego narzutu.",
    headlineHighlight: "agencyjnego narzutu",
    bio:
      "Projektuję, buduję i ulepszam strony, formularze, procesy pozyskiwania leadów i procesy biznesowe — z jedną jasną osobą kontaktową, skupionym zakresem i szybszą realizacją.",
    ctaWork: "Zobacz wybrane prace",
    ctaContact: "Rozpocznij projekt",
    whatIDo: "Co robię",
    capabilities: [
      "Projektowanie i development www",
      "Lead flows i follow-up",
      "Automatyzacja procesów biznesowych",
      "Zakres, QA i wdrożenie",
    ],
    marquee: ["PROJEKTOWANIE", "DEVELOPMENT", "AUTOMATYZACJA", "LEAD FLOWS", "FORMULARZE", "FOLLOW-UP", "PROCESY BIZNESOWE", "QA", "WDROŻENIE"],
    portraitCaption: "Ihnat Zinkevich · Warszawa",
  },
  work: {
    eyebrow: "/ Sekcja 02 — Wybrane prace",
    headingA: "Wybrane prace i",
    headingB: "przykłady rozwiązań.",
    headingHighlight: "rozwiązań",
    subheading:
      "Połączenie prac klienckich i skupionych przykładów wokół stron, obsługi leadów, obiegów dokumentów i automatyzacji procesów.",
    visitLive: "Zobacz live",
    prevSlide: "Poprzedni slajd",
    nextSlide: "Następny slajd",
    slideOf: "z",
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
        d: "Zaczynam od zdefiniowania prawdziwego zadania biznesowego: co ma działać lepiej, kto z tego korzysta i jaki rezultat powinna przynieść pierwsza wersja.",
      },
      {
        t: "Jasne kolejne kroki.",
        d: "Ułatwiam ścieżkę po obu stronach: co klient powinien zrobić dalej, co ma otrzymać zespół i jak request idzie do przodu.",
      },
      {
        t: "Szybko na tyle, by miało to znaczenie.",
        d: "Pracuję w skupionych iteracjach: definiuję użyteczną pierwszą wersję, buduję ją szybko, testuję i ulepszam — bez zamieniania każdego projektu w długi proces agencyjny.",
      },
      {
        t: "Jeden właściciel, zaufani partnerzy.",
        d: "Współpracujesz z jedną osobą odpowiedzialną za zakres, komunikację i jakość. Przy bardziej złożonych wdrożeniach włączam zaufanych partnerów technicznych, kiedy ma to sens.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Sekcja 04 — Kontakt",
    headingA: "Trzeba ruszyć",
    headingHighlight: "projekt cyfrowy",
    headingB: "do przodu?",
    subheading:
      "Napisz, co chcesz usprawnić — stronę, formularz, lead flow, follow-up, proces dokumentów lub wewnętrzny workflow. Odpowiem najjaśniejszym kolejnym krokiem.",
    emailLabel: "E-mail",
    phoneLabel: "Telefon",
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
    eyebrow: "/ Cyfrowa praca bez agencyjnego ciągnięcia",
    lineA: "Jasny zakres.",
    lineB: "Szybka realizacja.",
    lineC: "Jedna osoba kontaktowa.",
    contactLabel: "Kontakt",
    rights: "Wszelkie prawa zastrzeżone",
  },
  caseStudies: [
    {
      index: "01",
      slug: "mickiewicz-dental-clinic",
      image: sharedImages.cs1,
      gallery: mickiewiczGallery,
      liveUrl: "https://www.mickiewiczdental.pl/",
      title: "Premium-strona kliniki stomatologicznej + CMS",
      client: "Mickiewicz Dental Clinic — Warszawa",
      role: "Design · Development w React · Strapi CMS · Struktura wielojęzyczna",
      summary:
        "Premium-strona dla prywatnej kliniki stomatologicznej w Warszawie, zbudowana od zera z w pełni edytowalnym CMS.",
      detail:
        "Spójny kierunek wizualny, mobile-first development w React, strony usług, sekcje metamorfoz, cennik, struktura wielojęzyczna i jasna ścieżka do umówienia konsultacji. Zespół kliniki zarządza tekstami, mediami, usługami, cennikiem, profilami zespołu i case’ami przez panel administracyjny.",
      tags: ["Stomatologia", "Klinika", "Projekt strony", "React", "Strapi CMS", "Wielojęzyczność", "Mobile-first", "Struktura SEO"],
    },
    {
      index: "02",
      slug: "premium-service-website",
      image: sharedImages.cs2,
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
      index: "03",
      slug: "lead-capture-workflow",
      image: sharedImages.cs3,
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
      index: "04",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs4,
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
    eyebrow: "Веб-дизайн · Разработка · Автоматизация",
    headlineA: "Цифровая работа уровня агентства",
    headlineB: "",
    headlineC: "без агентских накладных.",
    headlineHighlight: "агентских накладных",
    bio:
      "Проектирую, собираю и улучшаю сайты, формы, процессы захвата лидов и бизнес-процессы — с одним понятным контактным лицом, сфокусированным скоупом и более быстрой реализацией.",
    ctaWork: "Смотреть избранные работы",
    ctaContact: "Начать проект",
    whatIDo: "Что я делаю",
    capabilities: [
      "Дизайн и разработка сайтов",
      "Лид-флоу и follow-up",
      "Автоматизация бизнес-процессов",
      "Скоуп, QA и запуск",
    ],
    marquee: ["ДИЗАЙН", "РАЗРАБОТКА", "АВТОМАТИЗАЦИЯ", "ЛИД-ФЛОУ", "ФОРМЫ", "FOLLOW-UP", "БИЗНЕС-ПРОЦЕССЫ", "QA", "ЗАПУСК"],
    portraitCaption: "Ihnat Zinkevich · Варшава",
  },
  work: {
    eyebrow: "/ Раздел 02 — Избранные работы",
    headingA: "Избранные работы и",
    headingB: "примеры решений.",
    headingHighlight: "решений",
    subheading:
      "Сочетание клиентских работ и сфокусированных примеров вокруг сайтов, работы с лидами, документооборота и автоматизации процессов.",
    visitLive: "Открыть сайт",
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
        d: "Начинаю с определения настоящей бизнес-задачи: что должно работать лучше, кто этим пользуется и какой результат должна дать первая версия.",
      },
      {
        t: "Понятные следующие шаги.",
        d: "Облегчаю путь с обеих сторон: что клиенту делать дальше, что должна получить команда и как запрос движется вперёд.",
      },
      {
        t: "Достаточно быстро, чтобы это имело значение.",
        d: "Работаю короткими итерациями: определяю полезную первую версию, быстро её собираю, тестирую и улучшаю — не превращая каждый проект в длинный агентский процесс.",
      },
      {
        t: "Один владелец, проверенные партнёры.",
        d: "Работаешь с одним человеком, который отвечает за скоуп, коммуникацию и качество. Для более сложных задач подключаю проверенных технических партнёров, когда это уместно.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Раздел 04 — Контакт",
    headingA: "Нужно сдвинуть",
    headingHighlight: "цифровой проект",
    headingB: "вперёд?",
    subheading:
      "Расскажите, что хотите улучшить — сайт, форму, лид-флоу, follow-up, документооборот или внутренний процесс. Отвечу самым понятным следующим шагом.",
    emailLabel: "E-mail",
    phoneLabel: "Телефон",
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
    eyebrow: "/ Цифровая работа без агентской волокиты",
    lineA: "Чёткий скоуп.",
    lineB: "Быстрая реализация.",
    lineC: "Один контакт.",
    contactLabel: "Контакт",
    rights: "Все права защищены",
  },
  caseStudies: [
    {
      index: "01",
      slug: "mickiewicz-dental-clinic",
      image: sharedImages.cs1,
      gallery: mickiewiczGallery,
      liveUrl: "https://www.mickiewiczdental.pl/",
      title: "Премиум-сайт стоматологической клиники + CMS",
      client: "Mickiewicz Dental Clinic — Варшава",
      role: "Дизайн · React-разработка · Strapi CMS · Мультиязычная структура",
      summary:
        "Премиум-сайт для частной стоматологической клиники в Варшаве, собранный с нуля с полностью редактируемой CMS.",
      detail:
        "Единый визуальный язык, mobile-first сборка на React, страницы услуг, секции результатов лечения, прайс, мультиязычная структура и понятный путь к записи на консультацию. Команда клиники управляет текстами, медиа, услугами, ценами, профилями специалистов и кейсами через админ-панель.",
      tags: ["Стоматология", "Клиника", "Дизайн сайта", "React", "Strapi CMS", "Мультиязычность", "Mobile-first", "SEO-структура"],
    },
    {
      index: "02",
      slug: "premium-service-website",
      image: sharedImages.cs2,
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
      index: "03",
      slug: "lead-capture-workflow",
      image: sharedImages.cs3,
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
      index: "04",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs4,
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
