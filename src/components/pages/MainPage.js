import { Github, Linkedin, Mail, Code, Briefcase, Trophy, Heart, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import romaPhoto from '../../assets/roma.jpeg';
import { SiKaggle } from "react-icons/si";

// Hero Component
export default function MainPage(){
  const navigate = useNavigate();

const Hero = () => { 
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroContent}>
        <div style={styles.profilePhoto}>
          <div style={styles.profileGlow}></div>
          <img
            src={romaPhoto} 
            alt="Profile"
            style={styles.profileImg}
          />
        </div>
 
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.heroName}>Betül Nur Yıldırım</span>
          </h1>
          <p style={styles.tagline}>
           AI & Data Science Explorer | Full Stack Developer in Progress
          </p>
          <p style={styles.description}>
            I am passionate about identifying hidden problems and building end-to-end solutions.
            I develop my projects from scratch, covering both AI and full-stack parts. 
            My main focus is on Data Science and AI, and I am currently exploring LLMs.
            </p>
 
          <div style={styles.socialLinks}>
            <a href="https://github.com/BetulBNY" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/betulnuryildirim/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:betulbny@gmail.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
            <a href="https://www.kaggle.com/betulbny" target="_blank" rel="noopener noreferrer" className="socialLink">
               <SiKaggle size={64} color="white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
 
// Skills Component
const Skills = () => {
  const skills = ['Data Analysis', 
'Feature Engineering', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Model Deployment/ API integration',
 'Python', 'Java', 'JavaScript (React, Node.js)','TensorFlow', 'Keras',' Scikit-Learn', 'Numpy', 'Pandas', 'OpenCV', 'Matplotlib', 
'Seaborn', 'Plotly', 'NLTK','Agile', 'UML', 'Git', 'Docker', 'MySql', 'MongoDB'];
 
  return (
    <section style={styles.skills}>
      <div style={styles.skillsContainer}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill} style={styles.skillTag}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/////////////////////////////////////////////// EDUCATION
// Education Component
const Education = () => {
  const schools = [
    {
      name: 'İstanbul Aydın University',
      degree: 'Bachelor of Software Engineering ',
      gpa: 'GPA: 3.62/4.00 - 2nd in department - High Honor',
      period: '2020 - 2025',
      description: 'Focused on AI, Machine Learning, and Software Development'
    },
    {
      name: 'John Von Neumann University',
      degree: 'Erasmus+ Computer Science ',
      gpa: 'GPA: 4.00 - 4.00',
      period: '2024 - 2025',
      description: 'Focused on AI and Full Stack'
    }
  ];

  return (
    <section style={styles.education}>
      <div style={styles.educationContainer}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={styles.educationGrid}>
          {schools.map((school, index) => (
            <div key={index} style={styles.educationCard}>
              <div style={styles.educationIcon}>👩🏻‍🎓</div>
              <h3 style={styles.educationName}>{school.name}</h3>
              <p style={styles.educationDegree}>{school.degree}</p>
              <p style={styles.educationGpa}>{school.gpa}</p>
              <p style={styles.educationPeriod}>{school.period}</p>
              <p style={styles.educationDescription}>{school.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




// Cards Component
const Cards = () => {
  const cards = [
    {
      title: 'Projects',
      description: 'Explore my technical projects and applications',
      icon: Code,
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      path: "/projects"
    },
    {
      title: 'Experiences & Competitions',
      description: 'Professional journey and work history',
      icon: Briefcase,
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      path: "/experiences"
    },
    {
      title: 'Blog',
      description: 'Sharing what I learn, as I learn it. A space for notes on AI, problem-solving, and continuous growth in tech. Content is on the way.',
      icon: Heart,
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      image: null,
      path: "/blog"
    }
  ];
 
  return (
    <section id="projects" style={styles.cardsSection}>
      <h2 style={styles.sectionTitle}>Explore My Work</h2>
      <div style={styles.cardsGrid}>
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} style={styles.card} onClick={()=> navigate(card.path)}>
              <div style={{...styles.cardBg, backgroundImage: `url(${card.image})`}}></div>
              <div style={{...styles.cardOverlay, background: card.gradient}}></div>
              <div style={styles.cardContent}>
                <div>
                  <div style={styles.cardIcon}>
                    <Icon size={32} />
                  </div>
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                  <p style={styles.cardDescription}>{card.description}</p>
                </div>
                <div style={styles.cardLink}>View More →</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
 
// Contact Component
const Contact = () => {
  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.contactContainer}>
        <h2 style={styles.sectionTitle}>Let's Work Together</h2>
        <p style={styles.contactText}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a href="mailto:betulbny@gmail.com" style={styles.contactBtn}>
          Get In Touch
        </a>
      </div>
    </section>
  );
};
 
// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 BNY</p>
    </footer>
  );
};
 
 

  return (
    <>
      <Hero />
      <Skills />
      <Education/>
      <Cards />
      <Contact />
      <Footer />
    </>
  );
};

 
// Styles Object
const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    background: 'linear-gradient(135deg, #363062 0%, #4D4C7D 50%, #363062 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    lineHeight: '1.6',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'rgba(54, 48, 98, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    borderBottom: '1px solid rgba(216, 185, 195, 0.2)',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #D8B9C3 0%, #827397 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  navLinksActive: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(54, 48, 98, 0.98)',
    padding: '1rem',
    gap: 0,
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#D8B9C3',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  mobileMenu: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#D8B9C3',
    cursor: 'pointer',
  },
  hero: {
    paddingTop: '150px',
    paddingBottom: '100px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  profilePhoto: {
    position: 'relative',
  },
  profileGlow: {
    position: 'absolute',
    inset: '-10px',
    background: 'linear-gradient(135deg, #827397, #D8B9C3)',
    borderRadius: '50%',
    filter: 'blur(20px)',
    opacity: 0.4,
    zIndex: -1,
  },
  profileImg: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #827397',
    boxShadow: '0 0 40px rgba(130, 115, 151, 0.6)',
    transition: 'transform 0.3s',
  },
  heroText: {
    flex: 1,
    minWidth: '300px',
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
  },
  heroName: {
    background: 'linear-gradient(135deg, #D8B9C3 0%, #827397 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: {
    fontSize: '1.5rem',
    color: '#D8B9C3',
    marginBottom: '1.5rem',
  },
  description: {
    color: '#C4B5C7',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    width: '50px',
    height: '50px',
    background: 'rgba(216, 185, 195, 0.15)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    textDecoration: 'none',
    color: '#D8B9C3',
  },
  skills: {
    padding: '80px 2rem',
    background: 'rgba(77, 76, 125, 0.2)',
  },
  skillsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #D8B9C3 0%, #827397 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  skillTag: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, rgba(77, 76, 125, 0.3), rgba(130, 115, 151, 0.3))',
    border: '1px solid rgba(216, 185, 195, 0.3)',
    borderRadius: '25px',
    transition: 'all 0.3s',
    color: '#D8B9C3',
  },
  education: {
    padding: '80px 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  educationContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  educationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  educationCard: {
    padding: '2rem',
    background: 'linear-gradient(135deg, rgba(77, 76, 125, 0.2), rgba(130, 115, 151, 0.2))',
    border: '1px solid rgba(216, 185, 195, 0.4)',
    borderRadius: '20px',
    transition: 'all 0.3s',
    textAlign: 'center',
  },
  educationIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  educationName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#D8B9C3',
  },
  educationDegree: {
    fontSize: '1.1rem',
    color: '#E8E8E8',
    marginBottom: '0.5rem',
  },
  educationGpa: {
    fontSize: '1rem',
    color: '#827397',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  educationPeriod: {
    color: '#D8B9C3',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  educationDescription: {
    color: '#C4B5C7',
    fontSize: '0.95rem',
  },
  cardsSection: {
    padding: '80px 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  card: {
    position: 'relative',
    height: '300px',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  cardBg: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
    transition: 'opacity 0.3s',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    opacity: 0.7,
    transition: 'opacity 0.3s',
  },
  cardContent: {
    position: 'relative',
    padding: '2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardIcon: {
    width: '60px',
    height: '60px',
    background: 'rgba(216, 185, 195, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    transition: 'background 0.3s',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  cardDescription: {
    color: 'rgba(255, 255, 255, 0.95)',
  },
  cardLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    transition: 'transform 0.3s',
  },
  contact: {
    padding: '80px 2rem',
    background: 'rgba(77, 76, 125, 0.2)',
    textAlign: 'center',
  },
  contactContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  contactText: {
    color: '#C4B5C7',
    marginBottom: '2rem',
  },
  contactBtn: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #827397, #D8B9C3)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 600,
    transition: 'all 0.3s',
  },
  footer: {
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid rgba(216, 185, 195, 0.2)',
    color: '#C4B5C7',
  }}