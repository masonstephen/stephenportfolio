// Research content for the portfolio.
// Integrity rule: nothing in this file reports completed experiments, numerical
// results, publications, or affiliations that have not been verified. Anything
// not yet finished is explicitly labelled "Ongoing" or "Planned".

export const researchIntro =
  'My research interests sit at the intersection of artificial intelligence, information retrieval, trustworthy AI, and educational technology. My current work investigates how retrieval, evidence grounding, and evaluation can make LLM-based educational systems more reliable.'

export const researchQuestions = [
  {
    id: 'RQ1',
    text: 'How can a structured curriculum knowledge base support reliable educational question answering?',
  },
  {
    id: 'RQ2',
    text: 'How do different retrieval configurations affect retrieval quality?',
  },
  {
    id: 'RQ3',
    text: 'How does RAG compare with LLM-only generation in terms of faithfulness and unsupported claims?',
  },
  {
    id: 'RQ4',
    text: 'How effectively can an answerability mechanism identify questions that cannot be reliably answered from the available curriculum evidence?',
  },
  {
    id: 'RQ5',
    text: 'How can limited learner context improve educational appropriateness without overriding evidence?',
  },
  {
    id: 'RQ6',
    text: 'How feasible is the system under resource and connectivity constraints?',
  },
  {
    id: 'RQ7',
    text: 'How do experts evaluate correctness, curriculum alignment, evidence traceability, and usefulness?',
  },
]

export const researchMethodology = {
  approach: 'Design Science Research-oriented system development and evaluation study',
  description:
    'The project follows a Design Science Research-oriented approach: build an artifact — a curriculum-aware RAG system — evaluate it against clearly defined measures, and refine it based on what the evaluation shows. The study combines artifact development with controlled experiments rather than treating the build and the evaluation as separate activities.',
  components: [
    'Artifact development',
    'Controlled experiments',
    'Retrieval evaluation',
    'Generation evaluation',
    'Expert evaluation',
    'Usability evaluation',
    'Resource-performance evaluation',
  ],
}

// Research profile: the three distinct strands shown on /research.
export const researchProfile = [
  {
    label: 'Formal Academic Research',
    title: 'Strathmore Final-Year Project',
    detail: 'Gitaru Market Linkage Initiative — collaborative final-year Information Systems project, group of four.',
  },
  {
    label: 'Independent Research',
    title: 'LibAI',
    detail: 'Trustworthy curriculum-aware RAG for educational question answering — my own independent research and development work.',
  },
  {
    label: 'Technical / Data Science Work',
    title: 'DataViz and other projects',
    detail: 'Software and data science engineering projects built for real-world African contexts.',
  },
]

