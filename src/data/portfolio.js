export const personalInfo = {
  name: 'Stephen Mason',
  title: 'Software Engineer',
  headline: 'Building Digital Solutions for Africa.',
  subtitle:
    'Software Engineer specializing in Digital Products, Artificial Intelligence, Blockchain Technology, and Digital Innovation.',
  email: 'masonstephen606@gmail.com',
  phone: '+254712382482',
  github: 'https://github.com/masonstephen',
  linkedin: 'https://www.linkedin.com/in/stephen-mason-ab494a2b3',
  cvUrl: '/cv/Stephen_Mason_CV.pdf',
  cvFileName: 'Stephen_Mason_CV.pdf',
  faviconUrl: '/favicon.png',
  siteUrl: 'https://stephen-mason.tech',
}

export const interests = [
  'Digital Public Infrastructure',
  'Artificial Intelligence',
  'Blockchain',
  'Software Architecture',
  'Digital Transformation',
]

export const experience = [
  {
    id: 'ibiz',
    role: 'Software Engineering Intern',
    company: 'iBiz Africa',
    period: '2024 — Present',
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Develop and maintain web applications supporting entrepreneurship and innovation programs across East Africa.',
      'Collaborate with cross-functional teams to design scalable digital products for startup ecosystems.',
      'Implement RESTful APIs and integrate third-party services to streamline business operations.',
      'Participate in agile sprints, code reviews, and technical documentation for production systems.',
    ],
  },
  {
    id: 'strathmore-lab',
    role: 'Lab Assistant',
    company: 'Strathmore University',
    period: '2023 — Present',
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Support computer science and information technology laboratory sessions for undergraduate students.',
      'Maintain lab infrastructure, troubleshoot hardware and software issues, and ensure smooth learning environments.',
      'Assist faculty with practical exercises in programming, databases, and systems administration.',
      'Guide students through debugging workflows and best practices in software development.',
    ],
  },
  {
    id: 'borbor-school',
    role: 'Assistant Computer Teacher',
    company: 'Dr Abraham S Borbor Memorial School',
    period: '2022 — 2023',
    location: 'Monrovia, Liberia',
    responsibilities: [
      'Taught foundational computer literacy and introductory programming to secondary school students.',
      'Designed lesson plans covering digital skills, productivity tools, and basic web technologies.',
      'Mentored students on technology career pathways and the role of digital skills in modern economies.',
      'Coordinated with school administration to improve computer lab resources and curriculum alignment.',
    ],
  },
]

export const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'PHP', 'JavaScript', 'TypeScript'],
    icon: 'code',
  },
  {
    name: 'Frontend',
    skills: ['Vue', 'React', 'Next.js', 'HTML', 'CSS'],
    icon: 'layout',
  },
  {
    name: 'Backend',
    skills: ['Laravel', 'Django', 'Supabase'],
    icon: 'server',
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Supabase'],
    icon: 'database',
  },
  {
    name: 'AI & Data',
    skills: ['Python', 'Prompt Engineering', 'Data Analytics'],
    icon: 'brain',
  },
  {
    name: 'Blockchain',
    skills: ['Solidity (Learning)'],
    icon: 'link',
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'REST APIs'],
    icon: 'wrench',
  },
]

