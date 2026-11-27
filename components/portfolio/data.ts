/**
 * Everything the portfolio says lives here, so updating the site means editing this one file.
 * Experience comes from the resume; contact details are placeholders to replace.
 */

export const PROFILE = {
  first: 'Abhishek',
  last: 'Bichala',
  role: 'Senior Software Engineer',
  roles: ['Senior Software Engineer', 'Full Stack', 'Freelancer'],
  location: 'Hyderabad, India',
  headline: 'I build software that quietly works, at scale.',
  intro:
    'Event-driven Java and Spring Boot services, React frontends, and the patience to make slow things fast. Six years across marketing automation, e-commerce and finance.',
  availability: 'Open to freelance work',

  /**
   * The cut-out portrait: a transparent PNG cropped just below the hands, standing on the hero's bottom edge.
   * To swap it, replace public/portrait.png and update the size below. Set portrait to null to show the drawn placeholder.
   */
  portrait: '/portrait.png' as string | null,
  portraitWidth: 822,
  portraitHeight: 1032,
  portraitAlt: 'Abhishek Bichala in a black jacket and sunglasses, sitting with his hands clasped'
}

export const NAV = {
  left: [
    { label: 'Home', href: '/' },
    { label: 'About me', href: '/about' }
  ],
  right: [
    { label: 'Experience', href: '/experience' },
    { label: 'Freelance', href: '/freelance' }
  ],
  cta: { label: 'Contact', href: '/contact' }
}

export const ABOUT = {
  statement:
    "Senior Software Engineer with 6+ years building event-driven Java/Spring Boot microservices and React frontends across marketing-automation, e-commerce and finance domains. Experienced in Kafka-based async processing, API and PostgreSQL performance tuning, Redis caching and secure OAuth2 APIs. Owns features from design through production support, and mentors junior engineers.",
  story: [
    "By day I'm a Senior Software Engineer at Oracle, building the event-driven services behind an enterprise marketing-automation platform. Before that I helped move Ford's e-commerce payments onto microservices at Grid Dynamics, and built finance applications for HAVI at EPAM.",
    "Outside the day job I help people get ready for interviews, design websites and apps, and make content about what I learn along the way. If something here sounds like you, I'd genuinely like to hear from you."
  ],
  details: [
    { label: 'Name', value: 'Abhishek Bichala' },
    { label: 'Role', value: 'Senior Software Engineer' },
    { label: 'Based in', value: 'Hyderabad, India' },
    { label: 'Experience', value: '6+ years' },
    { label: 'Currently', value: 'Oracle India' },
    { label: 'Education', value: 'B.Tech CSE · CGPA 9.0' },
    { label: 'Open to', value: 'Freelance & collaborations' }
  ],
  stats: [
    { value: 6, suffix: '+', label: 'Years building production software' },
    { value: 100, suffix: 'K+', label: 'Kafka events published a day' },
    { value: 60, suffix: '%', label: 'Faster campaign API after tuning' },
    { value: 90, suffix: '%+', label: 'Unit-test coverage on payments' }
  ],
  values: [
    {
      title: 'Own it end to end',
      text: 'From the first design discussion to the production fix, I stay with a feature until it works for the people using it.'
    },
    {
      title: 'Make it fast',
      text: 'I like finding the one slow query or missing cache that is quietly costing everyone time, and fixing it properly.'
    },
    {
      title: 'Lift people up',
      text: 'I mentor junior engineers and review code with care. The best teams I have worked in taught each other constantly.'
    }
  ],
  skills: [
    'Java 17',
    'Spring Boot',
    'Apache Kafka',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Redis',
    'Microservices',
    'AWS',
    'OCI',
    'Docker',
    'Kubernetes',
    'OAuth2',
    'MongoDB',
    'Jenkins',
    'Grafana',
    'Python',
    'JUnit'
  ]
}

export const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Oracle India',
    location: 'Hyderabad',
    period: 'Mar 2025 — Present',
    current: true,
    context: 'Enterprise marketing-automation platform',
    stack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'React / VBCS', 'OCI / AWS'],
    highlights: [
      'Build Spring Boot microservices and ~100 REST APIs across 5 services for segment scheduling, email campaigns, landing pages and follow-up triggers, serving ~2,500 daily users and ~10K requests an hour.',
      'Publish campaign and trigger events to Kafka (~100K messages a day) with duplicate handling, so retried or redelivered events never re-trigger campaign actions.',
      'Cut a slow campaign API from ~10s to ~4s (60%) by reading PostgreSQL execution plans across sharded schemas and reworking queries and indexes.',
      'Introduced Redis caching for marketing templates, removing repeated database reads from a heavily used flow.',
      'Own production support across services, Kafka and the database using logs and Grafana, and mentor 2–3 junior engineers.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Grid Dynamics',
    location: 'Hyderabad',
    period: 'Mar 2024 — Mar 2025',
    current: false,
    context: 'E-commerce platform for Ford',
    stack: ['Java 11', 'Spring Boot', 'Kafka', 'React', 'OAuth2'],
    highlights: [
      'Led the migration of a monolithic payment gateway to Spring Boot microservices, so payment components deploy and scale independently.',
      'Built the React checkout and payment-handling flow for the customer-facing website.',
      'Built Kafka-based real-time event processing in Java 11 handling ~10K messages an hour.',
      'Engineered secure payment APIs with Spring Security and OAuth2, and kept unit-test coverage above 90%.'
    ]
  },
  {
    role: 'Associate Software Engineer',
    company: 'EPAM Systems',
    location: 'Hyderabad',
    period: 'Feb 2021 — Mar 2024',
    current: false,
    context: 'Finance applications for HAVI',
    stack: ['Java', 'Spring Boot', 'Kafka', 'React', 'Swagger'],
    highlights: [
      'Developed Spring Boot REST APIs and Kafka integrations for finance applications handling ~10K API calls an hour.',
      'Designed and documented 50+ RESTful endpoints with Swagger / OpenAPI alongside the product team.',
      'Migrated legacy jQuery pages to React, making the frontend far easier to maintain.',
      'Reduced the open bug backlog by 60% in six months by adding automated integration tests.'
    ]
  }
]

