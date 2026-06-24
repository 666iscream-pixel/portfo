// All site copy in 3 languages. Keep keys identical across languages.
export const LANGS = [
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "ru", label: "RU" },
];

const sharedImages = {
  cs1: "/case-mickiewicz-hero.png",
  mickiewiczDesktopShowcase: "/case-mickiewicz-desktop-showcase.png",
  mickiewiczMetamorfozy: "/case-mickiewicz-metamorfozy-full.png",
  mickiewiczMobile: "/case-mickiewicz-mobile-showcase.png",
  mickiewiczStructureShowcase: "/case-mickiewicz-structure-showcase.png",
  mickiewiczServices: "/case-mickiewicz-03.jpg",
  crwd: "/case-crwd-home.webp",
  crwdFull: "/case-crwd-full.webp",
  realEstate: "/case-real-estate.webp",
  cs3: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc",
  cs4: "https://images.pexels.com/photos/19650853/pexels-photo-19650853.jpeg",
};

const mickiewiczGallery = [
  { src: sharedImages.mickiewiczDesktopShowcase, fit: "cover", position: "center" },
  { src: sharedImages.mickiewiczMobile, fit: "contain", position: "center" },
  { src: sharedImages.mickiewiczStructureShowcase, fit: "cover", position: "center" },
];

const crwdGallery = [
  { src: sharedImages.crwd, fit: "cover", position: "center" },
  { src: sharedImages.crwdFull, fit: "cover", position: "center top" },
  { src: sharedImages.crwdFull, fit: "cover", position: "center 42%" },
  { src: sharedImages.crwdFull, fit: "cover", position: "center 72%" },
  { src: sharedImages.crwdFull, fit: "cover", position: "center bottom" },
];

const realEstateGallery = [
  { src: sharedImages.realEstate, fit: "cover", position: "center top" },
  { src: sharedImages.realEstate, fit: "cover", position: "center 28%" },
  { src: sharedImages.realEstate, fit: "cover", position: "center 52%" },
  { src: sharedImages.realEstate, fit: "cover", position: "center 76%" },
  { src: sharedImages.realEstate, fit: "cover", position: "center bottom" },
];

