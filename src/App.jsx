import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  MessageSquare
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


const PROJECTS_DATA = [
  {
    id: "fifa-world-cup",
    title: "FIFA World Cup 2026 Hub",
    subtitle: "A premium, real-time sports web application",
    category: "Web Development",
    filterTag: "web",
    image: "/assets/img/portfolio/fifa_new.png",
    duration: "June 2026 - June 2026",
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
      "In addition to reviews, the platform incorporates tools for users to track their skill development through curated resources and progress tracking mechanisms. It also offers an extensive database of course-specific information, including prerequisites, key takeaways, and recommendations, helping users make informed decisions about their academic growth.",
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
    icon: <Cpu size={24} style={{ color: 'var(--primary-light)' }} />,
    items: [
      { name: "Computer Vision", level: 90 },
      { name: "Natural Language Processing (NLP)", level: 85 },
      { name: "Deep Learning Optimization", level: 80 },
      { name: "YOLO (v5, v7, v8) models", level: 85 },
      { name: "Reinforcement Learning", level: 75 },
      { name: "LSTM Networks", level: 80 }
    ]
  },
  {
    category: "Full-Stack Web Development",
    icon: <Code size={24} style={{ color: 'var(--secondary-light)' }} />,
    items: [
      { name: "React / Vite / Next.js", level: 90 },
      { name: "Node.js / Express.js", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "MongoDB / SQL", level: 85 },
      { name: "PHP", level: 75 },
      { name: "Vanilla CSS & JavaScript", level: 95 }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: <Layers size={24} style={{ color: 'var(--accent)' }} />,
    items: [
      { name: "Python (NumPy, PyTorch)", level: 85 },
      { name: "Arduino & IoT Hardware", level: 80 },
      { name: "Git & Version Control", level: 90 },
      { name: "Vercel / Netlify Deployment", level: 85 },
      { name: "RESTful API Integration", level: 90 },
      { name: "Data Science & Analytics", level: 80 }
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

const EXPERIENCE_DATA = [
  {
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    location: "Mumbai, Maharashtra (Remote)",
    date: "October, 2024 - November, 2024",
    description: "Created interactive web applications with React, focusing on responsive design, dynamic state management, smooth transitions, and high-performance UI optimization."
  }
];

const TYPED_ITEMS = [
  "Hello World!",
  "I'm Musaib Ibn Habib Mikdad",
  "A Web Developer",
  "An AI & ML Researcher",
  "A Problem Solver"
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [itemIndex, setItemIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Scroll detection for active navigation highlight and navbar blur
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'portfolio', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text Typing Effect
  useEffect(() => {
    let timer;
    const currentWord = TYPED_ITEMS[itemIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before delete
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setItemIndex(prev => (prev + 1) % TYPED_ITEMS.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, itemIndex]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSuccess(false), 5000); // Dismiss success
    }, 1500);
  };

  const filteredProjects = portfolioFilter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.filterTag === portfolioFilter);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveTab(id);
    }
  };

  return (
    <div className="app-container">
      
      {/* Background Decorative Ambient Lights */}
      <div className="ambient-glow" style={{ top: '10%', left: '-10%', opacity: 0.4 }} />
      <div className="ambient-glow-secondary" style={{ top: '40%', right: '-10%', opacity: 0.3 }} />
      <div className="ambient-glow animate-pulse-slow" style={{ bottom: '10%', left: '20%', opacity: 0.2 }} />

      {/* HEADER & NAVBAR */}
      <header className={scrollY > 50 ? 'navbar navbar-scrolled' : 'navbar navbar-default'}>
        <div className="navbar-container">
          <div className="logo-container" onClick={() => scrollToSection('home')}>
            <div className="logo-badge">M</div>
            <span className="logo-text">MIKDAD</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-links">
            {['home', 'about', 'skills', 'education', 'experience', 'portfolio', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={activeTab === tab ? 'nav-link nav-link-active' : 'nav-link'}
              >
                {activeTab === tab && (
                  <motion.span 
                    layoutId="activeNavIndicator" 
                    className="active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-toggle">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu-panel"
          >
            {['home', 'about', 'skills', 'education', 'experience', 'portfolio', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={activeTab === tab ? 'mobile-menu-link mobile-menu-link-active' : 'mobile-menu-link'}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '24px', position: 'relative' }}
          >
            <div className="hero-welcome-badge">
              Welcome to my portfolio
            </div>
          </motion.div>

          <h1 className="hero-title">
            <span className="hero-subtitle">
              Discover Intellect & Code
            </span>
            <div className="typing-container">
              <span className="text-gradient">
                {typedText}
                <span className="cursor">|</span>
              </span>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-description"
          >
            Transforming computer science concepts into robust, user-centric software. Deeply exploring Artificial Intelligence, Machine Learning, and Full-Stack Engineering.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hero-buttons"
          >
            <button onClick={() => scrollToSection('portfolio')} className="btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              <span>Connect with Me</span>
            </button>
            <a 
              href="https://calendar.app.google/MPQtLFKRf1ABMVaz8" 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary"
              style={{ borderColor: 'var(--secondary)', color: 'var(--secondary-light)' }}
            >
              <Calendar size={16} />
              <span>Book an Appointment</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Dedicated researcher, engineer, and lifelong learner pushing boundaries in AI and web tech.</p>
          </div>

          <div className="about-grid">
            
            {/* Left Column: Image Card, Social Links, Resume Download */}
            <div className="about-left">
              <div className="profile-container">
                <div className="profile-glow-ring" />
                <div className="profile-glow-border" />
                
                <div className="profile-img-wrapper">
                  <a href="/assets/img/attitude.jpg" target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%', cursor: 'pointer' }}>
                    <img 
                      src="/assets/img/attitude.jpg" 
                      alt="Musaib Ibn Habib Mikdad" 
                      className="profile-img"
                    />
                  </a>
                  <div className="profile-overlay">
                    <p className="profile-name">Musaib Ibn Habib Mikdad</p>
                    <p className="profile-role">Web Developer & AI Researcher</p>
                  </div>
                </div>
              </div>

              {/* Glowing Social Icons */}
              <div className="social-icons">
                {[
                  { icon: <Facebook size={20} />, url: "https://www.facebook.com/musaibmikdad.19160" },
                  { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/musaib-ibn-habib-mikdad-316336205/" },
                  { icon: <Instagram size={20} />, url: "https://www.instagram.com/musaibmikdad/" },
                  { icon: <Github size={20} />, url: "https://github.com/MusaibMikdad" }
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-icon-btn"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Resume Buttons */}
              <div className="resume-card glass-panel">
                <p className="resume-text">Download or Preview my comprehensive Resume:</p>
                <div className="resume-buttons-row">
                  <a 
                    href="/assets/Resume Of Musaib Ibn Habib Mikdad.pdf" 
                    target="_blank" 
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center', padding: '10px' }}
                  >
                    <FileText size={16} />
                    <span>View Resume</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Bio paragraphs */}
            <div className="about-right">
              <h3 className="about-bio-title">
                <span className="title-line" />
                Interactive Bio
              </h3>
              
              <p className="about-paragraph">
                As a dedicated Computer Science and Engineering student, my focus lies in the rapidly advancing domains of **Artificial Intelligence**, **Machine Learning**, **Data Science**, and their real-world applications. I am particularly passionate about computer vision, deep learning optimization, reinforcement learning, and integrated security, areas in which I continue to expand my expertise through hands-on projects and academic exploration.
              </p>

              <div className="about-metrics">
                <div className="metric-card">
                  <p className="metric-tag-purple">Publications</p>
                  <p className="metric-value">2 Research Papers</p>
                  <p className="metric-desc">Published in IEEE & Springer Nature</p>
                </div>
                <div className="metric-card">
                  <p className="metric-tag-cyan">Experience</p>
                  <p className="metric-value">Web Dev Intern</p>
                  <p className="metric-desc">Prodigy InfoTech Oct - Nov 2024</p>
                </div>
              </div>

              <p className="about-paragraph">
                Alongside research interests, I actively build diverse development projects that strengthen my problem-solving abilities and technical versatility. From building interactive applications like a full-stack **Tic Tac Toe game** to developing comprehensive systems such as the **Bracu Knowledge Nexus**, I enjoy transforming complex ideas into impactful, user-centered solutions. Driven by curiosity, innovation, and continuous learning, my goal is to create technologies that address real-world challenges.
              </p>

              <div className="about-contact-list">
                <div className="contact-item-row">
                  <span className="contact-item-icon"><Mail size={16} style={{ color: 'var(--primary-light)' }} /></span>
                  <span>musaib19160@gmail.com</span>
                </div>
                <div className="contact-item-row">
                  <span className="contact-item-icon"><Phone size={16} style={{ color: 'var(--secondary-light)' }} /></span>
                  <span>+8801701051384</span>
                </div>
                <div className="contact-item-row">
                  <span className="contact-item-icon"><MapPin size={16} style={{ color: 'var(--accent)' }} /></span>
                  <span>Mohammadpur, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(10, 7, 21, 0.4)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">A review of tools, programming languages, and specialized domains I work with.</p>
          </div>

          <div className="skills-grid">
            {SKILLS_DATA.map((skillGroup, groupIdx) => (
              <div key={groupIdx} className="skill-card glass-panel">
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    {skillGroup.icon}
                  </div>
                  <h3 className="skill-group-title">{skillGroup.category}</h3>
                </div>

                <div className="skill-items">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-item">
                      <div className="skill-name-percent">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.08 }}
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
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic milestones outlining research, grades, and foundations in CSE.</p>
          </div>

          <div className="timeline">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="timeline-item"
              >
                <div className="timeline-dot" />
                <div className="timeline-content glass-panel">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="timeline-date" style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                      <Calendar size={14} />
                      {edu.date}
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(168, 85, 247, 0.12)', color: 'var(--primary-light)', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '4px 10px', borderRadius: '50px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <GraduationCap size={12} />
                      Degree Earned
                    </span>
                  </div>
                  <h3 className="timeline-title" style={{ color: '#fff' }}>{edu.degree}</h3>
                  <p className="timeline-org" style={{ margin: '4px 0 12px 0' }}>{edu.institution}</p>
                  <p className="about-paragraph" style={{ fontSize: '0.9rem' }}>{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(10, 7, 21, 0.4)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">Industry experience translating technical code skills into real-world values.</p>
          </div>

          <div className="timeline">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="timeline-item"
              >
                <div className="timeline-dot" style={{ borderColor: 'var(--secondary)' }} />
                <div className="timeline-content glass-panel">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="timeline-date" style={{ color: 'var(--secondary-light)', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                      <Calendar size={14} />
                      {exp.date}
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(6, 182, 212, 0.12)', color: 'var(--secondary-light)', border: '1px solid rgba(6, 182, 212, 0.2)', padding: '4px 10px', borderRadius: '50px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Briefcase size={12} />
                      Internship
                    </span>
                  </div>
                  <h3 className="timeline-title" style={{ color: '#fff' }}>{exp.role}</h3>
                  <p className="timeline-org" style={{ margin: '4px 0 12px 0' }}>{exp.company} — <span style={{ fontSize: '0.85rem', fontWeight: 300 }}>{exp.location}</span></p>
                  <p className="about-paragraph" style={{ fontSize: '0.9rem' }}>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">My Portfolio</h2>
            <p className="section-subtitle">Explore academic research, full-stack applications, and software engineering projects.</p>
          </div>

          {/* Portfolio Filter Tabs */}
          <div className="filter-tabs">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Development' },
              { id: 'research', label: 'Research Papers' },
              { id: 'academic', label: 'Academic & Hardware' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setPortfolioFilter(filter.id)}
                className={`filter-tab-btn ${portfolioFilter === filter.id ? 'filter-tab-btn-active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Filterable Projects Grid */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="project-card glass-panel"
                >
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-img"
                    />
                    <div className="project-details-overlay">
                      <span className="overlay-badge">
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  <div className="project-info-wrapper">
                    <span className="project-tag">
                      {project.category}
                    </span>
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                    <p className="project-summary">
                      {project.description[0]}
                    </p>
                    <div className="project-duration-row">
                      <Calendar size={12} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(10, 7, 21, 0.4)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Reach out for academic collaborations, job opportunities, or development projects.</p>
          </div>

          <div className="contact-grid">
            
            {/* Left side: Contact Info Card */}
            <div className="info-cards">
              <div className="glass-panel p-6" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <h3 className="info-card-label" style={{ fontSize: '1.25rem', color: '#fff', textTransform: 'none', letterSpacing: 'normal' }}>Contact Information</h3>
                
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="info-card-icon">
                    <Mail size={20} />
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">Email Me</span>
                    <a href="mailto:musaib19160@gmail.com" className="contact-link info-card-value">musaib19160@gmail.com</a>
                    <p className="info-card-sub">Response within 24 hours</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="info-card-icon" style={{ backgroundColor: 'rgba(6, 182, 212, 0.08)', borderColor: 'rgba(6, 182, 212, 0.2)', color: 'var(--secondary-light)' }}>
                    <Phone size={20} />
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">Call Me</span>
                    <a href="tel:+8801701051384" className="contact-link info-card-value">+8801701051384</a>
                    <p className="info-card-sub">Available for queries</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="info-card-icon" style={{ backgroundColor: 'rgba(236, 72, 153, 0.08)', borderColor: 'rgba(236, 72, 153, 0.2)', color: 'var(--accent)' }}>
                    <MapPin size={20} />
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">Address</span>
                    <p className="info-card-value" style={{ lineHeight: '1.6', fontWeight: 400 }}>
                      House No. 2, Shekhertek-13,<br />
                      PC Culture Housing Society,<br />
                      Mohammadpur, Dhaka.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="contact-form-wrapper glass-panel">
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 className="form-title">Send a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <span className="form-group-icon"><User size={18} /></span>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder=" "
                      value={formData.name}
                      onChange={handleFormChange}
                      required 
                      className="form-control form-control-with-icon"
                    />
                    <label htmlFor="name" className="form-label form-label-with-icon">Your Name</label>
                  </div>

                  <div className="form-group">
                    <span className="form-group-icon"><Mail size={18} /></span>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder=" "
                      value={formData.email}
                      onChange={handleFormChange}
                      required 
                      className="form-control form-control-with-icon"
                    />
                    <label htmlFor="email" className="form-label form-label-with-icon">Your Email</label>
                  </div>
                </div>

                <div className="form-group">
                  <span className="form-group-icon"><FileText size={18} /></span>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleFormChange}
                    required 
                    className="form-control form-control-with-icon"
                  />
                  <label htmlFor="subject" className="form-label form-label-with-icon">Subject</label>
                </div>

                <div className="form-group">
                  <span className="form-group-icon" style={{ top: '20px' }}><MessageSquare size={18} /></span>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="5" 
                    placeholder=" "
                    value={formData.message}
                    onChange={handleFormChange}
                    required 
                    className="form-control form-control-textarea form-control-with-icon"
                  />
                  <label htmlFor="message" className="form-label form-label-with-icon">Message</label>
                </div>

                <button 
                  type="submit" 
                  disabled={formLoading} 
                  className="btn-primary submit-btn"
                >
                  {formLoading ? (
                    <span style={{ display: 'inline-block', width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.2)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 1s infinite linear' }} />
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Custom Success Toast */}
                <AnimatePresence>
                  {formSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="toast-success"
                    >
                      <CheckCircle size={20} style={{ flexShrink: 0 }} />
                      <span>Your message has been sent successfully. Thank you!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <p>© {new Date().getFullYear()} Musaib Ibn Habib Mikdad. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Designed with <span style={{ color: 'var(--primary)' }}>♥</span> using React & Vanilla CSS
          </p>
        </div>
      </footer>

      {/* ANIMATED DETAILED DRAWER/MODAL FOR PROJECTS */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="modal-content-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={() => setSelectedProject(null)} className="modal-close-btn">
                <X size={18} />
              </button>

              <div className="modal-grid">
                
                {/* Left side: Images Slider/List */}
                <div className="modal-image-section">
                  <div className="modal-image-wrapper">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="modal-img"
                    />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h3 className="modal-narrative-title">Project Narrative</h3>
                    {selectedProject.description.map((para, i) => (
                      <p key={i} className="modal-narrative-paragraph">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right side: Metadata, Links */}
                <div className="modal-info-section">
                  <div className="modal-info-card">
                    <div>
                      <span className="modal-category">
                        {selectedProject.category}
                      </span>
                      <h2 className="modal-project-title">
                        {selectedProject.title}
                      </h2>
                      {selectedProject.subtitle && (
                        <p className="modal-project-subtitle">{selectedProject.subtitle}</p>
                      )}
                    </div>

                    <div className="modal-meta-list">
                      <div>
                        <h4 className="modal-meta-title">Timeline</h4>
                        <p className="modal-meta-value">
                          <Calendar size={14} style={{ color: 'var(--primary)' }} />
                          <span>{selectedProject.duration}</span>
                        </p>
                      </div>

                      {selectedProject.representing && (
                        <div>
                          <h4 className="modal-meta-title">Representing</h4>
                          <p className="modal-meta-value">
                            <BookOpen size={14} style={{ color: 'var(--secondary)' }} />
                            <span>{selectedProject.representing}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Interactive External Links */}
                    <div className="modal-links">
                      <h4 className="modal-links-title">Resource Actions</h4>
                      
                      {selectedProject.links?.github && (
                        <a 
                          href={selectedProject.links.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-secondary modal-action-btn-secondary"
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Github size={16} />
                            <span>Source Repository</span>
                          </span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {selectedProject.links?.live && (
                        <a 
                          href={selectedProject.links.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-primary modal-action-btn-primary"
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ExternalLink size={16} />
                            <span>Launch Application</span>
                          </span>
                          <ArrowRight size={14} />
                        </a>
                      )}

                      {selectedProject.links?.ieee && (
                        <a 
                          href={selectedProject.links.ieee} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-primary modal-action-btn-primary"
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Award size={16} />
                            <span>IEEE Xplore Publication</span>
                          </span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {selectedProject.links?.springer && (
                        <a 
                          href={selectedProject.links.springer} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-primary modal-action-btn-primary"
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Award size={16} />
                            <span>Springer Nature Paper</span>
                          </span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {selectedProject.links?.gdrive && (
                        <a 
                          href={selectedProject.links.gdrive} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-secondary modal-action-btn-secondary"
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FileText size={16} />
                            <span>Project Document</span>
                          </span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {!selectedProject.links && (
                        <p className="modal-project-subtitle" style={{ fontStyle: 'italic' }}>No external resource links available.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
