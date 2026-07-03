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
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