// Academic research: the formal final-year university project (separate from LibAI).
export const gitaruResearch = {
  id: 'gitaru',
  title: 'Gitaru Market Linkage Initiative',
  subtitle: 'Connecting Farmers to Direct Buyers for Sustainable Livelihoods',
  badge: 'Final-Year Academic Project',
  institution: 'Strathmore University',
  status: 'Ongoing — Presentation: 25 November 2026',
  format: 'Collaborative project — Group of Four',
  team: ['Bonface Vulu', 'Stephen Mason', 'Ronnie Sigei', 'Brandon Nthiwa'],
  submissionNote:
    'Information Systems project proposal submitted to the School of Computing and Engineering Sciences in partial fulfillment of the requirements for the Bachelor of Business Information Technology.',
  description:
    'The Gitaru Market Linkage Initiative investigates challenges faced by smallholder farmers at Gitaru Market in Kiambu County, Kenya, particularly difficulties related to market access, buyer demand, intermediaries, market information, transportation, and post-harvest losses.',
  aim: 'The project aims to explore ways of improving direct market linkages between farmers and institutional/bulk buyers.',
  problem:
    'Smallholder farmers struggle to access reliable markets because they cannot consistently meet quality, volume, licensing, and logistics requirements, forcing them to depend on middlemen who capture most of the value.',
  objectives: [
    'Explore existing market linkage systems in Kenya.',
    'Examine the channels currently used by Gitaru Market farmers to connect with buyers.',
    'Identify the challenges farmers face through those channels.',
    'Generate ideas for improving market access and linkages.',
    'Develop prototypes / solutions through stakeholder engagement.',
    'Test and validate the proposed solution with relevant stakeholders.',
  ],
  methodology: {
    approach: 'Design Thinking with Participatory Action Research (PAR)',
    description:
      'The methodology is user-centred and involves stakeholders as contributors to the solution process rather than only as subjects of study. Participatory Action Research integrates the voices of those affected by the problem into each cycle of the design process.',
    steps: ['Empathy', 'Define', 'Ideate', 'Prototyping', 'Testing'],
  },
  stakeholders: {
    primary: ['Smallholder farmers', 'Institutional buyers'],
    supporting: ['Agricultural officers'],
    notes: [
      'Farmers are identified as primary beneficiaries.',
      'Institutional buyers are important demand-side stakeholders.',
      'Agricultural officers act as technical-support stakeholders.',
    ],
  },
  dataCollection: ['Interviews', 'Questionnaires', 'Field observations', 'Stakeholder engagement'],
  samplingNote:
    'The project documentation describes a purposive sampling approach for the pilot phase; no sample sizes are reported beyond what the project document states.',
  challenges: [
    'Unpredictable buyer demand',
    'Dependence on intermediaries',
    'Limited timely market information',
    'Transportation challenges',
    'Inadequate storage',
    'Perishability of crops',
    'Limited bargaining power',
    'Mismatch between production and market demand',
  ],
  ideation: [
    'Farmer cooperatives',
    'Real-time pricing and demand updates',
    'Market days',
    'Bulk sourcing partnerships',
  ],
  selectedSolution: {
    title: 'Farmer Cooperatives',
    rationale: [
      'Collective bargaining power',
      'Risk sharing',
      'Capacity building',
      'Community empowerment',
    ],
    criteria: ['Feasibility', 'Stakeholder acceptability', 'Income impact', 'Cost efficiency'],
    note:
      'Farmer cooperatives is the selected solution concept within the project — it is not presented as a fully deployed commercial system.',
  },
  presentation: {
    label: 'Final-Year Project Presentation',
    date: '25 November 2026',
    badge: 'Upcoming Presentation',
    note: 'The presentation has not yet taken place — the project is not described as completed.',
  },
}

// Overall future research direction for the /research page.
export const futureDirection =
  'My research direction for graduate study centres on trustworthy AI, information retrieval, evidence-grounded question answering, and reliable evaluation of LLM-based systems — building on both my independent LibAI research and my academic project work.'

