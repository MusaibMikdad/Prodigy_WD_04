import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Cpu, 
  ExternalLink, 
  FileText, 
  X, 
  Menu, 
  ArrowRight, 
  Award, 
  BookOpen, 
  Send, 
  CheckCircle, 
  Layers, 
  User, 
  MessageSquare,
  Check,
  Search,
  ChevronRight,
  Folder,
  GitBranch,
  Terminal as TerminalIcon
} from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

const Facebook = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const LogoMark = ({ className = "w-8 h-8", ...props }) => (
  <svg viewBox="0 0 256 256" fill="#ffffff" className={className} {...props}>
    <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
  </svg>
);

const DownloadButton = ({ label, onClick, ...props }) => (
  <button 
    onClick={onClick}
    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold text-xs px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] cursor-pointer border-none"
    {...props}
  >
    <FileText className="w-3.5 h-3.5" />
    <span>{label}</span>
    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-px" />
  </button>
);

const SectionEyebrow = ({ label, tag }) => (
  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D81E3]">
    <span className="w-1.5 h-1.5 rounded-full bg-white" />
    <span>{label}</span>
    {tag && (
      <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 lowercase">
        {tag}
      </span>
    )}
  </div>
);

// Gradient style for text headers
const gradientStyle = {
  backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)'
};

