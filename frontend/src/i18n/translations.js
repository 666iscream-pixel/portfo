// All site copy in 3 languages. Keep keys identical across languages.
export const LANGS = [
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "ru", label: "RU" },
];

const sharedImages = {
  cs1: "/case-mickiewicz.jpg",
  crwd: "/case-crwd-home.webp",
  crwdFull: "/case-crwd-full.webp",
  realEstate: "/case-real-estate.webp",
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
    eyebrow: "Web Design · Development · Automation",
    headlineA: "Websites and client workflows",
    headlineB: "",
    headlineC: "for service businesses.",
    headlineHighlight: "service businesses",
    bio:
      "I build websites, inquiry forms and lightweight automation systems that help service teams get clearer requests, respond faster and reduce manual admin.",
    ctaWork: "See selected work",
    ctaContact: "Start a project",
    whatIDo: "What I do",
    capabilities: [
      "Web design & development",
      "Inquiries & client follow-up",
      "Business process automation",
      "Planning, QA & delivery",
    ],
    marquee: ["DESIGN", "DEVELOPMENT", "AUTOMATION", "INQUIRIES", "FORMS", "FOLLOW-UP", "CLIENT PROCESSES", "QA", "DELIVERY"],
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
      "Share what you want to improve — a website, inquiry form, client follow-up, document process or internal workflow. I’ll reply with the clearest next step.",
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
    eyebrow: "/ Websites and workflows without the agency drag",
    lineA: "Clear plan.",
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
      slug: "crwd-website",
      image: sharedImages.crwd,
      gallery: [sharedImages.crwd, sharedImages.crwdFull],
      title: "CRWD Website",
      client: "Consumer group activation platform",
      role: "Website design · Front-end build · Landing page · Interaction-ready UI",
      summary:
        "A bold, high-energy website concept for CRWD, a marketplace built around real people, group activations and brand campaigns.",
      detail:
        "The design uses a sharp black-and-yellow visual system, oversized campaign messaging, animated-feeling sections, brand trust areas and clear conversion points for both users and companies. Built as a responsive front-end using HTML5, CSS3, Bootstrap and JavaScript.",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Landing Page", "Responsive UI", "Brand Campaigns"],
    },
    {
      index: "03",
      slug: "modern-real-estate-website",
      image: sharedImages.realEstate,
      title: "Modern Real Estate Website Design",
      client: "Real estate website concept",
      role: "Web design · Property browsing UX · Search flow · Trust sections",
      summary:
        "A contemporary real estate website designed to make property discovery feel clear, visual and easy to navigate.",
      detail:
        "The concept combines immersive hero sections, curated property cards, a simple three-step search journey, credibility blocks and recent market content. The goal is to help buyers move from first impression to a relevant property with less friction.",
      tags: ["Real Estate", "Website Design", "Property Search", "UX Flow", "Listing Cards", "Trust Sections", "Content Strategy"],
    },
    {
      index: "04",
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
      index: "05",
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
    eyebrow: "Projekt stron · Development · Automatyzacja",
    headlineA: "Strony i procesy dla klientów",
    headlineB: "",
    headlineC: "dla firm usługowych.",
    headlineHighlight: "firm usługowych",
    bio:
      "Projektuję i buduję strony, formularze zapytań oraz lekkie automatyzacje, które pomagają firmom usługowym szybciej zbierać zgłoszenia, odpowiadać klientom i ograniczać ręczną pracę.",
    ctaWork: "Zobacz wybrane prace",
    ctaContact: "Rozpocznij projekt",
    whatIDo: "Co robię",
    capabilities: [
      "Projektowanie i development www",
      "Zapytania i obsługa klientów",
      "Automatyzacja procesów biznesowych",
      "Plan, testy i wdrożenie",
    ],
    marquee: ["PROJEKTOWANIE", "DEVELOPMENT", "AUTOMATYZACJA", "ZAPYTANIA", "FORMULARZE", "OBSŁUGA KLIENTA", "PROCESY", "TESTY", "WDROŻENIE"],
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
      "Napisz, co chcesz usprawnić — stronę, formularz zapytań, obsługę klienta, przypomnienia, proces dokumentów lub wewnętrzny workflow. Odpowiem najjaśniejszym kolejnym krokiem.",
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
    eyebrow: "/ Strony i procesy bez agencyjnej zwłoki",
    lineA: "Jasny plan.",
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
      slug: "crwd-website",
      image: sharedImages.crwd,
      gallery: [sharedImages.crwd, sharedImages.crwdFull],
      title: "Strona CRWD",
      client: "Platforma consumer group activation",
      role: "Projekt strony · Front-end · Landing page · UI gotowe pod interakcje",
      summary:
        "Wyrazista, dynamiczna koncepcja strony dla CRWD — marketplace'u opartego na realnych ludziach, aktywacjach grupowych i kampaniach dla marek.",
      detail:
        "Projekt wykorzystuje mocny czarno-żółty system wizualny, duże komunikaty kampanijne, sekcje z poczuciem ruchu, obszary zaufania dla marek i jasne punkty konwersji dla użytkowników oraz firm. Front-end przygotowany responsywnie w HTML5, CSS3, Bootstrap i JavaScript.",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Landing Page", "Responsive UI", "Kampanie marek"],
    },
    {
      index: "03",
      slug: "modern-real-estate-website",
      image: sharedImages.realEstate,
      title: "Nowoczesny projekt strony nieruchomości",
      client: "Koncepcja strony real estate",
      role: "Projekt strony · UX przeglądania ofert · Wyszukiwarka · Sekcje zaufania",
      summary:
        "Współczesna strona real estate zaprojektowana tak, aby wyszukiwanie nieruchomości było przejrzyste, wizualne i wygodne.",
      detail:
        "Koncepcja łączy mocne sekcje hero, czytelne karty ofert, prosty trzyetapowy proces wyszukiwania, bloki budujące zaufanie i aktualności rynkowe. Celem jest krótsza droga od pierwszego wrażenia do właściwej oferty.",
      tags: ["Real Estate", "Projekt strony", "Wyszukiwarka", "UX ofert", "Karty nieruchomości", "Sekcje zaufania", "Content"],
    },
    {
      index: "04",
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
      index: "05",
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
    eyebrow: "Веб-дизайн · Разработка · Автоматизация",
    headlineA: "Сайты и клиентские процессы",
    headlineB: "",
    headlineC: "для сервисных бизнесов.",
    headlineHighlight: "сервисных бизнесов",
    bio:
      "Проектирую и собираю сайты, формы заявок и простые рабочие процессы для сервисных бизнесов — чтобы клиенты быстрее оставляли заявки, команда быстрее отвечала, а ручной рутины было меньше.",
    ctaWork: "Смотреть избранные работы",
    ctaContact: "Начать проект",
    whatIDo: "Что я делаю",
    capabilities: [
      "Дизайн и разработка сайтов",
      "Заявки и обработка клиентов",
      "Автоматизация бизнес-процессов",
      "План работ, проверка и запуск",
    ],
    marquee: ["ДИЗАЙН", "РАЗРАБОТКА", "АВТОМАТИЗАЦИЯ", "ЗАЯВКИ", "ФОРМЫ", "ОБРАБОТКА КЛИЕНТОВ", "ПРОЦЕССЫ", "ПРОВЕРКА", "ЗАПУСК"],
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
        d: "Работаешь с одним человеком, который отвечает за план, коммуникацию и качество. Для более сложных задач подключаю проверенных технических партнёров, когда это уместно.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Раздел 04 — Контакт",
    headingA: "Нужно сдвинуть",
    headingHighlight: "цифровой проект",
    headingB: "вперёд?",
    subheading:
      "Расскажите, что хотите улучшить — сайт, форму заявки, обработку клиентов, напоминания, документы или внутренний процесс. Отвечу самым понятным следующим шагом.",
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
    eyebrow: "/ Сайты и процессы без лишней волокиты",
    lineA: "Чёткий план.",
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
      slug: "crwd-website",
      image: sharedImages.crwd,
      gallery: [sharedImages.crwd, sharedImages.crwdFull],
      title: "CRWD Website",
      client: "Платформа для group activations",
      role: "Дизайн сайта · Front-end · Landing page · UI под интерактив",
      summary:
        "Яркий сайт для CRWD — маркетплейса, где бренды запускают групповые активации с реальными людьми, а не ботами или инфлюенсерами.",
      detail:
        "В основе — контрастная чёрно-жёлтая визуальная система, крупные campaign-сообщения, динамичные секции, блоки доверия для брендов и понятные точки конверсии для пользователей и компаний. Front-end собран адаптивно на HTML5, CSS3, Bootstrap и JavaScript.",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Landing Page", "Responsive UI", "Brand Campaigns"],
    },
    {
      index: "03",
      slug: "modern-real-estate-website",
      image: sharedImages.realEstate,
      title: "Современный сайт для недвижимости",
      client: "Концепт сайта real estate",
      role: "Дизайн сайта · UX просмотра объектов · Поиск · Блоки доверия",
      summary:
        "Современный сайт для недвижимости, который делает поиск объектов понятным, визуальным и удобным.",
      detail:
        "Концепт объединяет сильные hero-секции, карточки объектов, простой трёхшаговый путь поиска, блоки доверия и раздел с актуальными статьями. Цель — сократить путь от первого впечатления до подходящего объекта.",
      tags: ["Real Estate", "Дизайн сайта", "Поиск объектов", "UX карточек", "Недвижимость", "Блоки доверия", "Контент"],
    },
    {
      index: "04",
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
      index: "05",
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
