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

export const libaiResearch = {
  title: 'LibAI — Trustworthy Curriculum-Aware RAG',
  status: 'Undergraduate Research / Ongoing',
  description:
    'A research-oriented RAG platform investigating how curriculum-aware retrieval, evidence grounding, answerability, and verification can improve the reliability of LLM-generated educational answers in resource-constrained environments.',
  areas: [
    'Retrieval-Augmented Generation',
    'Information Retrieval',
    'Evidence Grounding',
    'LLM Evaluation',
    'Faithfulness',
    'Educational AI',
    'Low-Resource AI',
  ],
  purpose:
    'LibAI explores a curriculum-aware approach to educational question answering using Liberian senior-secondary curriculum materials as the research context.',

  problem:
    'The research problem is twofold. First, students in Liberia have limited access to tutoring resources aligned with the national senior-secondary curriculum, which widens educational gaps in underserved communities. Second, a general-purpose LLM used for study can produce fluent, confident answers that a learner has no reliable way to verify against the actual curriculum. In resource-constrained environments — limited connectivity, shared devices, low bandwidth — both problems become harder to detect and correct. Educational question answering in this setting is therefore an access problem and a trust problem at the same time.',

  gap:
    'Fluent model output is not the same as trustworthy model output. LibAI is motivated by four gaps this research targets: (1) answers that are not traceable to the curriculum evidence they were built from; (2) no reliable way for a system to say "this cannot be answered from the available material"; (3) retrieval that ignores curriculum structure such as subject, topic, and level; and (4) evaluation that reports a single model-level quality score without separating retrieval quality, grounding quality, and human judgement. This is an ongoing undergraduate research effort aimed at those gaps — it does not, at this stage, report completed experimental results.',

  architecture:
    'Curriculum materials → structured curriculum knowledge base → retrieval (lexical / dense / hybrid, metadata-aware) → evidence reranking and sufficiency checks → grounded generation with source attribution → answerability and abstention layer → learner-aware adaptation → student-facing interface. The whole pipeline is designed to run under explicit resource and connectivity constraints.',

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

  currentStatus: {
    label: 'Ongoing',
    points: [
      'Ongoing undergraduate research project, conducted collaboratively as part of IS Project I and IS Project II at Strathmore University (group of four).',
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