export const libaiResearch = {
  shortTitle: 'LibAI',
  tagline: 'Trustworthy Curriculum-Aware RAG',
  subtitle:
    'Trustworthy Curriculum-Aware Retrieval-Augmented Generation for Educational Question Answering',
  context: 'Liberian senior-secondary education',
  title: 'LibAI — Trustworthy Curriculum-Aware RAG',
  badge: 'Independent AI Research',
  projectType: 'Independent Research & Development',
  status: 'Ongoing',
  description:
    'An independent research and development project investigating how curriculum-aware retrieval, evidence grounding, answerability, and verification can improve the reliability of LLM-generated educational answers in resource-constrained environments.',
  areas: [
    'Retrieval-Augmented Generation',
    'Information Retrieval',
    'Evidence Grounding',
    'LLM Evaluation',
    'Faithfulness',
    'Answerability',
    'Educational AI',
    'Resource-Constrained AI',
  ],
  purpose:
    'LibAI explores a curriculum-aware approach to educational question answering using Liberian senior-secondary curriculum materials as the research context.',

  problem:
    'The research problem is twofold. First, students in Liberia have limited access to tutoring resources aligned with the national senior-secondary curriculum, which widens educational gaps in underserved communities. Second, a general-purpose LLM used for study can produce fluent, confident answers that a learner has no reliable way to verify against the actual curriculum. In resource-constrained environments — limited connectivity, shared devices, low bandwidth — both problems become harder to detect and correct. Educational question answering in this setting is therefore an access problem and a trust problem at the same time.',

  problemPoints: [
    'contain unsupported claims',
    'provide information outside the curriculum',
    'lack traceable evidence',
    'answer questions that cannot be supported by the available knowledge',
    'behave unreliably in resource-constrained environments',
  ],

  problemClosing:
    'The research therefore investigates a curriculum-grounded approach to educational question answering.',

  gapLead:
    'The research gap is primarily an integration and evaluation gap rather than a claim that RAG itself is novel.',

  gapIntegrations: [
    'Curriculum-aware retrieval',
    'Metadata-aware evidence selection',
    'Evidence-grounded generation',
    'Answerability / abstention',
    'Learner-aware adaptation',
    'Resource-conscious deployment',
    'Systematic evaluation',
  ],

  gapObjective:
    'The objective is to determine how these components work together in a curriculum-specific educational setting.',

  gap:
    'Fluent model output is not the same as trustworthy model output. LibAI is motivated by four gaps this research targets: (1) answers that are not traceable to the curriculum evidence they were built from; (2) no reliable way for a system to say "this cannot be answered from the available material"; (3) retrieval that ignores curriculum structure such as subject, topic, and level; and (4) evaluation that reports a single model-level quality score without separating retrieval quality, grounding quality, and human judgement. This is an ongoing independent research effort aimed at those gaps — it does not, at this stage, report completed experimental results.',

  architecture:
    'Curriculum materials → structured curriculum knowledge base → retrieval (lexical / dense / hybrid, metadata-aware) → evidence reranking and sufficiency checks → grounded generation with source attribution → answerability and abstention layer → learner-aware adaptation → student-facing interface. The whole pipeline is designed to run under explicit resource and connectivity constraints.',

  // Conceptual pipeline rendered as the diagram on the LibAI research page.
  // Mirrors the architecture description above; no implementation claim implied.
  pipeline: [
    { label: 'Curriculum Data' },
    { label: 'Curriculum Knowledge Base' },
    { label: 'Query + Learner Context' },
    { label: 'Query Processing' },
    { label: 'Lexical Retrieval + Dense Retrieval' },
    { label: 'Hybrid Retrieval' },
    { label: 'Metadata Filtering / Ranking' },
    { label: 'Evidence Reranking' },
    { label: 'Evidence Sufficiency' },
    {
      alternatives: ['Grounded Generation', 'Abstention / Clarification'],
    },
    { label: 'Source Attribution' },
    { label: 'Learner-Aware Adaptation' },
    { label: 'Final Response' },
  ],

  knowledgeBase: {
    intro:
      'The system structures curriculum materials into a knowledge base with explicit metadata and provenance, so every retrieved passage can be traced back to its source. Structured curriculum information is used to improve retrieval quality and evidence traceability.',
    concepts: [
      'Subject',
      'Grade',
      'Topic',
      'Learning objective',
      'Source document',
      'Page / section',
      'Curriculum terminology',
      'Provenance',
    ],
  },

  retrievalMetrics: ['Precision@K', 'Recall@K', 'MRR', 'Context Precision', 'Context Recall'],

  groundingDimensions: [
    'Evidence sufficiency',
    'Source attribution',
    'Faithfulness',
    'Citation correctness',
    'Unsupported-claim rate',
    'Answerability',
    'Abstention',
  ],

  answerabilityOutcomes: [
    'Answer using retrieved evidence',
    'Request clarification',
    'Abstain when sufficient evidence is unavailable',
  ],

  answerabilityEvaluation: ['Answerability accuracy', 'Abstention quality'],

  answerabilityObjective:
    'The objective is to reduce unsupported answers rather than force the system to answer every question.',

  comparisons: {
    baselines: [
      { label: 'Baseline 1', name: 'LLM-only generation' },
      { label: 'Baseline 2', name: 'Vector-only RAG' },
      { label: 'Baseline 3', name: 'Lexical-only retrieval' },
      { label: 'Proposed', name: 'Curriculum-aware hybrid RAG' },
    ],
    note: 'The research uses controlled comparisons and ablations to investigate which components contribute to retrieval quality, grounding, answer reliability, and curriculum alignment.',
  },

  retrievalStrategy: [
    'Curriculum-aware knowledge organization: curriculum materials structured into a knowledge base aligned to subject, topic, and senior-secondary level.',
    'Lexical retrieval for exact term and concept matching.',
    'Dense retrieval for semantic matching beyond exact keywords.',
    'Hybrid retrieval combining lexical and dense signals.',
    'Metadata-aware retrieval and ranking using subject, topic, and level.',
    'Evidence reranking to select the most relevant passages for a question.',
    'Controlled baselines comparing retrieval configurations against one another.',
  ],

  evidenceGrounding: [
    'Grounded generation: answers are produced from retrieved evidence rather than open-ended model recall.',
    'Source attribution: generated claims are linked back to the curriculum passages they came from.',
    'Evidence sufficiency checks before generation, so weak evidence does not silently become an answer.',
    'Faithfulness examined as an explicit evaluation dimension, including unsupported-claim rate.',
  ],

  answerability: [
    'An answerability mechanism estimates whether the available curriculum evidence actually supports the question asked.',
    'Abstention: the system declines or asks for clarification when evidence is insufficient instead of guessing.',
    'Answerability accuracy and abstention quality are treated as first-class evaluation dimensions.',
    'Learner-aware adaptation: limited learner context (such as level and subject) is used to improve appropriateness without overriding the retrieved evidence.',
  ],

  evaluationNote:
    'These are the metrics the research is designed to measure. The framework is defined in advance; no numerical results, benchmark scores, accuracy figures, or performance improvements are reported on this site at this stage.',

  evaluationGroups: [
    {
      name: 'Retrieval',
      metrics: ['Precision@K', 'Recall@K', 'MRR', 'Context Precision', 'Context Recall'],
    },
    {
      name: 'Generation / Trustworthiness',
      metrics: [
        'Faithfulness',
        'Response Relevancy',
        'Citation Correctness',
        'Unsupported-Claim Rate',
        'Answerability Accuracy',
        'Abstention Quality',
        'Curriculum Alignment',
      ],
    },
    {
      name: 'Human Evaluation',
      metrics: [
        'Factual Correctness',
        'Curriculum Alignment',
        'Pedagogical Appropriateness',
        'Clarity',
        'Evidence Traceability',
        'Usefulness',
      ],
    },
    {
      name: 'System Performance',
      metrics: [
        'Response Latency',
        'Retrieval Latency',
        'Bandwidth Consumption',
        'Cache Hit Rate',
        'Availability during connectivity interruptions',
      ],
    },
  ],

  expertEvaluation: {
    description:
      'Expert evaluation is planned as part of the study: reviewers assess generated answers against the curriculum materials they are grounded in, using the human-evaluation dimensions above. The intention is to combine quantitative retrieval and generation measures with judgement from people who know the curriculum.',
    dimensions: [
      'Factual Correctness',
      'Curriculum Alignment',
      'Pedagogical Appropriateness',
      'Clarity',
      'Evidence Traceability',
      'Usefulness',
    ],
  },

  deployment: [
    'Response latency and retrieval latency tracked as explicit system measures.',
    'Bandwidth consumption kept low for constrained networks.',
    'Caching of repeated queries, with cache hit rate as a reported measure.',
    'Availability during connectivity interruptions treated as a design requirement, not an afterthought.',
    'Resource-conscious deployment is a research constraint of the project, not a post-hoc optimization.',
  ],

  ethics: [
    'Curriculum materials are used as the evidence base; the system is not designed to collect sensitive personal data from learners.',
    'Answers are generated from retrieved evidence with source attribution, so claims can be checked against the source material.',
    'An answerability and abstention mechanism is built in, so the system can decline to answer when the available evidence is insufficient.',
    'Expert evaluation, when conducted, involves reviewers participating in a professional capacity.',
    'Formal ethical review procedures will be confirmed with the supervising department before any study involving real students.',
  ],

  statusStages: [
    { label: 'Research problem defined', state: 'done', chip: 'Defined' },
    { label: 'Research questions established', state: 'done', chip: 'Defined' },
    { label: 'Research architecture designed', state: 'done', chip: 'Designed' },
    { label: 'Evaluation framework established', state: 'done', chip: 'Designed' },
    { label: 'System implementation and experimentation', state: 'ongoing', chip: 'Ongoing' },
    { label: 'Benchmark construction and evaluation', state: 'planned', chip: 'Planned' },
    { label: 'Expert evaluation', state: 'planned', chip: 'Planned' },
    { label: 'Analysis and reporting', state: 'planned', chip: 'Planned' },
  ],

  researchDirection:
    'This work forms the foundation of my interest in graduate research on trustworthy AI, information retrieval, evidence-grounded question answering, and reliable evaluation of LLM-based systems.',

  currentStatus: {
    label: 'Ongoing',
    points: [
      'Ongoing independent research and development project — conceived, designed, and developed independently by me; it is not a university final-year project, group project, or graduation requirement.',
      'System architecture and the evaluation framework are defined; implementation and controlled evaluation are in progress.',
      'LibAI is a research project — it is not presented as a finished scientific contribution.',
      'No experimental results, benchmarks, or accuracy figures are reported on this site at this stage.',
    ],
  },

  futureResearch: [
    'Voice-based tutoring for low-literacy learners.',
    'Offline and low-bandwidth operation for areas with limited connectivity.',
    'Teacher dashboard for classroom integration.',
    'Expansion to additional West African curricula.',
    'Broader expert evaluation and, where permitted, classroom studies.',
    'Larger-scale comparison of retrieval configurations as the curriculum knowledge base grows.',
  ],
}