export const projects = [
  {
    id: 'libticket',
    name: 'LibTicket',
    status: 'In Development',
    statusColor: 'amber',
    stack: ['Vue.js', 'Supabase', 'JavaScript'],
    tagline: 'Cloud-based digital event ticketing for Africa',
    problem:
      'Event organizers across Liberia and the broader region rely on paper tickets and manual entry lists, leading to fraud, long queues, and poor attendee data management.',
    solution:
      'LibTicket is a cloud-based digital event ticketing platform that enables organizers to create events, issue secure digital tickets, register attendees, and validate entry using QR codes — all from a single dashboard.',
    features: [
      'Authentication',
      'QR Ticket Validation',
      'Real-time Database',
      'Cloud Backend',
    ],
    github: 'https://github.com/masonstephen',
    liveDemo: null,
    challenges: [
      'Designing offline-capable QR validation for venues with unreliable internet connectivity.',
      'Building a role-based access system for organizers, staff, and attendees.',
      'Ensuring ticket uniqueness and preventing duplicate scans at scale.',
    ],
    lessonsLearned: [
      'Supabase real-time subscriptions dramatically simplify live attendance tracking.',
      'Mobile-first design is essential — most attendees will scan tickets on phones.',
      'Early user testing with local event organizers revealed critical workflow gaps.',
    ],
    futureImprovements: [
      'Mobile app for ticket scanning with offline sync.',
      'Payment gateway integration for paid events.',
      'Analytics dashboard for organizer insights.',
      'Multi-language support for West African markets.',
    ],
    architecture:
      'Vue.js SPA → Supabase Auth → PostgreSQL → Edge Functions for QR validation → Real-time subscriptions for live check-in.',
  },
  {
    id: 'libai',
    name: 'LibAI',
    status: 'In Development',
    statusColor: 'amber',
    stack: ['React', 'Python', 'AI'],
    tagline: 'AI-powered tutoring aligned with the Liberian curriculum',
    problem:
      'Students in Liberia face limited access to quality tutoring resources aligned with the national school curriculum, widening educational gaps in underserved communities.',
    solution:
      'LibAI is an AI-powered tutoring platform trained specifically on the Liberian school curriculum to deliver personalized learning support, adaptive exercises, and interactive educational experiences.',
    features: [
      'Curriculum-aware AI',
      'Student Dashboard',
      'Interactive Tutoring',
      'Future Voice Support',
    ],
    github: 'https://github.com/masonstephen',
    liveDemo: null,
    challenges: [
      'Curating and structuring curriculum data for effective AI fine-tuning.',
      'Balancing AI response accuracy with age-appropriate language for students.',
      'Designing an adaptive learning path that tracks student progress meaningfully.',
    ],
    lessonsLearned: [
      'Domain-specific training data quality matters more than model size for education.',
      'Student feedback loops are critical for improving AI tutoring accuracy.',
      'A clean, distraction-free UI increases engagement for younger learners.',
    ],
    futureImprovements: [
      'Voice-based tutoring for low-literacy learners.',
      'Teacher dashboard for classroom integration.',
      'Offline mode for areas with limited connectivity.',
      'Expansion to additional West African curricula.',
    ],
    architecture:
      'React frontend → Python API (FastAPI) → LLM with RAG pipeline → Curriculum vector store → Student progress database.',
  },
  {
    id: 'libland',
    name: 'LibLand',
    status: 'Research & Concept',
    statusColor: 'violet',
    stack: ['Blockchain', 'Solidity'],
    tagline: 'Transparent land registry for digital public infrastructure',
    problem:
      'Land ownership records in many African nations are vulnerable to fraud, disputes, and tampering due to paper-based systems and opaque bureaucratic processes.',
    solution:
      'LibLand explores a blockchain-powered land registry platform that improves transparency, reduces fraud, and enables tamper-resistant digital land ownership records as part of broader digital public infrastructure.',
    features: [
      'Smart Contracts',
      'Ownership Tracking',
      'Fraud Prevention',
      'Digital Public Infrastructure',
    ],
    github: 'https://github.com/masonstephen',
    liveDemo: null,
    challenges: [
      'Mapping complex legal land frameworks onto blockchain smart contract logic.',
      'Designing identity verification that respects local governance structures.',
      'Addressing scalability and cost concerns of on-chain record storage.',
    ],
    lessonsLearned: [
      'Blockchain alone does not solve governance — legal frameworks must align with technology.',
      'Hybrid on-chain/off-chain architectures balance transparency with practical constraints.',
      'Stakeholder engagement with land authorities is essential before any pilot.',
    ],
    futureImprovements: [
      'Proof-of-concept smart contracts on a testnet.',
      'Integration with national digital ID systems.',
      'GIS mapping overlay for parcel visualization.',
      'Policy whitepaper for government adoption pathways.',
    ],
    architecture:
      'Solidity smart contracts → IPFS for document storage → Web3 frontend → Oracle integration for legal verification → Audit trail on-chain.',
  },
  {
    id: 'ulconnect',
    name: 'ULConnect',
    status: 'Live',
    statusColor: 'emerald',
    stack: ['Flutter', 'Dart', 'Firebase', 'PWA'],
    tagline: 'Your Gateway to University Life',
    problem:
      'Academic materials, communications, and social groups at the University of Liberia are fragmented across multiple platform services (like WhatsApp, external drives, or notice boards), causing confusion, information loss, and a lack of secure, campus-exclusive spaces.',
    solution:
      'ULConnect is a unified digital campus platform built to strengthen the University of Liberia student experience by centralizing course notes, facilitating peer networking, offering in-app collaboration chat, and keeping student data secure within a verified environment.',
    features: [
      'Academic Hub',
      'Classmate Directory',
      'Real-Time Chat',
      'Verified Access',
      'PWA Support',
    ],
    github: 'https://github.com/masonstephen',
    liveDemo: 'https://www.ulconnect.app/',
    challenges: [
      'Designing a highly responsive and lightweight Progressive Web App using Flutter Web that performs reliably under low-bandwidth network environments.',
      'Establishing a robust identity validation workflow restricting access strictly to active university students and administrators.',
      'Developing an optimized real-time messaging pipeline capable of handling high-volume group communications on lower-end devices.',
    ],
    lessonsLearned: [
      'Flutter Web enables quick cross-platform mobile-web deployment, but requires strategic asset caching and deferral to minimize load times.',
      'Campus-only email domain checks significantly improve safety, accountability, and student trust.',
      'Implementing offline-capable caching layers prevents UX frustration during frequent network cuts.',
    ],
    futureImprovements: [
      'Offline-first synchronized downloader for course resources and syllabus notes.',
      'Real-time campus alert notifications directly integrated with administrative notice boards.',
      'Automatic enrollment synched directly to official class lists and schedules.',
    ],
    architecture:
      'Flutter PWA client → Firebase Authentication → Firestore Real-time Database → Firebase Storage for academic resources → Security Rules.',
  },
  {
    id: 'dataviz',
    name: 'DataViz',
    status: 'Live',
    statusColor: 'emerald',
    stack: ['React', 'Vite', 'Tailwind CSS', 'AI', 'JavaScript'],
    tagline: 'Free AI-powered chart builder and dashboard editor',
    problem:
      'Business analysts, researchers, and students struggle to build quick, custom charts and dashboards from raw dataset uploads. Traditional tools have steep learning curves, while custom coding is slow and complex.',
    solution:
      'DataViz is an AI-powered chart builder that allows users to upload Excel/CSV data and write natural language instructions to auto-generate from 30+ interactive chart types. Dashboards can be customized and exported instantly as PDFs.',
    features: [
      'AI Chart Suggestion',
      '30+ Interactive Chart Types',
      'Dynamic Dashboard Grid',
      'Flexible Exports (PNG/SVG/PDF)',
      'CSV/Excel Uploads',
      'Kaggle & HuggingFace Imports',
    ],
    github: 'https://github.com/masonstephen',
    liveDemo: 'https://www.datavisual.app/',
    challenges: [
      'Engineering a rigid schema-driven AI parser translating arbitrary language queries into deterministic, renderable chart configurations.',
      'Rendering multi-chart dashboard views with hundreds of thousands of data points smoothly without dropping frames.',
      'Designing a secure client-side parsing pipeline ensuring sensitive user data remains locally in the browser and is never uploaded or exposed.',
    ],
    lessonsLearned: [
      'Constraining AI outputs using predefined JSON formats guarantees predictable chart behavior.',
      'Using client-side workers (e.g. PapaParse) handles heavy processing locally, enhancing speed and privacy.',
      'SaaS monetizing through credits (integrated via Lemon Squeezy) works well with transparent, free-tier limitations.',
    ],
    futureImprovements: [
      'Direct integrations with relational databases (MySQL, PostgreSQL, BigQuery).',
      'Collaborative workspaces for sharing live dashboards with editing permissions.',
      'Automated insights showing data anomalies and trend highlights.',
    ],
    architecture:
      'React Web SPA (Vite) → Client-Side Charting Engine (ECharts/Recharts) → OpenAI/Gemini Serverless API → Lemon Squeezy Payment Webhooks.',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