export type SkillIcon = 'languages' | 'backend' | 'messaging' | 'frontend' | 'databases' | 'cloud' | 'testing'

/** The technical skills, grouped exactly as the resume groups them */
export const SKILL_GROUPS: Array< { title: string; icon: SkillIcon; items: string[]; wide?: boolean } > = [
  { title: 'Languages', icon: 'languages', items: ['Java 8 / 17', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'Python', 'HTML5', 'CSS3'] },
  { title: 'Backend', icon: 'backend', items: ['Spring Boot', 'Spring Security (OAuth2)', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices'] },
  { title: 'Messaging', icon: 'messaging', items: ['Apache Kafka', 'AWS SQS', 'Event-driven architecture'] },
  { title: 'Frontend', icon: 'frontend', items: ['React.js', 'Redux', 'Context API', 'Oracle VBCS'] },
  { title: 'Databases', icon: 'databases', items: ['PostgreSQL (sharded schemas)', 'MySQL', 'MongoDB', 'Redis'] },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    wide: true,
    items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS SQS', 'OCI', 'Azure', 'Docker', 'Kubernetes', 'Jenkins CI/CD', 'Git / GitHub', 'Grafana']
  },
  { title: 'Testing & Docs', icon: 'testing', items: ['JUnit', 'Mockito', 'Swagger / OpenAPI'] }
]

export const PROJECTS = [
  {
    title: 'Event-driven architecture',
    text: 'Java services that talk asynchronously through Apache Kafka and AWS SQS, built to explore reliable messaging patterns.',
    stack: ['Spring Boot', 'Kafka', 'AWS SQS'],
    href: 'https://github.com/your-handle'
  }
]

export const EDUCATION = {
  degree: 'B.Tech, Computer Science',
  school: 'Vardhaman College of Engineering, Hyderabad',
  period: '2016 — 2020',
  note: 'CGPA 9.0 / 10'
}

export type ServiceIcon = 'code' | 'interview' | 'website' | 'app' | 'content' | 'ugc'

export const SERVICES: Array< { icon: ServiceIcon; title: string; text: string; tags: string[] } > = [
  {
    icon: 'code',
    title: 'Software projects',
    text: 'Web apps, REST APIs and backend systems built to last, from a first MVP to production-grade microservices.',
    tags: ['Full stack', 'APIs', 'Microservices']
  },
  {
    icon: 'interview',
    title: 'Interview preparation',
    text: 'Mock interviews, DSA and system-design practice, and honest resume reviews for software engineering roles.',
    tags: ['Mock interviews', 'System design', 'Resume review']
  },
  {
    icon: 'website',
    title: 'Website design',
    text: 'Fast, responsive websites with a clear story, designed and built end to end so they are easy to update.',
    tags: ['Landing pages', 'Portfolios', 'Business sites']
  },
  {
    icon: 'app',
    title: 'App design',
    text: 'Mobile and web app UI/UX, from wireframes and flows to polished, clickable prototypes ready to build.',
    tags: ['UI / UX', 'Prototypes', 'Design systems']
  },
  {
    icon: 'content',
    title: 'Content creation',
    text: 'Tech videos, posts and explainers that make engineering topics simple, useful and easy to follow.',
    tags: ['Videos', 'Explainers', 'Tutorials']
  },
  {
    icon: 'ugc',
    title: 'UGC ads',
    text: 'Authentic, creator-style video ads for tech products and apps that feel native to the feed.',
    tags: ['Short-form', 'Product demos', 'Reviews']
  }
]

export const PROCESS = [
  { step: '01', title: 'Talk', text: 'A short call to understand what you need and why.' },
  { step: '02', title: 'Plan', text: 'A clear scope, timeline and quote, with no surprises.' },
  { step: '03', title: 'Build', text: 'Regular updates you can see and react to as it comes together.' },
  { step: '04', title: 'Launch', text: 'Shipped, handed over, and supported after go-live.' }
]

/** Placeholders: replace with your real details */
export const CONTACT = {
  email: 'abhishekbichala123121@gmail.com',
  phone: '+91 99490 04765',
  phoneHref: 'tel:+919949004765',
  whatsappHref: 'https://wa.me/919949004765',
  socials: [
    { label: 'LinkedIn', handle: 'Abhishek Bichala', href: 'https://www.linkedin.com/in/abhishekbichala', icon: 'linkedin' },
    { label: 'GitHub', handle: 'Abhishek Bichala', href: 'https://github.com/Abhishek1231212', icon: 'github' },
    { label: 'Instagram', handle: 'MotoTechMiles', href: 'https://www.instagram.com/MotoTechMiles', icon: 'instagram' },
    { label: 'YouTube', handle: 'MotoTechMiles', href: 'https://www.youtube.com/@MotoTechMiles', icon: 'youtube' },
    { label: 'X', handle: 'Bichala Abhishek', href: 'https://x.com/bichalaabhishek', icon: 'x' }
  ] as const
}
