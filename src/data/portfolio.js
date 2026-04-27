// ─── All portfolio content in one place ───────────────────────────────────
// Update this file to change any text, links, skills, or projects.

export const personal = {
  name:      'Pabbisetti S K Harshith',
  short:     'Harshith PSKY',
  initials:  'H.PSKY',
  location:  'Hyderabad, Telangana, India',
  email:     'harshithpsky12@gmail.com',
  phone:     '+91 9392370399',
  github:    'https://github.com/harshithpsky',   // update with real URL
  linkedin:  'https://linkedin.com/in/harshith-psk-nov', // update with real URL
  resume:    '/resume.pdf',
}

export const typedRoles = [
  'AI / ML Developer',
  'Backend Developer',
  'Python Developer',
  'Full-Stack Builder',
  'IEEE Researcher',
]

export const heroDesc = `Recent BTech graduate in AI & ML. I build production-ready applications with Python and FastAPI, and ship deep learning research. Passionate about leveraging machine learning and generative AI to create real-world impact.`

export const stats = [
  { value: '2+',   label: 'Major AI Projects' },
  { value: '2×',   label: 'IEEE Award Winner'  },
  { value: '4★',   label: 'HackerRank Rating'  },
  { value: 'Top 5',label: 'Hackathon (200+)'   },
]

export const aboutText = [
  `I'm <strong>Pabbisetti S K Harshith</strong>, a 2025 BTech graduate in <strong class="text-accent-cyan">AI & Machine Learning</strong> from Kalasalingam Academy of Research and Education, Virudhunagar — based in <strong>Hyderabad, Telangana</strong>.`,
  `I specialize in building production-ready applications using <strong class="text-accent-cyan">Python and FastAPI</strong>. My expertise extends to machine learning, deep neural networks, computer vision, and building self-healing MLOps platforms using tools like Docker, Redis, and PostgreSQL.`,
  `I'm passionate about leveraging machine learning and generative AI to create scalable, real-world impact in dynamic tech environments, and I'm open to full-time roles and impactful collaborations.`,
]

export const aboutQuote =
  'Published IEEE researcher — Best Paper Award at GINOTECH 2025 for deep neural network research on object detection in foggy weather conditions.'

export const aboutCards = [
  { icon: '🤖', title: 'AI / ML',       desc: 'Deep neural networks, computer vision, NLP, generative AI systems'              },
  { icon: '🔧', title: 'Backend',       desc: 'Python, FastAPI, REST APIs — fast APIs and scalable architectures'         },
  { icon: '⚙️', title: 'MLOps',         desc: 'Docker, Redis, RabbitMQ, Celery — deployment and data pipelines'         },
  { icon: '📄', title: 'Research',      desc: 'IEEE published — Best Paper at GINOTECH 2025 for DNN fog detection'              },
]

export const stackBanner = [
  { label: 'Python', color: 'cyan'   },
  { label: 'FastAPI',    color: 'cyan'   },
  { label: 'TensorFlow',        color: 'lime'   },
  { label: 'Scikit-learn',         color: 'lime'   },
  { label: 'Docker',    color: 'violet'   },
  { label: 'Redis / Celery',   color: 'violet' },
  { label: 'MySQL / PostgreSQL',          color: 'amber'  },
  { label: 'JavaScript',         color: 'amber'  },
]

