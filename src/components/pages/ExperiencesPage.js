import { useState } from 'react'; 
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import huawei from '../../assets/huawei.jpg';
import caretta from '../../assets/caretta.jpg';
import miuul from '../../assets/miuul.png';
import wie from '../../assets/wie.jpg';
import aytech from '../../assets/aytc.jpg';
import aytech2 from '../../assets/aytech2.jpeg';
import hepsi1 from '../../assets/hepsi1.jpeg';
import hepsi2 from '../../assets/hepsi2.jpeg';
import sff1 from '../../assets/sff1.jpg';
import sff2 from '../../assets/sff2.jpg';
import da from '../../assets/da.jpg';

export default function ExperiencesPage() {
 
  const experienceCategories = {
    internships: [
      {
        id: 1,
        company: 'Huawei',
        position: 'Backend Developer Intern',
        location: 'İstanbul, Türkiye',
        startDate: 'February 2024',
        endDate: 'May 2024',
        description: 'I was previously undertaking a valuable internship at Huawei, where my role involved the development of a project as a backend engineer. My focus was on building projects and solutions using the Java Spring framework and MySQL. In my project, I developed a basic CRUD application. The project implemented security features using Spring Security and JWT tokens for authentication and authorization. Additionally, it adhered to SOLID principles in its design.',
        images: [huawei], // Tek fotoğraf
        technologies: ['MySQL','Java Spring','JWT'],
        companyUrl: 'https://www.huawei.com/tr/'
      },
      {
        id: 2,
        company: 'Caretta Software and Consultancy',
        position: 'AI Developer Intern',
        location: 'Remote',
        startDate: 'October 2023',
        endDate: 'January 2024',
        description: 'During my internship at Caretta Software and Consulting company, we worked on a project about the classification of flower images and displaying similar flowers based on the user-uploaded image. We employed TensorFlow/Keras to implement the VGG-16 CNN architecture with transfer learning and trained the dense layers we appended to the model using the 102 flowers dataset.',
        images: [caretta],
        technologies: ['TensorFlow', 'Keras', 'Python', 'VGG-16', 'Transfer Learning'],
        companyUrl: 'https://www.caretta.net/en/'
      }
    ],
    leadership: [
      {
        id: 3,
        company: 'Aytech UAS',
        position: 'Software Engineer',
        location: 'İstanbul, Türkiye',
        startDate: 'December 2024',
        endDate: 'September 2025',
        description: 'Contributed to the development of the autonomous mission system for a rotary-wing UAV that ranked 3rd among 29 finalist teams at Teknofest. Implemented offboard drone control using MAVSDK to enable autonomous navigation, payload drop, and return-to-home. Developed real-time computer vision algorithms with OpenCV to detect geometric targets (blue hexagon & red triangle) from the onboard camera. Conducted extensive simulation tests in Gazebo and successfully deployed the mission code on a Raspberry Pi with onboard camera for real-world execution. Gained hands-on experience in drone autonomy, perception, and simulation-to-hardware integration within a competitive robotics environment.',
        images: [aytech ], 
        technologies: ['MAVSDK', 'PX4', 'Python', 'OpenCV', 'Gazebo'],
        companyUrl: null
      },
      {
        id: 4,
        company: 'IEEE IAU WIE',
        position: 'Chairperson',
        location: 'İstanbul, Türkiye',
        startDate: 'December 2022',
        endDate: 'September 2024',
        description: 'As IEEE WIE Chairperson, we organize various engineering training sessions, discussion events, and social activities for our members. Led a team to empower women in engineering through educational workshops and networking events.',
        images: [wie],
        technologies: ['Leadership', 'Event Management', 'Community Building'],
        companyUrl: "https://www.instagram.com/ieeeiauwie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    ],
    programs: [
      {
        id: 5,
        company: 'MIUUL',
        position: 'Data Science Bootcamp',
        location: 'Remote',
        startDate: 'April 2023',
        endDate: 'September 2023',
        description: 'I made significant progress in the field by participating in the MIUUL Data Science Bootcamp program. Throughout this program, we received intensive training on various topics, including Python Programming for Data Science, CRM Analytics, Measurement Problems, Recommendation Systems, Feature Engineering, and Machine Learning.',
        images: [miuul],
        technologies: ['Python', 'Machine Learning', 'Feature Engineering', 'CRM Analytics'],
        companyUrl: 'https://miuul.com/'
      },
      {
        id: 6,
        company: 'Huawei',
        position: 'Seeds For the Future 2023',
        location: 'İstanbul, Türkiye',
        startDate: 'July 2023',
        endDate: 'August 2023',
        description: "Selected as one of 30 participants from Turkey out of 6,000 applicants for this global program active in 139 countries. Received comprehensive training in 5G, artificial intelligence, and cloud technologies. Collaborated with teams to develop innovative solutions for real-world challenges and earned certification from BTK and Huawei executives.",
        images: [sff1, sff2], 
        technologies: ['5G', 'AI', 'Cloud Technologies', 'Innovation'],
        companyUrl: 'https://www.huawei.com/tr/news/tr/2023/huawei-turkiye-gelecek-icin-tohumlar-2023-programi-basladi'
      },
      {
        id: 7,
        company: 'Data Analysis School',
        position: 'Participant Student',
        location: 'İstanbul, Türkiye',
        startDate: 'October 2025',
        endDate: 'Present',
        description: "In this ongoing training program, participants explore AI-powered social data analysis through supervised and unsupervised learning models, generative AI tools, and Large Language Models (LLMs). The module focuses on applying modern AI techniques to extract insights from social datasets using real-world case studies.",
        images: [da],
        technologies: ['LLM','GenAI','Data Analysis', 'Statistics', 'Data Visualization','RAG Systems','ML Algorithms'],
        companyUrl: 'https://nsa.marmara.edu.tr/notice/veri-analizi-okulu-basvurulari-basladi'
      }
    ],
    contests: [
      {
        id: 8,
        company: 'Teknofest',
        position: '3rd Place – International Rotary-Wing UAV Competition',
        location: 'Kocaeli, Türkiye',
        startDate: 'December 2024',
        endDate: 'September 2025',
        description: 'Achieved 3rd place among 29 finalist teams in the prestigious Teknofest UAV competition. Developed autonomous navigation system, implemented computer vision for target detection, and successfully completed all mission objectives.',
        images: [aytech2],
        technologies: ['UAV', 'Computer Vision', 'Autonomous Systems'],
        companyUrl: 'https://www.teknofest.org/tr/'
      },
      {
        id: 9,
        company: 'Hepsiburada x Teknofest',
        position: '11th Place – AI-Based Address Resolution Hackathon',
        location: 'İstanbul, Türkiye',
        startDate: 'July 2025',
        endDate: 'August 2025',
        description: "As part of Team GeoSync, we ranked 11th out of 255 teams. During the competition, I contributed to data analysis, preprocessing, and feature engineering for the Kaggle stage. For the final address classification task, we fine-tuned a pre-trained BERT model on a Turkish dataset tailored to our problem. Our team advanced to the finals among the top 12 teams and had the opportunity to present our solution in person at the Hepsiburada Sancaktepe office in front of the jury and other participants.",
        images: [hepsi2, hepsi1 ], // İki fotoğraf
        technologies: ['BERT', 'NLP', 'Machine Learning', 'Python'],
        companyUrl: 'https://kurumsal.hepsiburada.com/tr/'
      }
    ]
  };
 
  const ExperienceCard = ({ experience }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageCount = experience.images.length;
  
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCount);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
    };
    
 return (
      <div style={styles.compactCard}>
        {/* DEĞİŞEN KISIM: Resim bölümü slider olarak yeniden düzenlendi */}
        <div style={styles.compactImageSection}>
          <img
            src={experience.images[currentImageIndex]} // Dinamik olarak doğru resmi göster
            alt={`${experience.company} - ${currentImageIndex + 1}`}
            style={styles.experienceImage}
          />
          
          {/* Sadece birden fazla resim varsa navigasyon butonlarını göster */}
          {imageCount > 1 && (
            <>
              <button onClick={prevImage} style={{ ...styles.imageNavigationButton, ...styles.prevButton }}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextImage} style={{ ...styles.imageNavigationButton, ...styles.nextButton }}>
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div style={styles.imageOverlay}></div>
        </div>
  
        {/* Content Section - Bu kısım aynı kalıyor */}
        <div style={styles.compactContentSection}>
          <h3 style={styles.compactPosition}>
            {experience.position}
          </h3>
          
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.companyLink}
          >
            <span style={styles.compactCompanyName}>
              {experience.company}
            </span>
            {experience.companyUrl && <ExternalLink size={14} />}
          </a>
  
          <div style={styles.compactMetaInfo}>
            <div style={styles.compactMetaItem}>
              <Calendar size={14} style={styles.compactMetaIcon} />
              <span style={styles.compactMetaText}>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
  
            <div style={styles.compactMetaItem}>
              <MapPin size={14} style={styles.compactMetaIcon} />
              <span style={styles.compactMetaText}>{experience.location}</span>
            </div>
          </div>
  
          <p style={styles.compactDescription}>
            {experience.description}
          </p>
  
          <div style={styles.compactTechTags}>
            {experience.technologies.map((tech, index) => (
              <span key={index} style={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CategorySection = ({ title, experiences }) => {
    return (
      <div style={styles.categorySection}>
        <h2 style={styles.categoryTitle}>{title}</h2>
        <div style={styles.compactGrid}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    );
  };
 
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.iconWrapper}>
            <Briefcase size={48} />
          </div>
          <h1 style={styles.pageTitle}>Professional Journey</h1>
          <p style={styles.pageSubtitle}>
            My path through internships, competitions, leadership roles, and continuous learning programs.
            Each experience has contributed to my growth as a developer and professional.
          </p>
        </div>
      </div>
 
      <div style={styles.container}>
        <CategorySection 
          title="Internships" 
          experiences={experienceCategories.internships} 
        />
        
        <CategorySection 
          title="Leadership & Community" 
          experiences={experienceCategories.leadership} 
        />
        
        <CategorySection 
          title="Bootcamps & Programs" 
          experiences={experienceCategories.programs} 
        />

        <CategorySection 
          title="Contests" 
          experiences={experienceCategories.contests} 
        />
      </div>
 
 
    </div>
  );
}




//////////////////////

const styles = {
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    background: 'linear-gradient(135deg, #363062 0%, #4D4C7D 50%, #363062 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    paddingTop: '80px',
    paddingBottom: '80px'
  },
  header: {
    padding: '80px 2rem 60px',
    textAlign: 'center',
    background: 'rgba(77, 76, 125, 0.15)',
    borderBottom: '1px solid rgba(216, 185, 195, 0.2)',
  },
  headerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  iconWrapper: {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, rgba(130, 115, 151, 0.3), rgba(216, 185, 195, 0.3))',
    border: '2px solid rgba(216, 185, 195, 0.5)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2rem',
    color: '#D8B9C3',
  },
  pageTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #D8B9C3 0%, #827397 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
      // Fallback ekleyelim
    color: '#D8B9C3' // Gradient çalışmazsa bu renk görünür
  },
  pageSubtitle: {
    fontSize: '1.2rem',
    color: '#C4B5C7',
    lineHeight: '1.8',
  },
  container: {
    maxWidth: '1400px',
    margin: '4rem auto',
    padding: '0 2rem 4rem',
  },
  categorySection: {
    marginBottom: '5rem',
  },
  categoryTitle: {
    fontSize: '2.5rem',
    marginBottom: '2.5rem',
    background: 'linear-gradient(135deg, #D8B9C3 0%, #827397 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textAlign: 'center',
    fontWeight: '700',
  },
  compactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  compactCard: {
    background: 'rgba(77, 76, 125, 0.2)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(216, 185, 195, 0.3)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  compactImageSection: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
  },
  imageNavigationButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.4)',
    border: 'none',
    color: 'white',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    zIndex: 10,
  },
  prevButton: {
    left: '8px',
  },
  nextButton: {
    right: '8px',
  },
  singleImageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  doubleImageContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    gap: '2px',
  },
  halfImageWrapper: {
    position: 'relative',
    flex: 1,
    overflow: 'hidden',
  },
  multiImageContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    gap: '2px',
  },
  largeImageWrapper: {
    position: 'relative',
    flex: '2',
    overflow: 'hidden',
  },
  smallImagesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    gap: '2px',
  },
  smallImageWrapper: {
    position: 'relative',
    flex: 1,
    overflow: 'hidden',
  },
  experienceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(130, 115, 151, 0.5), rgba(216, 185, 195, 0.5))',
    opacity: 0.6,
  },
  compactContentSection: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  compactPosition: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  companyLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    marginBottom: '0.5rem',
  },
  compactCompanyName: {
    fontSize: '1.1rem',
    color: '#D8B9C3',
    fontWeight: '600',
  },
  compactMetaInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  compactMetaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  compactMetaIcon: {
    color: '#827397',
  },
  compactMetaText: {
    fontSize: '0.9rem',
    color: '#C4B5C7',
  },
  compactDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#C4B5C7',
    marginBottom: '1rem',
    flex: 1,
  },
  compactTechTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginTop: 'auto',
  },
  techTag: {
    padding: '0.4rem 0.8rem',
    background: 'rgba(77, 76, 125, 0.3)',
    border: '1px solid rgba(216, 185, 195, 0.4)',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: '#D8B9C3',
    fontWeight: '500',
  },
  footerCTA: {
    maxWidth: '800px',
    margin: '4rem auto',
    padding: '4rem 2rem',
    textAlign: 'center',
    background: 'rgba(77, 76, 125, 0.2)',
    borderRadius: '24px',
    border: '1px solid rgba(216, 185, 195, 0.3)',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #D8B9C3 0%, #827397 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#C4B5C7',
    marginBottom: '2rem',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #827397, #D8B9C3)',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(130, 115, 151, 0.5)',
  },
};