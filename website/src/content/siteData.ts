export type WorkflowBlock = {
  title: string
  workflow: string[]
  value: string[]
}

export type Industry = {
  id: string
  name: string
  summary: string
  blocks: WorkflowBlock[]
}

export const hero = {
  title: 'Accelerating Innovation Across Life Sciences and Healthcare',
  subtitle:
    'We build advanced Artificial Intelligence platforms and customized GPT-based knowledge systems that transform research, medicine, and healthcare delivery.',
  body: 'Our AI solutions empower organizations in clinical research, pharmaceutical development, biotechnology, genomics, and hospital systems to make faster, data-driven decisions that improve efficiency, reduce costs, and enhance patient outcomes.',
}

export const enablementBullets = [
  'Accelerate research and innovation',
  'Improve operational efficiency',
  'Reduce long-term development costs',
  'Enhance regulatory compliance',
  'Deliver precision medicine',
  'Improve patient outcomes and quality of life',
]

export const industries: Industry[] = [
  {
    id: 'clinical-research',
    name: 'Clinical Research',
    summary:
      'Clinical trials generate massive volumes of complex clinical and operational data. AI can dramatically improve trial design, patient recruitment, monitoring, and regulatory compliance, reducing time and cost in bringing new therapies to market.',
    blocks: [
      {
        title: 'Clinical Trial Design and Protocol Optimization',
        workflow: [
          'Literature and data mining',
          'Trial endpoint modeling',
          'Eligibility criteria optimization',
          'Predictive trial outcome analysis',
        ],
        value: [
          'Reduced protocol amendments',
          'Faster trial initiation',
          'Improved success probability',
        ],
      },
      {
        title: 'Patient Recruitment and Site Selection',
        workflow: [
          'Patient eligibility matching',
          'Trial feasibility analysis',
          'Geographic site optimization',
          'Enrollment prediction modeling',
        ],
        value: [
          'Faster patient recruitment',
          'Increased trial diversity',
          'Reduced recruitment costs',
        ],
      },
      {
        title: 'Clinical Data Monitoring and Management',
        workflow: [
          'Automated data validation',
          'Risk-based monitoring',
          'Real-time anomaly detection',
          'Data integrity checks',
        ],
        value: [
          'Improved data quality',
          'Faster clinical decisions',
          'Reduced operational overhead',
        ],
      },
      {
        title: 'Regulatory Documentation and Compliance',
        workflow: [
          'Regulatory document generation',
          'Compliance intelligence systems',
          'Automated report generation',
          'Regulatory gap analysis',
        ],
        value: ['Faster regulatory submissions', 'Reduced compliance risk'],
      },
    ],
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical Industry',
    summary:
      'AI is transforming the pharmaceutical industry by accelerating drug discovery, clinical development, pharmacovigilance, and commercialization strategies.',
    blocks: [
      {
        title: 'Drug Discovery and Target Identification',
        workflow: [
          'Biological pathway analysis',
          'Drug–target interaction modeling',
          'Molecular screening',
          'Predictive therapeutic modeling',
        ],
        value: ['Faster drug discovery', 'Reduced early-stage research costs'],
      },
      {
        title: 'Preclinical Research and Toxicology',
        workflow: [
          'Toxicity prediction modeling',
          'Pharmacokinetic analysis',
          'Compound screening',
        ],
        value: ['Reduced preclinical failure rates', 'Faster lead optimization'],
      },
      {
        title: 'Clinical Development and Biomarker Discovery',
        workflow: [
          'Biomarker identification',
          'Patient segmentation',
          'Predictive response modeling',
        ],
        value: [
          'Improved clinical trial success rates',
          'Precision medicine development',
        ],
      },
      {
        title: 'Pharmacovigilance and Drug Safety',
        workflow: [
          'Adverse event detection',
          'Safety signal identification',
          'Risk management analytics',
        ],
        value: ['Faster safety signal detection', 'Enhanced patient safety'],
      },
    ],
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology Industry',
    summary:
      'Biotechnology companies rely on advanced analytics and biological insights to develop innovative therapies and bio-based solutions.',
    blocks: [
      {
        title: 'Biomarker Discovery',
        workflow: [
          'Omics data integration',
          'Disease pathway modeling',
          'Biomarker validation',
        ],
        value: ['Improved diagnostics', 'Targeted therapies'],
      },
      {
        title: 'Precision Medicine',
        workflow: [
          'Patient stratification',
          'Treatment response prediction',
          'Personalized therapy optimization',
        ],
        value: ['More effective treatments', 'Reduced adverse drug reactions'],
      },
      {
        title: 'Biomanufacturing Optimization',
        workflow: [
          'Process monitoring',
          'Predictive quality analytics',
          'Production yield optimization',
        ],
        value: ['Reduced manufacturing costs', 'Improved product consistency'],
      },
    ],
  },
  {
    id: 'hospitals',
    name: 'Hospitals and Healthcare Systems',
    summary:
      'Hospitals generate vast amounts of clinical and operational data. AI solutions help healthcare providers deliver better care while improving efficiency and reducing operational costs.',
    blocks: [
      {
        title: 'Clinical Decision Support Systems',
        workflow: [
          'Patient data integration',
          'Risk prediction models',
          'Treatment recommendation systems',
        ],
        value: ['Improved diagnostic accuracy', 'Better treatment outcomes'],
      },
      {
        title: 'Medical Imaging and Diagnostics',
        workflow: [
          'Radiology image analysis',
          'Pathology slide interpretation',
          'Early disease detection',
        ],
        value: ['Faster diagnoses', 'Reduced clinician workload'],
      },
      {
        title: 'Hospital Operations and Workflow Optimization',
        workflow: [
          'Patient flow optimization',
          'Bed management systems',
          'Resource allocation modeling',
        ],
        value: ['Reduced wait times', 'Improved operational efficiency'],
      },
      {
        title: 'Remote Monitoring and Chronic Disease Management',
        workflow: [
          'Wearable device integration',
          'Predictive health risk modeling',
          'Personalized care plans',
        ],
        value: [
          'Reduced hospital readmissions',
          'Improved chronic disease management',
        ],
      },
    ],
  },
  {
    id: 'genomics',
    name: 'AI in Genomics, Bioinformatics, and Drug Discovery',
    summary:
      'Advances in genomic technologies have generated vast biological datasets. AI and bioinformatics enable deeper insights into genetic variations, disease mechanisms, and therapeutic targets.',
    blocks: [
      {
        title: 'Genomics Data Analysis',
        workflow: [
          'Genome sequencing data processing',
          'Variant calling and annotation',
          'Genetic risk modeling',
        ],
        value: ['Faster genomic insights', 'Improved disease risk prediction'],
      },
      {
        title: 'Bioinformatics and Multi-Omics Integration',
        workflow: [
          'Transcriptomics analysis',
          'Proteomics data integration',
          'Systems biology modeling',
        ],
        value: ['Improved biological insights', 'Accelerated biomarker discovery'],
      },
      {
        title: 'AI-Driven Drug Discovery',
        workflow: [
          'Compound screening',
          'Protein structure modeling',
          'Drug–target interaction prediction',
        ],
        value: [
          'Reduced drug discovery timelines',
          'Increased success rates in drug development',
        ],
      },
      {
        title: 'Precision Genomics and Personalized Medicine',
        workflow: [
          'Genetic risk stratification',
          'Pharmacogenomics analysis',
          'Personalized therapy recommendations',
        ],
        value: ['Tailored treatments', 'Improved therapeutic outcomes'],
      },
    ],
  },
]