const en = {
  meta: { htmlLang: "en" },
  nav: { work: "Work", about: "About", contact: "Contact", linkedin: "LinkedIn", telegram: "Telegram" },
  hero: {
    metaLocation: "Based in Warsaw, Poland",
    eyebrow: "Web Design · Development · Automation",
    headlineA: "Development, design, optimization.",
    headlineB: "",
    headlineC: "",
    headlineHighlight: "optimization",
    bio:
      "I build websites, fix technical issues and automate business processes. I create solutions that improve team operations — from increasing website conversion to integrating data flows that remove manual work.",
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
    principles: [
      {
        t: "Problem first, code second.",
        d: "I start by understanding the real issue: what on the website or inside the process works poorly, who uses it, and what result should come first.",
      },
      {
        t: "Clear logic.",
        d: "I make the path easier for everyone: visitors should be able to send a request without friction, and your team should be able to handle it without confusion or extra steps.",
      },
      {
        t: "Fast, in short steps.",
        d: "I do not stretch work across months. We define a useful first version, I build it quickly, we put it to work and improve it from real usage.",
      },
      {
        t: "Personal responsibility.",
        d: "You work directly with me — the person responsible for quality, timing and the code itself. If a task needs specific expertise, I bring in and coordinate trusted specialists without pushing that coordination onto you.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Section 04 — Contact",
    headingA: "Looking for a",
    headingHighlight: "technical solution",
    headingB: "to a task?",
    subheading:
      "Share what you want to improve — a website, inquiry form, client handling, reminders, documents or an internal process.",
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
    eyebrow: "",
    lineA: "Clear plan.",
    lineB: "Fast delivery.",
    lineC: "",
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
      title: "Premium Healthcare Website System",
      client: "Mickiewicz Dental Clinic — Warsaw",
      role: "Design · React development · Multilingual structure · Booking UX",
      summary:
        "A premium website for a private dental clinic in Warsaw, built from scratch around trust, treatment results and appointment conversion.",
      detail:
        "Polished visual direction, mobile-first React build, service pages, treatment-result sections, pricing, multilingual structure and a clear path to booking a consultation.",
      tags: ["Healthcare", "Dental Clinic", "Web Design", "React", "Multilingual", "Mobile-first", "SEO Structure"],
    },
    {
      index: "02",
      slug: "crwd-website",
      image: sharedImages.crwd,
      gallery: crwdGallery,
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
      gallery: realEstateGallery,
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
      title: "Lead Capture & Handling Automation",
      client: "Herbs and Spices",
      role: "Automation · Lead routing · Follow-up logic",
      summary:
        "For service businesses receiving inquiries from forms, calls or direct messages.",
      detail:
        "The system collects lead details, asks qualification questions, creates a structured lead summary, notifies the owner or admin and prepares a follow-up reminder.",
      tags: ["Automation", "Lead Capture", "Follow-up", "CRM-ready", "Service Business"],
    },
    {
      index: "05",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs4,
      title: "Offer From Brief Automation",
      client: "Flowpilot",
      role: "Documents · Sales support · Follow-up automation",
      summary:
        "Automation that turns a client brief, call notes or chat summary into structured requirements, an offer draft, an email draft and a follow-up task.",
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
    eyebrow: "Projekt stron · Development · Automatyzacja",
    headlineA: "Development, design, optymalizacja.",
    headlineB: "",
    headlineC: "",
    headlineHighlight: "optymalizacja",
    bio:
      "Zajmuję się tworzeniem stron, usuwaniem problemów technicznych i automatyzacją procesów. Proponuję rozwiązania, które usprawniają pracę zespołu — od zwiększenia konwersji na stronie po integrację danych eliminującą ręczną pracę.",
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
    principles: [
      {
        t: "Najpierw zadanie, potem kod.",
        d: "Zaczynam od zrozumienia prawdziwego problemu: co na stronie albo w procesie działa słabo, kto z tego korzysta i jaki rezultat trzeba uzyskać w pierwszej kolejności.",
      },
      {
        t: "Zrozumiała logika.",
        d: "Ułatwiam ścieżkę dla wszystkich: odwiedzający stronę powinien łatwo wysłać zapytanie, a zespół powinien móc je obsłużyć bez chaosu i zbędnych kroków.",
      },
      {
        t: "Szybko i krótkimi krokami.",
        d: "Nie rozciągam pracy na miesiące. Ustalamy użyteczną pierwszą wersję, szybko ją buduję, uruchamiamy ją w praktyce i ulepszamy na podstawie realnego działania.",
      },
      {
        t: "Osobista odpowiedzialność.",
        d: "Rozmawiasz bezpośrednio ze mną — osobą odpowiedzialną za jakość, terminy i sam kod. Jeśli zadanie wymaga specjalistycznych kompetencji, sam dobiorę i skoordynuję sprawdzonych specjalistów.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Sekcja 04 — Kontakt",
    headingA: "Szukasz",
    headingHighlight: "rozwiązania",
    headingB: "dla zadania technicznego?",
    subheading:
      "Napisz, co chcesz usprawnić — stronę, formularz zapytań, obsługę klienta, przypomnienia, dokumenty lub wewnętrzny proces.",
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
    eyebrow: "",
    lineA: "Jasny plan.",
    lineB: "Szybka realizacja.",
    lineC: "",
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
      title: "Premium-strona kliniki stomatologicznej",
      client: "Mickiewicz Dental Clinic — Warszawa",
      role: "Design · Development w React · Struktura wielojęzyczna · UX rezerwacji",
      summary:
        "Premium-strona dla prywatnej kliniki stomatologicznej w Warszawie, zbudowana wokół zaufania, efektów leczenia i umawiania konsultacji.",
      detail:
        "Spójny kierunek wizualny, mobile-first development w React, strony usług, sekcje metamorfoz, cennik, struktura wielojęzyczna i jasna ścieżka do umówienia konsultacji.",
      tags: ["Stomatologia", "Klinika", "Projekt strony", "React", "Wielojęzyczność", "Mobile-first", "Struktura SEO"],
    },
    {
      index: "02",
      slug: "crwd-website",
      image: sharedImages.crwd,
      gallery: crwdGallery,
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
      gallery: realEstateGallery,
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
      title: "Automatyzacja pozyskiwania i obsługi leadów",
      client: "Herbs and Spices",
      role: "Automatyzacja · Routing leadów · Logika follow-upu",
      summary:
        "Dla firm usługowych otrzymujących zapytania z formularzy, telefonów lub wiadomości.",
      detail:
        "System zbiera dane leada, zadaje pytania kwalifikujące, tworzy strukturalne podsumowanie, powiadamia właściciela lub admina i przygotowuje przypomnienie o follow-upie.",
      tags: ["Automatyzacja", "Pozyskiwanie leadów", "Follow-up", "Gotowe pod CRM", "Biznes usługowy"],
    },
    {
      index: "05",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs4,
      title: "Automatyzacja „oferta z briefu”",
      client: "Flowpilot",
      role: "Dokumenty · Wsparcie sprzedaży · Automatyzacja follow-upu",
      summary:
        "Automatyzacja, która zamienia brief klienta, notatki z rozmowy lub podsumowanie czatu w strukturalne wymagania, draft oferty, draft maila i zadanie follow-up.",
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
    eyebrow: "Веб-дизайн · Разработка · Автоматизация",
    headlineA: "Разработка, дизайн, оптимизация.",
    headlineB: "",
    headlineC: "",
    headlineHighlight: "оптимизация",
    bio:
      "Занимаюсь разработкой сайтов, устранением технических дефектов и автоматизацией процессов. Предлагаю решения, которые оптимизируют работу команды: от ускорения конверсии на сайте до интеграции данных, исключающей ручной труд.",
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
    principles: [
      {
        t: "Сначала задача, потом код.",
        d: "Начинаю с того, что выясняю настоящую проблему: что на сайте или в процессах сейчас работает плохо, кто этим пользуется и какой результат нужно получить в первую очередь.",
      },
      {
        t: "Понятная логика.",
        d: "Облегчаю путь для всех: посетителю сайта должно быть удобно оставить запрос, а вашей команде — легко этот запрос обработать, без путаницы и лишних действий.",
      },
      {
        t: "Быстро и короткими шагами.",
        d: "Не затягиваю работу на месяцы. Мы определяем полезную первую версию, я быстро её собираю, мы запускаем её в дело и улучшаем уже на основе реальной работы.",
      },
      {
        t: "Личная ответственность.",
        d: "Вы общаетесь напрямую со мной — человеком, который отвечает за качество, сроки и сам пишет код. Если задача требует специфических навыков, я сам подключу и проконтролирую проверенных специалистов, не нагружая вас координацией.",
      },
    ],
  },
  contact: {
    eyebrow: "/ Раздел 04 — Контакт",
    headingA: "Ищете",
    headingHighlight: "решение",
    headingB: "для технической задачи?",
    subheading:
      "Расскажите, что хотите улучшить — сайт, форму заявки, обработку клиентов, напоминания, документы или внутренний процесс.",
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
    eyebrow: "",
    lineA: "Чёткий план.",
    lineB: "Быстрая реализация.",
    lineC: "",
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
      title: "Премиум-сайт стоматологической клиники",
      client: "Mickiewicz Dental Clinic — Варшава",
      role: "Дизайн · React-разработка · Мультиязычная структура · UX записи",
      summary:
        "Премиум-сайт для частной стоматологической клиники в Варшаве, собранный вокруг доверия, результатов лечения и записи на консультацию.",
      detail:
        "Единый визуальный язык, mobile-first сборка на React, страницы услуг, секции результатов лечения, прайс, мультиязычная структура и понятный путь к записи на консультацию.",
      tags: ["Стоматология", "Клиника", "Дизайн сайта", "React", "Мультиязычность", "Mobile-first", "SEO-структура"],
    },
    {
      index: "02",
      slug: "crwd-website",
      image: sharedImages.crwd,
      gallery: crwdGallery,
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
      gallery: realEstateGallery,
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
      title: "Автоматизация захвата и обработки лидов",
      client: "Herbs and Spices",
      role: "Автоматизация · Маршрутизация лидов · Логика follow-up",
      summary:
        "Для сервисных компаний, получающих заявки из форм, звонков или сообщений.",
      detail:
        "Система собирает данные лида, задаёт квалифицирующие вопросы, создаёт структурированное резюме, уведомляет владельца и готовит напоминание для follow-up.",
      tags: ["Автоматизация", "Захват лидов", "Follow-up", "Под CRM", "Сервисный бизнес"],
    },
    {
      index: "05",
      slug: "offer-from-brief-workflow",
      image: sharedImages.cs4,
      title: "Автоматизация «оффер из брифа»",
      client: "Flowpilot",
      role: "Документы · Поддержка продаж · Автоматизация follow-up",
      summary:
        "Автоматизация превращает бриф клиента, заметки со звонка или резюме чата в структурированные требования, черновик оффера, черновик письма и задачу follow-up.",
      detail:
        "Для компаний, которые тратят слишком много времени на ручную подготовку предложений, резюме и follow-up.",
      tags: ["Автоматизация", "Офферы", "Документы", "B2B", "Продажи", "Follow-up"],
    },
  ],
  caseLabel: "Кейс",
  langSwitcherLabel: "Язык",
};

export const translations = { en, pl, ru };