export const skillCategories = [
  {
    title: 'Languages & Databases',
    color: 'cyan',
    skills: [
      { name: 'Python', pct: 95 },
      { name: 'SQL',             pct: 90 },
      { name: 'JavaScript',              pct: 85 },
      { name: 'MySQL / PostgreSQL', pct: 88 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'lime',
    skills: [
      { name: 'FastAPI',      pct: 92 },
      { name: 'TensorFlow / Keras',       pct: 88 },
      { name: 'Scikit-learn',  pct: 90 },
      { name: 'OpenCV / Pandas / NumPy', pct: 85 },
    ],
  },
  {
    title: 'Tools & Technologies',
    color: 'violet',
    skills: [
      { name: 'Docker',               pct: 85 },
      { name: 'Redis & RabbitMQ',                     pct: 82 },
      { name: 'Celery',                    pct: 80 },
      { name: 'Git & GitHub', pct: 90 },
    ],
  },
  {
    title: 'Core Concepts',
    color: 'amber',
    skills: [
      { name: 'Machine Learning',              pct: 92 },
      { name: 'Data Structures & Algorithms',             pct: 85 },
      { name: 'Object-Oriented Programming', pct: 90 },
      { name: 'API Design', pct: 88 },
    ],
  },
]

export const projects = [
  {
    num:      '01',
    title:    'Sentinel Stream – Real-Time Fraud Detection & Self-Healing MLOps Platform',
    desc:     'Built a real-time fraud detection engine (<200ms latency) using FastAPI, Isolation Forest, and rule-based risk scoring. Implemented data drift detection, automatic retraining, and hot-swapping deployment with Redis/Celery pipeline and Dockerized deployment.',
    tags:     [
      { label: 'Python',         color: 'cyan'  },
      { label: 'FastAPI',      color: 'cyan'  },
      { label: 'Scikit-learn',       color: 'lime'  },
      { label: 'PostgreSQL',    color: 'lime'  },
      { label: 'Docker / Redis / Celery',color: 'violet'  },
      { label: 'React',      color: 'amber'  },
    ],
    color:     'cyan',
    featured:  true,
    github:    '#',
    live:      '#',
  },
  {
    num:      '02',
    title:    'PneumoScan – Pneumonia Detection from Chest X-rays',
    desc:     'Built a deep learning model for pneumonia detection from chest X-ray images using CNN-based image classification. Developed a simple diagnostic web app in Streamlit for image upload, preprocessing, and prediction visualization.',
    tags:     [
      { label: 'Python',     color: 'cyan'   },
      { label: 'TensorFlow/Keras',      color: 'lime'   },
      { label: 'OpenCV', color: 'lime'   },
      { label: 'Streamlit',     color: 'violet'   },
      { label: 'Pandas / NumPy',   color: 'amber'   },
    ],
    color:    'lime',
    featured: true,
    github:   '#',
    live:     '#',
  },
]

export const experience = [
  {
    year:    '2025',
    company: 'Electronic Arts (EA)',
    role:    'Software Engineering Virtual Experience — Forage',
    points:  [
      'Optimized systems and translated complex requirements into technical solutions.',
      'Debugged live code and improved overall system performance at EA scale.',
      'Applied object-oriented principles to build reusable, maintainable software components.',
    ],
  },
]

export const education = {
  degree:  'B.Tech — CSE (AI & Machine Learning)',
  school:  'Kalasalingam Academy of Research and Education, Virudhunagar',
  period:  '2021 — 2025 (CGPA: 7.44)',
  awards:  [
    {
      icon:  '🏆',
      title: 'Best Paper — IEEE GINOTECH 2025',
      desc:  'Deep neural network research on foggy weather condition object detection — published IEEE paper.',
    },
    {
      icon:  '🥇',
      title: 'Best Project — FIE Semester 6, 2024',
      desc:  'Helmet Detection for Enhanced Safety — awarded Best Project in Foundation on Innovation & Entrepreneurship.',
    },
  ],
}

export const achievements = [
  {
    icon:  '📄',
    title: 'IEEE Published Researcher',
    desc:  'Best Paper Award at GINOTECH 2025 for DNN research on foggy weather object detection.',
    year:  '2025',
  },
  {
    icon:  '🏆',
    title: 'Best Project Award — FIE',
    desc:  'Helmet Detection for Enhanced Safety at Foundation on Innovation & Entrepreneurship.',
    year:  '2024',
  },
  {
    icon:  '⚡',
    title: 'Top 5 — College Hackathon',
    desc:  'Ranked 5th among 200+ participants, showcasing problem-solving abilities and competitive coding skills.',
    year:  '2024',
  },
  {
    icon:  '⭐',
    title: 'HackerRank 4-Star',
    desc:  'Consistent 4-star rating on HackerRank and active competitive coder on CodeChef.',
    year:  'Ongoing',
  },
]