export const valueProps = [
  {
    title: 'Speed',
    text: 'Accelerate research, clinical trials, and diagnostic decision-making.',
  },
  {
    title: 'Efficiency',
    text: 'Automate complex workflows and reduce manual effort.',
  },
  {
    title: 'Cost Reduction',
    text: 'Lower operational and R&D costs through predictive analytics.',
  },
  {
    title: 'Better Patient Outcomes',
    text: 'Enable data-driven treatment decisions and precision medicine.',
  },
  {
    title: 'Improved Quality of Life',
    text: 'Deliver innovative healthcare solutions that enhance long-term health outcomes.',
  },
]

export const techFramework = {
  heading: 'Our Technology Framework',
  pillars: [
    'Artificial Intelligence',
    'Machine Learning',
    'Bioinformatics',
    'Clinical Data Analytics',
    'Custom GPT Knowledge Systems',
    'Interoperable Healthcare Data Platforms',
  ],
  integrationsHeading: 'We integrate seamlessly with existing systems including:',
  integrations: [
    'Electronic Health Records (EHR)',
    'Clinical Trial Management Systems',
    'Laboratory Information Systems',
    'Genomic Data Platforms',
  ],
}

export const visionMission = {
  vision:
    'We envision a future where AI augments scientific discovery, clinical decision-making, and healthcare delivery, enabling faster innovations and better outcomes for patients worldwide.',
  mission:
    'Our mission is to create intelligent healthcare ecosystems that transform research, medicine, and patient care.',
}

export type ProductEntry = {
  name: string
  tagline: string
  description: string
  capabilities: string[]
  applications?: string[]
  impact?: string[]
}

export const products: ProductEntry[] = [
  {
    name: 'LifeSciGPT™',
    tagline: 'Domain-Specific Knowledge AI for Life Sciences',
    description:
      'LifeSciGPT is a custom GPT platform trained on biomedical literature, regulatory guidelines, and scientific datasets to support researchers, clinicians, and pharmaceutical professionals.',
    capabilities: [
      'Scientific literature analysis',
      'Drug discovery insights',
      'Regulatory documentation support',
      'Clinical protocol development',
      'Knowledge extraction from biomedical databases',
    ],
    applications: [
      'Pharmaceutical research teams',
      'Clinical research organizations',
      'Biotechnology companies',
      'Academic research institutions',
    ],
  },
  {
    name: 'TrialAI™',
    tagline: 'AI Platform for Clinical Trial Optimization',
    description:
      'TrialAI enables data-driven clinical trial design, patient recruitment, and monitoring through advanced machine learning models.',
    capabilities: [
      'AI-powered patient matching',
      'Trial feasibility modeling',
      'Risk-based monitoring',
      'Clinical data anomaly detection',
      'Real-time trial analytics dashboards',
    ],
    impact: [
      'Faster clinical trial timelines',
      'Improved recruitment efficiency',
      'Higher trial success rates',
    ],
  },
  {
    name: 'GenomicAI™',
    tagline: 'Bioinformatics and Genomic Intelligence Platform',
    description:
      'GenomicAI accelerates genomic research by combining AI algorithms with advanced bioinformatics pipelines.',
    capabilities: [
      'Genome sequencing data analysis',
      'Variant identification and annotation',
      'Gene expression analysis',
      'Multi-omics integration',
      'Biomarker discovery',
    ],
    applications: ['Precision medicine research', 'Genomics labs'],
  },
]
