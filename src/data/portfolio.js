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
  linkedin:  'https://linkedin.com/in/harshithpsky', // update with real URL
  resume:    '/resume.pdf',
}

export const typedRoles = [
  'Frontend Developer',
  'React & Next.js Engineer',
  'Full-Stack Builder',
  'AI / ML Developer',
  'IEEE Researcher',
]

export const heroDesc = `BTech graduate in AI & ML. I build production-ready frontends with
React, Next.js & Tailwind CSS — animated with Framer Motion, deployed on Vercel.
Also ship deep learning research.`

export const stats = [
  { value: '3+',   label: 'Projects Shipped'  },
  { value: '2×',   label: 'IEEE Award Winner'  },
  { value: '4★',   label: 'HackerRank Rating'  },
  { value: 'Top 5',label: 'Hackathon (200+)'   },
]

export const aboutText = [
  `I'm <strong>Pabbisetti S K Harshith</strong>, a 2025 BTech graduate in <strong class="text-accent-cyan">AI & Machine Learning</strong> from Kalasalingam Academy of Research and Education, Virudhunagar — based in <strong>Hyderabad, Telangana</strong>.`,
  `My primary frontend stack is <strong class="text-accent-cyan">React.js + Next.js + Tailwind CSS + Framer Motion</strong>, shipped and hosted on Vercel with version control via Git/GitHub. I pair this with Python, FastAPI, and Firebase on the backend.`,
  `I'm open to full-time frontend/full-stack roles, freelance projects, and impactful collaborations — remote, hybrid, or on-site across India.`,
]

export const aboutQuote =
  'Published IEEE researcher — Best Paper Award at GINOTECH 2025 for deep neural network research on object detection in foggy weather conditions.'

export const aboutCards = [
  { icon: '⚡', title: 'Frontend Dev',  desc: 'React, Next.js, Tailwind CSS, Framer Motion — polished animated UIs'           },
  { icon: '🤖', title: 'AI / ML',       desc: 'Deep neural networks, computer vision, NLP, generative AI systems'              },
  { icon: '🔧', title: 'Backend',       desc: 'Python, FastAPI, Node.js, Firebase — fast APIs and real-time databases'         },
  { icon: '📄', title: 'Research',      desc: 'IEEE published — Best Paper at GINOTECH 2025 for DNN fog detection'              },
]

export const stackBanner = [
  { label: 'JavaScript ES6+', color: 'cyan'   },
  { label: 'HTML5 / CSS3',    color: 'cyan'   },
  { label: 'React.js',        color: 'cyan'   },
  { label: 'Next.js',         color: 'cyan'   },
  { label: 'Tailwind CSS',    color: 'lime'   },
  { label: 'Framer Motion',   color: 'violet' },
  { label: 'Vercel',          color: 'amber'  },
  { label: 'Node.js',         color: 'amber'  },
]

export const skillCategories = [
  {
    title: 'Languages',
    color: 'cyan',
    skills: [
      { name: 'JavaScript (ES6+)', pct: 95 },
      { name: 'HTML5',             pct: 96 },
      { name: 'CSS3',              pct: 92 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'lime',
    skills: [
      { name: 'React.js',      pct: 92 },
      { name: 'Next.js',       pct: 86 },
      { name: 'Tailwind CSS',  pct: 93 },
      { name: 'Framer Motion', pct: 83 },
    ],
  },
  {
    title: 'Tools & Platform',
    color: 'violet',
    skills: [
      { name: 'Git / GitHub',               pct: 90 },
      { name: 'Vercel',                     pct: 88 },
      { name: 'Node.js',                    pct: 80 },
      { name: 'Lucide React / FontAwesome', pct: 92 },
    ],
  },
  {
    title: 'Also Know',
    color: 'amber',
    skills: [
      { name: 'Python',              pct: 88 },
      { name: 'FastAPI',             pct: 80 },
      { name: 'Firebase / Oracle SQL', pct: 78 },
      { name: 'NLP / Deep Learning', pct: 76 },
    ],
  },
]

export const projects = [
  {
    num:      '01',
    title:    'Real-Time Data Visualization Framework',
    desc:     'High-performance live data toolkit in Python with sub-50ms refresh rates, 60-point sliding window buffers, and multi-stream concurrent support. Interactive dashboard with dynamic theming engine and real-time config controls.',
    tags:     [
      { label: 'Python',         color: 'cyan'  },
      { label: 'Real-time',      color: 'cyan'  },
      { label: 'Data Viz',       color: 'gray'  },
      { label: 'Dynamic Theming',color: 'gray'  },
      { label: 'Telemetry',      color: 'gray'  },
    ],
    color:     'cyan',
    featured:  true,
    github:    '#',   // replace with real GitHub URL
    live:      '#',   // replace with live demo URL
  },
  {
    num:      '02',
    title:    'SS Textile Web Application',
    desc:     'Full-stack product showcase with owner-managed admin system. Role-based access — customers view only, owner controls all CRUD. Firebase real-time DB + responsive React/Next.js frontend deployed on Vercel.',
    tags:     [
      { label: 'React.js',     color: 'lime'   },
      { label: 'Next.js',      color: 'lime'   },
      { label: 'Tailwind CSS', color: 'lime'   },
      { label: 'Firebase',     color: 'gray'   },
      { label: 'JavaScript',   color: 'gray'   },
      { label: 'Vercel',       color: 'amber'  },
    ],
    color:    'lime',
    featured: false,
    github:   '#',
    live:     '#',
  },
  {
    num:      '03',
    title:    'NLP Chatbot with Web Scraping',
    desc:     'Intelligent chatbot that fetches real-time news and job listings via web scraping + keyword-based NLP responses. Modular architecture with exception handling and CRUD ops for fast dynamic content delivery.',
    tags:     [
      { label: 'Python',       color: 'violet' },
      { label: 'NLP',          color: 'violet' },
      { label: 'Web Scraping', color: 'gray'   },
      { label: 'CRUD',         color: 'gray'   },
      { label: 'Chatbot',      color: 'gray'   },
    ],
    color:    'violet',
    featured: false,
    github:   '#',
    live:     '#',
  },
  {
    num:      '04',
    title:    'Helmet Detection Safety System',
    desc:     'Computer vision system for real-time helmet usage detection on construction sites and roads. Deep neural network architecture — awarded Best Project at Foundation on Innovation & Entrepreneurship, Semester 6, 2024.',
    tags:     [
      { label: 'Computer Vision',    color: 'amber' },
      { label: 'Deep Neural Network',color: 'amber' },
      { label: 'Python',             color: 'gray'  },
      { label: 'Safety AI',          color: 'gray'  },
    ],
    color:    'amber',
    featured: false,
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
      'Completed industry-simulated tasks: code refactoring, debugging and system design at EA scale.',
      'Applied object-oriented principles to build reusable, maintainable software components.',
      'Documented technical solutions and improved overall code readability and developer experience.',
    ],
  },
]

export const education = {
  degree:  'B.Tech — CSE (AI & Machine Learning)',
  school:  'Kalasalingam Academy of Research and Education, Virudhunagar',
  period:  '2021 — 2025',
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
    desc:  'Ranked 5th among 200+ participants, demonstrating algorithmic problem-solving excellence.',
    year:  '2024',
  },
  {
    icon:  '⭐',
    title: 'HackerRank 4-Star',
    desc:  'Consistent 4-star rating on HackerRank and active competitive coder on CodeChef.',
    year:  'Ongoing',
  },
]