// Animated Developer Code Terminal Component
const CodeTerminalMock = () => {
  const [typedLines, setTypedLines] = useState([]);
  
  const codeLines = [
    { text: "const developer = {", indent: 0, color: "plain" },
    { text: "  name: 'Musaib Ibn Habib Mikdad',", indent: 1, color: "property", label: "name", val: "'Musaib Ibn Habib Mikdad'" },
    { text: "  role: 'Web Developer & AI Researcher',", indent: 1, color: "property", label: "role", val: "'Web Developer & AI Researcher'" },
    { text: "  origin: 'Dhaka, Bangladesh',", indent: 1, color: "property", label: "origin", val: "'Dhaka, Bangladesh'" },
    { text: "  publications: [", indent: 1, color: "plain" },
    { text: "    'Springer Nature (NLP Disaster Analysis)',", indent: 2, color: "string", val: "'Springer Nature (NLP Disaster Analysis)'" },
    { text: "    'IEEE (Drone Infrastructure Detection)'", indent: 2, color: "string", val: "'IEEE (Drone Infrastructure Detection)'" },
    { text: "  ],", indent: 1, color: "plain" },
    { text: "  skills: ['React', 'NestJS', 'PyTorch', 'MongoDB'],", indent: 1, color: "skills" },
    { text: "  available: true", indent: 1, color: "boolean" },
    { text: "};", indent: 0, color: "plain" }
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < codeLines.length) {
        setTypedLines(prev => {
          if (prev.length >= codeLines.length) return prev;
          return [...prev, codeLines[index]];
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ide-window">
      {/* Title Bar / Header */}
      <div className="ide-titlebar">
        <div className="ide-dots">
          <div className="ide-dot ide-dot-red" />
          <div className="ide-dot ide-dot-yellow" />
          <div className="ide-dot ide-dot-green" />
        </div>
        <div className="ide-title-text">
          <span className="ide-title-pulse" />
          <span>musaib@habib-desktop: ~/portfolio</span>
        </div>
        <div style={{ width: '48px' }} />
      </div>

      {/* Editor Main Area */}
      <div className="ide-body">
        {/* VS Code sidebar */}
        <div className="ide-sidebar">
          <div className="ide-sidebar-icon active">
            <Folder size={16} />
          </div>
          <div className="ide-sidebar-icon">
            <Search size={16} />
          </div>
          <div className="ide-sidebar-icon">
            <GitBranch size={16} />
          </div>
          <div className="ide-sidebar-icon">
            <TerminalIcon size={16} />
          </div>
        </div>

        {/* Editor Area */}
        <div className="ide-editor-container">
          {/* Tabs header */}
          <div className="ide-tabbar">
            <div className="ide-tab active">
              <span className="ide-tab-icon text-yellow-500">JS</span>
              <span>profile.js</span>
            </div>
            <div className="ide-tab">
              <span className="ide-tab-icon text-[#3D81E3]">PY</span>
              <span>ml_model.py</span>
            </div>
            <div className="ide-tab">
              <span className="ide-tab-icon text-green-500">MD</span>
              <span>README.md</span>
            </div>
          </div>

          {/* Code lines list */}
          <div className="ide-editor">
            <div className="terminal-lines">
              {typedLines.map((line, idx) => {
                if (!line) return null;
                return (
                  <div key={idx} className="terminal-line flex items-start">
                    <span className="terminal-line-no">{idx + 1}</span>
                    <span className="flex-grow">
                      {line.color === "plain" && (
                        <span>
                          {line.text.includes("const") ? (
                            <>
                              <span className="terminal-keyword text-[#ff79c6]">const</span>
                              <span className="terminal-variable text-[#50fa7b]"> developer</span> = {"{"}
                            </>
                          ) : line.text}
                        </span>
                      )}
                      {line.color === "property" && (
                        <span>
                          &nbsp;&nbsp;<span className="terminal-variable text-[#8be9fd]">{line.label}</span>: <span className="terminal-string text-[#f1fa8c]">{line.val}</span>,
                        </span>
                      )}
                      {line.color === "string" && (
                        <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal-string text-[#f1fa8c]">{line.val}</span>
                          {idx === 5 ? "," : ""}
                        </span>
                      )}
                      {line.color === "skills" && (
                        <span>
                          &nbsp;&nbsp;<span className="terminal-variable text-[#8be9fd]">skills</span>: [
                          <span className="terminal-string text-[#f1fa8c]">'React'</span>, <span className="terminal-string text-[#f1fa8c]">'NestJS'</span>, <span className="terminal-string text-[#f1fa8c]">'PyTorch'</span>, <span className="terminal-string text-[#f1fa8c]">'MongoDB'</span>
                          ],
                        </span>
                      )}
                      {line.color === "boolean" && (
                        <span>
                          &nbsp;&nbsp;<span className="terminal-variable text-[#8be9fd]">available</span>: <span className="terminal-number text-[#bd93f9]">true</span>
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
              {typedLines.length < codeLines.length && (
                <div className="terminal-line flex items-center">
                  <span className="terminal-line-no">{typedLines.length + 1}</span>
                  <span className="w-1.5 h-3.5 bg-[#3D81E3] animate-pulse ml-1" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="ide-statusbar">
        <div className="ide-status-left">
          <GitBranch size={10} />
          <span>main*</span>
          <span style={{ marginLeft: '10px', opacity: 0.7 }}>Syncing...</span>
        </div>
        <div className="ide-status-right">
          <span>Ln 10, Col 2</span>
          <span>UTF-8</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
};

const PROJECTS_DATA = [
  {
    id: "fifa-world-cup",
    title: "FIFA World Cup 2026 Hub",
    subtitle: "A premium, real-time sports web application",
    category: "Web Development",
    filterTag: "web",
    image: "/assets/img/portfolio/fifa_new.png",
    duration: "June 2026",
    description: [
      "The FIFA World Cup 2026 Hub is a premium, real-time sports web application designed to be the ultimate companion for football fans worldwide. Built using React and Vite, the platform features a visually stunning, responsive glassmorphism UI with a highly curated dark mode, vibrant neon accents, and smooth micro-animations. At its core, the application boasts a sophisticated automated match state system that seamlessly transitions fixtures from 'Scheduled' to 'Live' to 'Finished' based on real-time data.",
      "During live matches, the interface dynamically updates to display interactive scoreboards and precision match clocks, delivering an immersive viewing experience without the need for manual page refreshes. The platform also features automated group stage standings, dynamic knockout brackets, and a comprehensive, region-specific streaming directory that filters free and paid broadcast options across the globe.",
      "Finally, the project integrates hidden interactive elements such as a stadium crowd chant Easter egg showcasing a deep attention to detail. This application demonstrates strong proficiency in modern frontend architecture, state management, UI/UX design principles, and real-time data handling."
    ],
    links: {
      github: "https://github.com/MusaibMikdad/World-Cup-2026",
      live: "https://world-cup-2026-vert-ten.vercel.app/"
    }
  },
  {
    id: "undergrad-thesis",
    title: "Undergrad Thesis",
    subtitle: "Enhancing Infrastructure Detection Using Drone Imagery",
    category: "AI & Machine Learning",
    filterTag: "research",
    image: "/assets/img/portfolio/research.jpg",
    duration: "July, 2023 - July, 2024",
    representing: "Brac University",
    description: [
      "Developed and compared advanced machine learning models (YOLOv5, YOLOv7, YOLOv8, and a custom model) to enhance the accuracy of infrastructure detection using drone imagery for urban planning in Bangladesh.",
      "Created a specialized dataset tailored to Bangladesh's urban features, enabling high-precision model training and testing for diverse urban environments and illumination conditions.",
      "Demonstrated the effectiveness of temporal data for monitoring infrastructural changes over time, contributing to more efficient and sustainable urban design predictions and planning strategies."
    ],
    links: {
      ieee: "https://ieeexplore.ieee.org/document/11025116"
    }
  },
  {
    id: "bracu-knowledge-nexus",
    title: "Bracu Knowledge Nexus",
    subtitle: "Full-Stack course review & skills portal",
    category: "Web Development",
    filterTag: "web",
    image: "/assets/img/portfolio/nexus.png",
    duration: "August, 2023 - September, 2023",
    description: [
      "Developed Bracu Knowledge Nexus a feature-rich web platform built using the MERN stack (MongoDB, Express.js, React, Node.js) to provide an engaging and interactive learning experience for students. The platform empowers students by enabling them to post detailed course reviews, share insights, and exchange feedback about courses they have taken.",
      "In addition to reviews, the platform incorporates tools for users to track their skill development through curated resources and progress tracking mechanisms. It also offers an extensive database of course-specific information, helping users make informed decisions about their academic growth.",
      "To ensure a seamless user experience, the front-end interface was developed with React, focusing on responsiveness and intuitive navigation. On the back-end, Node.js and Express.js were used to create a secure and scalable environment. MongoDB was utilized to handle dynamic and complex data structures, ensuring optimal performance."
    ],
    links: {
      live: "https://knowledge-nexus-lime.vercel.app/"
    }
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe (NestJS & React)",
    subtitle: "Fully functional game with Minimax AI & multiplayer modes",
    category: "Web Development",
    filterTag: "web",
    image: "/assets/img/portfolio/tic.png",
    duration: "October, 2024 - November, 2024",
    description: [
      "Developed a fully functional Tic Tac Toe game using React for the frontend and NestJS for the backend. It features two game modes: single-player with an AI opponent powered by the Minimax algorithm, and multiplayer mode for playing with friends.",
      "The game includes smooth fade-in and fade-out transitions, real-time match status updates, and celebratory animations with sound effects for game results like winning, losing, or a draw. Users can easily reset the game, replay, or navigate back to the main menu.",
      "This project helped deepen understanding of React and NestJS, while also enhancing ability to implement AI for challenging gameplay. Focus was placed on creating a responsive, user-friendly interface with polished functionality to deliver a seamless user experience."
    ],
    links: {
      github: "https://github.com/MusaibMikdad/Prodigy_WD_3",
      live: "https://tictactoe-ruddy-one.vercel.app/"
    }
  },
  {
    id: "paper-writing",
    title: "Paper Writing (Springer Nature)",
    subtitle: "Pattern Recognition in Disaster Response leveraging Twitter Analysis",
    category: "AI & Machine Learning",
    filterTag: "research",
    image: "/assets/img/portfolio/pattern.png",
    duration: "October, 2023 - December, 2023",
    representing: "Brac University",
    description: [
      "This study introduces a novel approach to detecting disaster-related tweets by leveraging advanced machine learning techniques, including Long Short-Term Memory (LSTM) networks and Natural Language Processing (NLP) models.",
      "These models are crucial for analyzing social media activity during crises, identifying patterns in tweets, and extracting key phrases or keywords indicative of disasters. By enabling rapid and accurate analysis of unstructured social media data, this approach addresses the urgent need for quick decision-making in crisis situations.",
      "The integration of these machine learning models demonstrates the potential to significantly enhance disaster response activities. The proposed framework highlights the ability of machine learning to extract actionable insights from social media, introducing scalable options for emergency management systems."
    ],
    links: {
      springer: "https://link.springer.com/chapter/10.1007/978-981-96-1758-6_4"
    }
  },
  {
    id: "paper-work",
    title: "Paper Work (SentimentScope)",
    subtitle: "Deciphering the Spectrum of Human Emotions with NLP",
    category: "AI & Machine Learning",
    filterTag: "research",
    image: "/assets/img/portfolio/ana.png",
    duration: "October, 2023 - November, 2023",
    representing: "Brac University",
    description: [
      "This study presents an innovative Natural Language Processing (NLP) algorithm designed to detect and classify emotions within text accurately and efficiently. By combining the probabilistic prediction capabilities of Naive Bayes with the similarity-based classification approach of k-Nearest Neighbors (kNN), the algorithm achieves a comprehensive analysis of emotional nuances in large datasets.",
      "The algorithm's performance is rigorously evaluated using a confusion matrix to ensure high accuracy across various emotion types, delivering precise and actionable insights.",
      "The model's adaptability to the dynamic nature of online communication makes it a valuable tool for applications such as business sentiment analysis, mental health monitoring, and understanding emotional context in digital interactions."
    ]
  },
  {
    id: "flight-reservation",
    title: "Flight Reservation System",
    subtitle: "A comprehensive booking panel built with PHP",
    category: "Web Development",
    filterTag: "web",
    image: "/assets/img/portfolio/Flight.png",
    duration: "November, 2022 - December, 2022",
    description: [
      "Developed a comprehensive Flight Reservation System using PHP, designed to provide a seamless user experience for searching, booking, and managing flight reservations. The project incorporated a user-friendly interface that allows customers to browse available flights, select itineraries, and make bookings.",
      "On the backend, a secure and robust architecture was implemented to handle complex functionalities such as data validation, transaction management, and real-time availability updates. Advanced features such as user account management, booking history, and cancellation options were integrated.",
      "The system ensured secure transactions by employing appropriate encryption and validation mechanisms, prioritizing user data protection and adherence to web security standards."
    ],
    links: {
      github: "https://github.com/MusaibMikdad/Flight-Reservation-System"
    }
  },
  {
    id: "academic-project",
    title: "Fire & Smoke Detector",
    subtitle: "Arduino-powered environmental monitoring system",
    category: "Academic & Hardware",
    filterTag: "academic",
    image: "/assets/img/portfolio/fire.png",
    duration: "August, 2023 - September, 2023",
    representing: "Brac University",
    description: [
      "Designed a cutting-edge fire and smoke detection system utilizing Arduino and specialized sensors to ensure constant vigilance against potential fire threats.",
      "The system integrates a flame sensor and an MQ-2 Gas & Smoke sensor to monitor the environment continuously for signs of fire. Upon detecting smoke or flames, the system promptly activates an alarm to alert occupants and sends mobile notifications via a Bluetooth module.",
      "This comprehensive approach not only enhances safety but also demonstrates the potential of modern technology to address critical challenges in fire hazard prevention effectively."
    ],
    links: {
      gdrive: "https://docs.google.com/document/d/1Y79jFDNZWWdcgW3Im-yTFfdiDedTu0s3diJTn8FawOk/edit?usp=sharing"
    }
  },
  {
    id: "stopwatch",
    title: "Dynamic StopWatch",
    subtitle: "Mobile responsive timer with lap tracking",
    category: "Web Development",
    filterTag: "web",
    image: "/assets/img/portfolio/stop.png",
    duration: "October, 2024 - October, 2024",
    description: [
      "Designed and developed a dynamic StopWatch application using HTML, CSS, and JavaScript, focusing on creating a responsive and user-friendly interface.",
      "The stopwatch features seamless transitions between start, pause, and reset actions, ensuring smooth and intuitive functionality. Users can also track individual lap times, with the ability to reset specific laps without affecting the overall timer.",
      "The design incorporates subtle animations, such as fade-in and fade-out effects, to enhance the visual appeal and overall user experience, ensuring optimal performance and usability across all devices."
    ],
    links: {
      github: "https://github.com/MusaibMikdad/PRODIGY_WD_02",
      live: "https://musaibmikdad.github.io/PRODIGY_WD_02/Stopwatch/stopwatch.html"
    }
  }
];

const SKILLS_DATA = [
  {
    category: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-[#3D81E3]" />,
    items: [
      { name: "Computer Vision", level: 90 },
      { name: "Natural Language Processing (NLP)", level: 85 },
      { name: "Deep Learning Optimization", level: 80 },
      { name: "YOLO (v5, v7, v8) models", level: 85 },
      { name: "LSTM Networks", level: 80 }
    ]
  },
  {
    category: "Full-Stack Web Development",
    icon: <Code className="w-5 h-5 text-[#3D81E3]" />,
    items: [
      { name: "React / Vite / Next.js", level: 90 },
      { name: "Node.js / Express.js / NestJS", level: 85 },
      { name: "MongoDB / SQL / PHP", level: 80 },
      { name: "Vanilla CSS & JavaScript", level: 95 }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: <Layers className="w-5 h-5 text-[#3D81E3]" />,
    items: [
      { name: "Python (NumPy, PyTorch)", level: 85 },
      { name: "Arduino & IoT Hardware", level: 80 },
      { name: "Git & Version Control", level: 90 },
      { name: "Vercel / Netlify Deployment", level: 85 }
    ]
  }
];

const EDUCATION_DATA = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "BRAC University",
    date: "2020 - 2024",
    description: "Focus on Artificial Intelligence, Machine Learning, NLP, Data Science, and Computer Vision. Completed undergrad thesis on drone imagery and pattern recognition publications."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Ishwardi Government College",
    date: "2017 - 2019",
    description: "Science major. Developed foundational logic, mathematics, and programming capabilities."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ikhshu Goveshwana High School",
    date: "2015 - 2017",
    description: "General Science. Excelled in mathematics and science topics."
  }
];

const AmbientGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div 
      animate={{ 
        x: [0, 80, -40, 0],
        y: [0, -60, 40, 0],
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full blur-[130px]"
      style={{ background: 'radial-gradient(circle, rgba(61,129,227,0.15) 0%, transparent 80%)' }}
    />
    <motion.div 
      animate={{ 
        x: [0, -60, 80, 0],
        y: [0, 50, -70, 0],
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: 2
      }}
      className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px]"
      style={{ background: 'radial-gradient(circle, rgba(158,206,106,0.08) 0%, transparent 80%)' }}
    />
  </div>
);

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const EXPERIENCE_DATA = [
  {
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    location: "Mumbai, Maharashtra (Remote)",
    date: "October, 2024 - November, 2024",
    description: "Created interactive web applications with React, focusing on responsive design, dynamic state management, smooth transitions, and high-performance UI optimization."
  }
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('home');
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Scroll Spy
      const sections = ['home', 'about', 'skills', 'portfolio', 'timeline', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);

    fetch("https://formsubmit.co/ajax/musaib19160@gmail.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: formData.name,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message
      })
    })
    .then(response => response.json())
    .then(data => {
      setFormLoading(false);
      if (data.success === "true" || data.success === true) {
        setFormSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormSuccess(false), 5000);
      } else {
        alert("Failed to send message: " + (data.message || "Unknown error"));
      }
    })
    .catch(error => {
      setFormLoading(false);
      console.error("Error submitting form:", error);
      alert("An error occurred while sending the message. Please try again.");
    });
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = id === 'home' ? 0 : 80;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: 'smooth'
      });
      setActiveTab(id);
    }
  };

  const filteredProjects = portfolioFilter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.filterTag === portfolioFilter);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060609] dot-grid text-white">
      
      {/* Background static ambient lights */}
      <div className="ambient-circle absolute" style={{ top: '5%', left: '10%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(61, 129, 227, 0.15) 0%, transparent 70%)' }} />
      <div className="ambient-circle absolute" style={{ top: '35%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)' }} />
      <div className="ambient-circle absolute" style={{ bottom: '15%', left: '15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, transparent 70%)' }} />

      {/* Guide lines (hidden on mobile) */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/5 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/5 z-[5]" />

      {/* Global SVG Noise Filter */}
      <svg className="hidden">
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* SECTION 1 - NAVBAR */}
      <motion.nav 
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all ${scrollY > 50 ? 'bg-[#060609]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="cursor-pointer flex items-center" onClick={() => scrollToSection('home')}>
            <LogoMark className="w-8 h-8" />
          </div>

          {/* Nav links */}
          <div className="hidden md:flex nav-links-container">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About me', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Timeline', id: 'timeline' },
              { label: 'Contact', id: 'contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`nav-item-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Removed duplicate Download CV from header to resolve user request */}

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 w-full bg-black/95 border-b border-white/10 z-40 p-6 flex flex-col gap-4 md:hidden"
          >
            {[
              { label: 'Home', id: 'home' },
              { label: 'About me', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Timeline', id: 'timeline' },
              { label: 'Contact', id: 'contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  scrollToSection(tab.id);
                  setMobileMenuOpen(false);
                }}
                className="text-white/70 text-left text-base font-medium py-2 bg-transparent border-none cursor-pointer"
              >
                {tab.label}
              </button>
            ))}
            <DownloadButton 
              label="Download CV" 
              onClick={() => {
                window.open("/assets/Resume Of Musaib Ibn Habib Mikdad.pdf", "_blank");
                setMobileMenuOpen(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 2 - HERO (Rebuilt to Split Grid visual layout) */}
      <section id="home" className="pt-36 md:pt-48 pb-32 relative z-10 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="hero-split-grid">
            
            {/* Left Content column */}
            <motion.div 
              className="flex flex-col items-start text-left"
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={heroItemVariants}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold text-[#3D81E3] mb-8"
              >
                <span className="pulse-dot" />
                <span>Available for Development & Research</span>
              </motion.div>

              <motion.h1 
                variants={heroItemVariants}
                className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                Musaib Ibn Habib Mikdad <br />
                <span className="animate-shiny inline-block mt-3" style={gradientStyle}>
                  Web & AI Engineer
                </span>
              </motion.h1>

              <motion.div 
                variants={heroItemVariants}
                className="mt-8 text-xs font-semibold font-mono text-white/50"
              >
                {"{ "}
                <span className="text-[#3D81E3]">
                  Python, PyTorch, React, Node.js, NestJS, MongoDB, JavaScript, CSS
                </span>
                {" }"}
              </motion.div>

              <motion.p 
                variants={heroItemVariants}
                className="mt-8 text-white/70 max-w-lg text-sm md:text-base leading-[1.6]"
              >
                Specializing in bridging advanced machine learning models with responsive full-stack applications. Graduated from BRAC University, with publications in NLP and computer vision infrastructure analysis.
              </motion.p>

              <motion.div 
                variants={heroItemVariants}
                className="mt-12 flex flex-row items-center gap-4"
              >
                <DownloadButton 
                  label="Download CV" 
                  onClick={() => window.open("/assets/Resume Of Musaib Ibn Habib Mikdad.pdf", "_blank")} 
                />
              </motion.div>
            </motion.div>

            {/* Right Terminal Column with floating elements */}
            <div className="relative flex justify-center items-center" style={{ minHeight: '380px' }}>
              
              {/* Floating Badges - positioned outside terminal bounds */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 tech-badge text-xs font-semibold text-[#00d2ff]"
                style={{ top: '-24px', left: '-20px' }}
              >
                <Code className="w-3.5 h-3.5" />
                <span>React 18</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-20 tech-badge text-xs font-semibold text-[#ff9e64]"
                style={{ bottom: '-20px', left: '-10px' }}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>PyTorch</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute z-20 tech-badge text-xs font-semibold text-[#9ece6a]"
                style={{ top: '40%', right: '-30px' }}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>NestJS</span>
              </motion.div>

              {/* Central code dashboard terminal mockup */}
              <CodeTerminalMock />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 - ABOUT ME (Modern Bento Grid Redesign) */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="about" 
        className="py-28 relative overflow-hidden"
      >
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(circle, #3D81E3 0%, transparent 70%)' }} />
        
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionEyebrow label="Overview" tag="biography" />
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
              About <span style={{ color: '#3D81E3' }}>Me</span>
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-lg mx-auto">
              A passionate developer and researcher building at the intersection of AI and web technologies.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="about-bento-grid">
            
            {/* Large Portrait Card - spans 2 rows */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="about-bento-portrait"
            >
              <div className="about-bento-portrait-img">
                <img src="/assets/img/attitude.jpg" alt="Musaib Portrait" />
                <div className="about-bento-portrait-overlay">
                  <div>
                    <h3 className="text-lg font-bold text-white">Musaib Ibn Habib Mikdad</h3>
                    <p className="text-sm text-white/70 mt-1">Web Developer & AI Researcher</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Text Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="about-bento-card about-bento-bio"
            >
              <div className="flex gap-4 items-start">
                <div className="about-bento-card-icon flex-shrink-0">
                  <GraduationCap size={20} style={{ color: '#3D81E3' }} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-white">Education & Background</h3>
                  <p className="text-sm text-white/60 leading-[1.6] mt-2">
                    BSc in Computer Science & Engineering from BRAC University, Dhaka. Focused on artificial intelligence, 
                    machine learning, and computer vision systems during my academic journey.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="about-bento-card about-bento-research"
            >
              <div className="flex gap-4 items-start">
                <div className="about-bento-card-icon flex-shrink-0">
                  <FileText size={20} style={{ color: '#9ece6a' }} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-white">Published Researcher</h3>
                  <p className="text-sm text-white/60 leading-[1.6] mt-2">
                    Co-authored two research papers published in IEEE and Springer Nature on NLP-based disaster recognition 
                    and drone imagery infrastructure detection.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Row - spans full width bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="about-bento-stats"
            >
              <div className="about-stat-item">
                <span className="about-stat-number">2</span>
                <span className="about-stat-label">Research Papers</span>
              </div>
              <div className="about-stat-divider" />
              <div className="about-stat-item">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Projects Built</span>
              </div>
              <div className="about-stat-divider" />
              <div className="about-stat-item">
                <span className="about-stat-number">5+</span>
                <span className="about-stat-label">Technologies</span>
              </div>
              <div className="about-stat-divider" />
              <div className="about-stat-item">
                <span className="about-stat-number">BSc</span>
                <span className="about-stat-label">BRAC University</span>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* SECTION 5 - SKILLS (Framer Motion scroll reveal) */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="skills" 
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-title-wrapper text-center">
            <SectionEyebrow label="Documentation" tag="skills" />
            <h2 className="section-title">Technical Expertise</h2>
            <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">Foundational libraries, languages, and hardware components I work with.</p>
          </div>

          <div className="skills-columns mt-12">
            {SKILLS_DATA.map((group, idx) => (
              <div key={idx} className="liquid-glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  {group.icon}
                  <h3 className="text-sm font-semibold text-white/90">{group.category}</h3>
                </div>
                <div className="flex flex-col gap-5">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="flex flex-col">
                      <div className="flex justify-between text-xs font-semibold text-white/80">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="skill-bar-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 6 - PORTFOLIO GRID (Framer Motion scroll reveal) */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="portfolio" 
        className="py-24 bg-black/10"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="section-title-wrapper text-center">
            <SectionEyebrow label="Works" tag="portfolio" />
            <h2 className="section-title">My Portfolio</h2>
            <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">Explore AI/ML papers, hardware modules, and full-stack software applications.</p>
          </div>

          {/* Filter tabs */}
          <div className="filter-container">
            {[
              { label: 'All Projects', filter: 'all' },
              { label: 'Web Development', filter: 'web' },
              { label: 'Research Papers', filter: 'research' },
              { label: 'Academic & Hardware', filter: 'academic' }
            ].map((tab) => (
              <button
                key={tab.filter}
                onClick={() => setPortfolioFilter(tab.filter)}
                className={`filter-btn ${portfolioFilter === tab.filter ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="project-card"
                >
                  <div className="project-card-image">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>
                  <div className="project-card-body">
                    <span className="project-card-cat">{project.category}</span>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.subtitle}</p>
                    <div className="project-card-footer">
                      <span>View details</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 7 - TIMELINE (Framer Motion scroll reveal) */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="timeline" 
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-title-wrapper text-center">
            <SectionEyebrow label="Roadmap" tag="career" />
            <h2 className="section-title">Academic & Professional Timeline</h2>
          </div>

          <div className="timeline-columns mt-12">
            
            {/* Experience list */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#3D81E3]" />
                <span>Work Experience</span>
              </h3>
              <div className="timeline-list">
                {EXPERIENCE_DATA.map((exp, idx) => (
                  <div key={idx} className="timeline-card-wrapper">
                    <div className="timeline-dot" />
                    <div className="timeline-card liquid-glass">
                      <div className="timeline-card-meta">
                        <span>{exp.date}</span>
                        <span>{exp.location}</span>
                      </div>
                      <h4 className="timeline-card-title">{exp.role}</h4>
                      <h5 className="timeline-card-subtitle">{exp.company}</h5>
                      <p className="timeline-card-desc">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education list */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#3D81E3]" />
                <span>Academic Path</span>
              </h3>
              <div className="timeline-list">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="timeline-card-wrapper">
                    <div className="timeline-dot" />
                    <div className="timeline-card liquid-glass">
                      <div className="timeline-card-meta">
                        <span>{edu.date}</span>
                        <span>Studies</span>
                      </div>
                      <h4 className="timeline-card-title">{edu.degree}</h4>
                      <h5 className="timeline-card-subtitle">{edu.institution}</h5>
                      <p className="timeline-card-desc">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* SECTION 8 - CONTACT FORM (Redesigned Split Layout) */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="contact" 
        className="py-28 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, #3D81E3 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-6">
          <div className="contact-split-grid">
            
            {/* Left Column: Spaced sidebar info */}
            <div className="contact-info-sidebar">
              <SectionEyebrow label="Get In Touch" tag="collaboration" />
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-3 text-white leading-tight">
                Let's work <br /><span style={{ color: '#3D81E3' }}>together.</span>
              </h2>
              <p className="text-white/60 text-sm leading-[1.6] mb-8">
                Treating complex challenges as opportunities. Send a message to discuss your next full-stack project or AI research initiative.
              </p>

              {/* Information Cards */}
              <a href="mailto:musaib19160@gmail.com" className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="contact-info-text-wrapper">
                  <span className="contact-info-title">Email Me</span>
                  <span className="contact-info-val">musaib19160@gmail.com</span>
                </div>
              </a>

              <a href="tel:+8801701051384" className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="contact-info-text-wrapper">
                  <span className="contact-info-title">Call Me</span>
                  <span className="contact-info-val">+880 1701-051384</span>
                </div>
              </a>

              <div className="contact-info-card" style={{ cursor: 'default' }}>
                <div className="contact-info-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="contact-info-text-wrapper">
                  <span className="contact-info-title">Location</span>
                  <span className="contact-info-val">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="contact-form-panel">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                
                <div className="contact-form-grid">
                  <div className="contact-form-field">
                    <label className="contact-label" htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. John" 
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-label" htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. john@example.com" 
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-field">
                  <label className="contact-label" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleFormChange}
                    placeholder="e.g. Project Consultation" 
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-field">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Write your message details here..." 
                    className="contact-input contact-textarea"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formLoading}
                  className="contact-submit-btn w-full mt-2"
                >
                  {formLoading ? "Sending inquiry..." : "Submit Message"}
                </button>

                <AnimatePresence>
                  {formSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-xs text-[#00d2ff] bg-[#00d2ff]/5 border border-[#00d2ff]/20 p-3 rounded mt-4 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Inquiry sent successfully! I will get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

          </div>
        </div>
      </motion.section>

      {/* REDESIGNED FOOTER */}
      <footer className="footer-redesign">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="footer-top-row">
            
            {/* Brand Column */}
            <div className="footer-brand-col">
              <span className="footer-brand-title">Musaib Ibn Habib Mikdad</span>
              <p className="footer-brand-desc">
                Web & AI Engineer. Bridging advanced machine learning models with responsive full-stack applications.
              </p>
              
              <div className="footer-social-icons">
                <a href="https://github.com/MusaibMikdad" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/musaib-ibn-habib-mikdad-316336205/" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <Linkedin size={16} />
                </a>
                <a href="https://www.facebook.com/musaibmikdad.19160" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com/musaibmikdad/" target="_blank" rel="noreferrer" className="footer-social-btn">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="footer-nav-col">
              <span className="footer-nav-title">Links</span>
              <div className="footer-links-grid">
                <button onClick={() => scrollToSection('home')} className="footer-nav-link">Home</button>
                <button onClick={() => scrollToSection('about')} className="footer-nav-link">About</button>
                <button onClick={() => scrollToSection('skills')} className="footer-nav-link">Skills</button>
                <button onClick={() => scrollToSection('portfolio')} className="footer-nav-link">Projects</button>
                <button onClick={() => scrollToSection('timeline')} className="footer-nav-link">Timeline</button>
                <button onClick={() => scrollToSection('contact')} className="footer-nav-link">Contact</button>
              </div>
            </div>

          </div>

          <div className="footer-bottom-row">
            <span>&copy; {new Date().getFullYear()} Musaib. All rights reserved.</span>
            <span className="text-white/20">Designed &amp; Developed with Care</span>
          </div>

        </div>
      </footer>

      {/* PROJECT DETAILED MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="modal-content-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <X size={14} />
              </button>

              <div className="modal-scrollable">
                <div className="modal-image-wrapper">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                  />
                </div>
                
                <span className="modal-project-cat">{selectedProject.category}</span>
                <h3 className="modal-project-title">{selectedProject.title}</h3>
                <p className="modal-project-sub">{selectedProject.duration}</p>

                <div className="mt-4">
                  {selectedProject.description.map((para, idx) => (
                    <p key={idx} className="modal-paragraph">{para}</p>
                  ))}
                </div>

                <div className="modal-links-row">
                  {selectedProject.links?.github && (
                    <a 
                      href={selectedProject.links.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="modal-link-btn modal-link-btn-secondary"
                    >
                      <span>Repository</span>
                    </a>
                  )}
                  {selectedProject.links?.live && (
                    <a 
                      href={selectedProject.links.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="modal-link-btn modal-link-btn-primary"
                    >
                      <span>Launch App</span>
                    </a>
                  )}
                  {selectedProject.links?.ieee && (
                    <a 
                      href={selectedProject.links.ieee} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="modal-link-btn modal-link-btn-primary"
                    >
                      <span>IEEE Paper</span>
                    </a>
                  )}
                  {selectedProject.links?.springer && (
                    <a 
                      href={selectedProject.links.springer} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="modal-link-btn modal-link-btn-primary"
                    >
                      <span>Springer Paper</span>
                    </a>
                  )}
                  {selectedProject.links?.gdrive && (
                    <a 
                      href={selectedProject.links.gdrive} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="modal-link-btn modal-link-btn-secondary"
                    >
                      <span>Project Doc</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
