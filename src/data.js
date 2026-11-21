// All portfolio content lives here so the layout code stays readable.

export const PROFILE = {
  first: 'Musaib',
  last: 'Mikdad',
  full: 'Musaib Ibn Habib Mikdad',
  role: 'Web & AI Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'musaib19160@gmail.com',
  phone: '+880 1701-051384',
  phoneHref: 'tel:+8801701051384',
  cv: '/assets/Resume_Musaib Ibn Habib Mikdad.pdf',
  portrait: '/assets/img/mikdad.jpg',
  portraitAlt: '/assets/img/att2.jpg',
  intro:
    'I build full-stack web apps and the machine-learning models behind them. BRAC University CSE graduate, published in IEEE and Springer Nature on computer vision and NLP.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/MusaibMikdad' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/musaib-ibn-habib-mikdad-316336205/' },
    { label: 'Facebook', href: 'https://www.facebook.com/musaibmikdad.19160' },
    { label: 'Instagram', href: 'https://www.instagram.com/musaibmikdad/' },
  ],
};

export const STACK_MARQUEE = [
  'React', 'Next.js', 'Node.js', 'NestJS', 'Express', 'MongoDB', 'PyTorch',
  'YOLOv8', 'LSTM', 'NLP', 'Computer Vision', 'Python', 'JavaScript', 'Arduino',
];

export const PROJECTS = [
  {
    id: 'fifa-world-cup',
    title: 'FIFA World Cup 2026 Hub',
    subtitle: 'Real-time match companion with live scoreboards, brackets and a streaming directory',
    category: 'Web',
    filterTag: 'web',
    year: '2026',
    image: '/assets/img/portfolio/fifa_new.png',
    duration: 'June 2026',
    stack: ['React', 'Vite', 'Real-time state'],
    description: [
      'A real-time companion app for football fans. Fixtures move from Scheduled to Live to Finished on their own, driven by live data, and live matches show an interactive scoreboard and match clock without a page refresh.',
      'Includes automatic group standings, knockout brackets, and a region-aware directory of free and paid broadcasters. There is even a stadium-chant Easter egg hidden in the UI.',
      'Built with React and Vite, with a dark glass interface and small, deliberate micro-animations.',
    ],
    links: {
      github: 'https://github.com/MusaibMikdad/World-Cup-2026',
      live: 'https://world-cup-2026-vert-ten.vercel.app/',
    },
  },
  {
    id: 'undergrad-thesis',
    title: 'Infrastructure Detection from Drone Imagery',
    subtitle: 'Undergraduate thesis comparing YOLOv5, v7, v8 and a custom detector',
    category: 'Research',
    filterTag: 'research',
    year: '2024',
    image: '/assets/img/portfolio/research.jpg',
    duration: 'July 2023 – July 2024 · BRAC University',
    stack: ['PyTorch', 'YOLOv5/7/8', 'Custom dataset'],
    description: [
      'Developed and compared YOLOv5, YOLOv7, YOLOv8 and a custom model to improve infrastructure detection from drone imagery for urban planning in Bangladesh.',
      'Built a dataset tailored to Bangladeshi urban features, covering varied environments and lighting conditions.',
      'Showed how temporal data can track infrastructure change over time, supporting more sustainable planning. Published in IEEE.',
    ],
    links: { ieee: 'https://ieeexplore.ieee.org/document/11025116' },
  },
  {
    id: 'bracu-knowledge-nexus',
    title: 'BRACU Knowledge Nexus',
    subtitle: 'MERN course-review and skill-tracking platform for students',
    category: 'Web',
    filterTag: 'web',
    year: '2023',
    image: '/assets/img/portfolio/nexus.png',
    duration: 'August – September 2023',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    description: [
      'A MERN platform where students post detailed course reviews, share insights and exchange feedback on the courses they have taken.',
      'Adds skill tracking with curated resources and progress tracking, plus a course database to help students plan.',
      'React front end focused on responsive, intuitive navigation; Node and Express back end; MongoDB for flexible data.',
    ],
    links: { live: 'https://knowledge-nexus-lime.vercel.app/' },
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe with Minimax AI',
    subtitle: 'React + NestJS game with an unbeatable AI and local multiplayer',
    category: 'Web',
    filterTag: 'web',
    year: '2024',
    image: '/assets/img/portfolio/tic.png',
    duration: 'October – November 2024',
    stack: ['React', 'NestJS', 'Minimax'],
    description: [
      'A full Tic Tac Toe game with React on the front end and NestJS on the back end. Play single-player against a Minimax AI, or multiplayer with a friend.',
      'Smooth transitions, real-time match status, and celebratory animations and sounds for wins, losses and draws.',
    ],
    links: {
      github: 'https://github.com/MusaibMikdad/Prodigy_WD_3',
      live: 'https://tictactoe-ruddy-one.vercel.app/',
    },
  },
  {
    id: 'paper-writing',
    title: 'Disaster Tweet Pattern Recognition',
    subtitle: 'LSTM + NLP framework for crisis response, published by Springer Nature',
    category: 'Research',
    filterTag: 'research',
    year: '2023',
    image: '/assets/img/portfolio/pattern.png',
    duration: 'October – December 2023 · BRAC University',
    stack: ['LSTM', 'NLP', 'Python'],
    description: [
      'Detects disaster-related tweets using LSTM networks and NLP models, identifying patterns and extracting key phrases that signal a crisis.',
      'Enables fast, accurate analysis of unstructured social media data when quick decisions matter, and outlines scalable options for emergency management systems.',
    ],
    links: { springer: 'https://link.springer.com/chapter/10.1007/978-981-96-1758-6_4' },
  },
  {
    id: 'paper-work',
    title: 'SentimentScope',
    subtitle: 'Emotion classification combining Naive Bayes and k-Nearest Neighbours',
    category: 'Research',
    filterTag: 'research',
    year: '2023',
    image: '/assets/img/portfolio/ana.png',
    duration: 'October – November 2023 · BRAC University',
    stack: ['Naive Bayes', 'kNN', 'NLP'],
    description: [
      'An NLP algorithm that classifies emotions in text by combining the probabilistic predictions of Naive Bayes with the similarity-based approach of kNN.',
      'Evaluated with a confusion matrix across emotion types, with applications in business sentiment analysis and mental-health monitoring.',
    ],
  },
  {
    id: 'flight-reservation',
    title: 'Flight Reservation System',
    subtitle: 'PHP booking platform with accounts, history and cancellations',
    category: 'Web',
    filterTag: 'web',
    year: '2022',
    image: '/assets/img/portfolio/Flight.png',
    duration: 'November – December 2022',
    stack: ['PHP', 'MySQL'],
    description: [
      'Search, book and manage flights through a clean interface: browse availability, pick itineraries and book.',
      'Back end handles validation, transactions and availability, with account management, booking history and cancellations.',
    ],
    links: { github: 'https://github.com/MusaibMikdad/Flight-Reservation-System' },
  },
  {
    id: 'fire-detector',
    title: 'Fire & Smoke Detector',
    subtitle: 'Arduino system with flame and MQ-2 sensors and Bluetooth alerts',
    category: 'Hardware',
    filterTag: 'academic',
    year: '2023',
    image: '/assets/img/portfolio/fire.png',
    duration: 'August – September 2023 · BRAC University',
    stack: ['Arduino', 'MQ-2', 'Bluetooth'],
    description: [
      'Monitors a space continuously with a flame sensor and an MQ-2 gas and smoke sensor.',
      'On detection it sounds an alarm and sends mobile notifications over a Bluetooth module.',
    ],
    links: { gdrive: 'https://docs.google.com/document/d/1Y79jFDNZWWdcgW3Im-yTFfdiDedTu0s3diJTn8FawOk/edit?usp=sharing' },
  },
  {
    id: 'stopwatch',
    title: 'Dynamic Stopwatch',
    subtitle: 'Responsive timer with lap tracking',
    category: 'Web',
    filterTag: 'web',
    year: '2024',
    image: '/assets/img/portfolio/stop.png',
    duration: 'October 2024',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: [
      'A responsive stopwatch with smooth start, pause and reset, plus individual lap tracking that can be reset without touching the main timer.',
    ],
    links: {
      github: 'https://github.com/MusaibMikdad/PRODIGY_WD_02',
      live: 'https://musaibmikdad.github.io/PRODIGY_WD_02/Stopwatch/stopwatch.html',
    },
  },
];

export const PUBLICATIONS = [
  {
    venue: 'IEEE',
    title: 'Enhancing Infrastructure Detection Using Drone Imagery',
    note: 'YOLOv5/v7/v8 and a custom detector on a new Bangladeshi urban dataset.',
    href: 'https://ieeexplore.ieee.org/document/11025116',
  },
  {
    venue: 'Springer Nature',
    title: 'Pattern Recognition in Disaster Response Leveraging Twitter Analysis',
    note: 'LSTM and NLP models that flag crisis tweets and extract key signals.',
    href: 'https://link.springer.com/chapter/10.1007/978-981-96-1758-6_4',
  },
];

export const SKILLS = [
  {
    group: 'AI & Machine Learning',
    items: ['Computer Vision', 'NLP', 'YOLO v5 / v7 / v8', 'LSTM networks', 'Deep-learning optimisation'],
  },
  {
    group: 'Full-stack web',
    items: ['React', 'Vite', 'Next.js', 'Node.js', 'Express', 'NestJS', 'MongoDB', 'SQL', 'PHP'],
  },
  {
    group: 'Tools',
    items: ['Python', 'NumPy', 'PyTorch', 'Git', 'Vercel', 'Netlify', 'Arduino & IoT'],
  },
];

export const JOURNEY = [
  {
    when: 'Oct – Nov 2024',
    what: 'Web Development Intern',
    where: 'Prodigy InfoTech · Remote',
    note: 'Built interactive React apps with a focus on responsive design and performance.',
  },
  {
    when: '2020 – 2024',
    what: 'BSc in Computer Science & Engineering',
    where: 'BRAC University',
    note: 'Focused on AI, machine learning, NLP and computer vision. Thesis on drone imagery.',
  },
  {
    when: '2017 – 2019',
    what: 'Higher Secondary Certificate (Science)',
    where: 'Ishwardi Government College',
  },
  {
    when: '2015 – 2017',
    what: 'Secondary School Certificate (Science)',
    where: 'Ikhshu Goveshwana High School',
  },
];
