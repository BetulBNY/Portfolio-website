import { useState } from 'react';
import { Github, ExternalLink, Calendar, Code2, ChevronDown, ChevronUp,ChevronLeft,ChevronRight } from 'lucide-react';
import garbageClass from '../../assets/garbage_class.jpg';
import spaceimg from '../../assets/space_success_rate.jpg';
import skinVideo from '../../assets/skin_cancer.mp4';
import kursadUAV from '../../assets/kursadUAV.mp4';
import skinCancerPoster from '../../assets/skinPoster.jpg';
import libraryJ from '../../assets/library.jpg';
import room from '../../assets/rom.jpg';
import dl1 from '../../assets/dl1.jpeg';
import dl2 from '../../assets/dl2.jpeg';
import dl3 from '../../assets/dl3.jpeg';
import kursadpos from '../../assets/kursadpos.jpg';
import architecture from '../../assets/architecture.jpg';
import dashboard from '../../assets/dashboard.jpg';
import airflow from '../../assets/airflow.jpg';
import erdiagram from '../../assets/erdiagram.jpg';
import dataflow1 from '../../assets/dataflow1.jpg';
import data_architecture from '../../assets/data_architecture.png';
import dataflow from '../../assets/dataflow.jpg';
import data_integration from '../../assets/data_integration.png';
import pentaho_workflow from '../../assets/pentaho_workflow.jpg';
import datamodel3 from '../../assets/datamodel3.jpg';
import agent1 from '../../assets/agent1.jpg';
import agent2 from '../../assets/agent2.jpg';

export default function ProjectsPage() {
 
    const projects = [
      {
      id: 1,
      title: 'FloraAgent - AI-Powered Conversational Assistant',
      description: `FloraAgent is an end-to-end AI-powered conversational system designed to automate flower ordering and provide intelligent recommendations. The project leverages LLMs and Retrieval-Augmented Generation (RAG) to deliver context-aware responses, enabling users to interact naturally while receiving personalized suggestions based on occasion and preferences.

      Project Objective: The goal of this project is to build a real-world AI application that combines natural language understanding with structured workflows. It focuses on transforming user input into actionable outputs such as product recommendations, order validation, and location-based florist discovery, while ensuring privacy and scalability.

      Methodology and Workflow:
      1. LLM Integration: Built a conversational agent using Google Gemini integrated with LangChain to handle multi-turn dialogue and tool usage.
      2. RAG Pipeline: Implemented a retrieval-based system using FAISS and a custom knowledge base to generate context-aware recommendations.
      3. Data Processing & Validation: Designed logic to validate user inputs (e.g., address completeness) and ensure structured outputs for ordering workflows.
      4. Privacy Handling: Integrated Microsoft Presidio to detect and redact personally identifiable information (PII).
      5. Deployment: Developed multiple interfaces including a Flask web app, CLI interface, and serverless deployment using AWS Lambda.
      6. System Design: Structured the application into modular components (agent, tools, vector store) to ensure scalability and maintainability.
      Key Features:
      - Context-aware flower recommendations using RAG
      - Conversational memory for multi-turn interactions
      - Automated order validation and workflow handling
      - PII detection and privacy protection
      - Multi-platform deployment (Web, CLI, Serverless)
      `,
      image: [agent1, agent2],
      technologies: ['Python','LangChain','Google Gemini','FAISS','Flask','AWS Lambda','DynamoDB'],
      githubUrl: 'https://github.com/BetulBNY/Flora-Agent.git',
      date: '2025' 
    },
    {
      id: 2,
      title: 'Custom Deep Learning Model Development App',
      description: 'A full-stack web application that allows users to design, train, evaluate, and deploy deep learning models through an entirely visual, no-code interface. Users can sign up and manage their own workspaces where they: Build neural network architectures visually, Configure hyperparameters and compile models, Upload datasets for training, Monitor performance metrics during training in real time, Validate models with separate test data, And finally, run predictions directly within the platform. This approach removes the need for programming skills, making it easier for non-technical users to experiment with AI, while still supporting advanced functionality for production-level inference.Implementation: The full-stack application is built around three distinct modules: - C++ Module (Deep Learning Logic): This core module implements deep learning functionality such as layer types, activation functions, loss functions, and more, following object-oriented principles and design patterns. The Crow framework is used for API handling, managing HTML requests, and establishing WebSocket connections with the frontend to transmit epoch results during training. Eigen library is leveraged for efficient vectorization, significantly enhancing performance. - Express.js Module (Authentication & Data Management): The backend is responsible for user authentication and data storage. It follows the MVC pattern, handling requests from the frontend, managing user sessions, and saving user data in a MongoDB database using the Mongoose library. - React.js Module (Frontend/UI): The frontend provides an intuitive, user-friendly interface for interacting with the system. Users can design, train, and test deep learning models seamlessly through the visual interface.',
      image: [dl1,dl2,dl3],
      technologies: ['C++', 'React.js', 'Express.js', 'MongoDB', 'Crow', 'Eigen'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: "https://deep-learning-framework-view.onrender.com/",
      date: 'Jan 2025 - August 2025'
    },
    {
      id: 3,
      title: 'UAV Control And Image Recognition',
      description: 'As a member of Aytech UAS – Kürşad 40, I took part in developing the autonomous mission system for the International Rotary Wing UAV Competition at Teknofest. Our team secured 3rd place among 29 finalists with a drone that successfully carried out the following tasks: Surveying the mission area using a downward-facing onboard camera. Identifying a blue hexagon and precisely releasing a red payload at its center. Detecting a red triangle, storing its position when encountered earlier, and later releasing a blue payload at its center. Completing the mission with an autonomous return-to-home and landing sequence. Key Contributions: Built the offboard control architecture using MAVSDK, enabling autonomous flight, payload handling, and mission logic. Developed real-time vision algorithms with OpenCV for accurate recognition of geometric targets (triangle & hexagon). Conducted extensive simulation trials in Gazebo to validate performance before hardware deployment. Deployed the mission software onto a Raspberry Pi connected to the onboard camera, achieving reliable operation in real-world tests.',
      video:kursadUAV,
      poster: kursadpos,
      technologies: ['MAVSDK', 'PX4 Autopilot', 'Python', 'OpenCV', 'Gazebo'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: "//youtu.be/p_4mU07smrA?si=JPmKUmkLC0B5Hr3m",
      date: 'March 2025'
    },
    {
      id: 4,
      title: 'Skin Cancer Detection App',
      description: 'Skin cancer is one of the most common and deadly cancers worldwide, and early detection is critical for survival. This project developed an AI-powered application that combines image data and tabular patient information (such as age, gender, and lesion location) to provide a more accurate assessment. Users can upload images of their skin lesions, and the system analyzes both the visual and tabular data to generate a risk score. Designed to be accessible and affordable, the app promotes early detection and raises awareness about skin health',
      video: skinVideo,
      poster: skinCancerPoster,
      technologies: ['Python','React', 'Flask', 'TensorFlow'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl:null,
      date: 'May 2025'
    },
    {
      id: 5,
      title: 'Library Management System',
      description: 'A full-featured library management system designed to handle book inventories, user accounts, and borrowing processes efficiently. The system provides role-based authentication (admin and user) and allows admins to manage books, authors, and categories, while users can browse, borrow, and return books.',
      image: libraryJ,
      technologies: ['Java', 'Spring Boot', 'Spring Security + JWT', 'MySQL'],
      githubUrl: 'https://github.com/BetulBNY/Library-Management-System',
      liveUrl: null,
      date: 'April 2024'
    },
 {
  id: 6,
  title: 'Predicting the Success Rate of Space Mission',
  // description'ı " yerine ` ile başlatıp bitiriyoruz.
  description: `Overview: This project presents an end-to-end machine learning solution designed to predict the success or failure of a space mission prior to launch. Using a comprehensive dataset of all space missions from 1957 to the present, the project encompasses the entire data science workflow, including data cleaning, extensive feature engineering, handling class imbalance, and comparative analysis of multiple classification models. The project culminates in an optimized XGBoost model capable of predicting mission outcomes with over 92% accuracy.

  Project Objective: Space missions are incredibly costly and high-risk endeavors. The primary objective of this project is to mitigate these risks by developing a robust predictive model. By analyzing key pre-launch parameters, this model aims to provide valuable insights that can help optimize resource allocation, identify potential risks, and improve overall mission planning.
  Methodology and Workflow:
  1.  Data Exploration & Preprocessing: Loaded the dataset, cleaned irrelevant columns, and performed EDA.
  2.  Feature Engineering: Created new features from raw data like temporal, location, and company-based variables.
  3.  Data Preparation: Handled missing values with a strategic imputation method, applied rare encoding, and scaled numerical features.
  4.  Handling Imbalanced Data: Used SMOTE (Synthetic Minority Over-sampling Technique) to balance the class distribution in the training data.
  5.  Modeling and Tuning: Trained and evaluated several models (Logistic Regression, KNN, XGBoost, CatBoost) and optimized them using GridSearchCV.
  6.  Evaluation: The final model was interpreted by analyzing feature importance, and its practical use was demonstrated with a sample prediction.`,
  image: spaceimg,
  technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Seaborn'], // Tech stack'i güncelledim
  githubUrl: 'https://www.kaggle.com/code/betulbny/predicting-the-success-rate-of-a-space-mission',
  liveUrl: null, // Projenin canlı bir linki yoksa null veya boş bırakmak daha iyi
  date: 'September 2023'
},
    {
      id: 7,
      title: 'Garbage classsification',
      description: 'The rapid urbanization, growing population, and consumption-driven lifestyles have significantly contributed to environmental pollution worldwide. Efficient recycling has become crucial for both the global economy and climate balance. In this project, our goal is to automate the classification of solid waste—such as plastic, paper, glass, and metal—using computer vision techniques. By enabling machines to identify and sort waste, we aim to reduce human labor requirements and promote environmentally sustainable waste management practices.',
      image: garbageClass,
      technologies: ['Python','Scikit-learn','TensorFlow'],
      githubUrl: 'https://www.kaggle.com/code/betulbny/garbage-classsification',
      liveUrl: null,
      date: 'May 2024'
    },
    {
      id: 8,
      title: 'Room Occupancy Prediction',
      description: 'This project presents a machine learning-based approach to accurately estimate the number of occupants in a room using non-intrusive, low-cost environmental sensors such as CO₂, temperature, illumination, sound, and motion. The system leverages supervised learning models including Random Forest and Support Vector Machine (SVM) to predict occupancy levels with high accuracy.',
      image: room,
      technologies: ['Python', 'Random Forest', 'SVM', 'Scikit-learn'],
      githubUrl: 'https://www.kaggle.com/code/betulbny/room-occupancy-prediction',
      liveUrl: null,
      date: 'January 2025'
    },
      {
      id: 9,
      title: 'E-Commerce Analytics Platform',
      description: `Designed and implemented an end-to-end Data Engineering platform using Medallion Architecture and Kimball Star Schema.
      Key features:
      - Orchestrated production-like ELT pipelines with Apache Airflow.
      - Automated data quality checks and incremental upsert (SCD 1-like) logic.
      - Built a data simulator (Python, Faker) for continuous synthetic transactions.
      - Integrated CI/CD pipelines (GitHub Actions) for SQL validation and Python linting.
      - Visualized real-time logistics and sales insights via a Streamlit dashboard.

        PROBLEMS SOLVED
    ❌ Static data problem → ✔ Real-time simulated dynamic data pipeline
    ❌ Manual pipeline execution → ✔ Fully automated Airflow orchestration
    ❌ Reprocessing overhead → ✔ Incremental ELT (only new data processed)
    ❌ Unstructured data layers → ✔ Structured Medallion Architecture
    ❌ Manual dashboard updates → ✔ Git-based automated sync system
    ❌ Data quality issues & incorrect reporting → ✔ Automated SQL Quality Gates (logical validation tests)`,
      image: [architecture, dashboard, airflow, dataflow1, erdiagram],
      technologies: ['Apache Airflow', 'PostgreSQL', 'Python', 'Docker', 'GitHub Actions', 'Streamlit', 'Medallion Architecture', 'Data Modeling', 'Data Warehousing'],
      githubUrl: 'https://github.com/BetulBNY/ecommerce-data-lakehouse.git', 
      liveUrl: "https://betul-ecommerce-dashboard.streamlit.app/",
      date: 'March 2026 - Present'
    },
    {
      id: 10,
      title: 'SQL Data Warehouse Project',
      description: `Built a multi-layered data warehouse in PostgreSQL. 
      - Implemented Bronze, Silver, and Gold layers for data cleanliness and reliability.
      - Developed Fact and Dimension tables based on Star Schema.
      - Wrote highly optimized SQL queries (CTEs, Window Functions) for business intelligence reporting.`,
      image: [data_architecture, dataflow, data_integration],
      technologies: ['PostgreSQL', 'SQL', 'Medallion Architecture', 'Data Modeling', 'Data Warehousing'],
      githubUrl: 'https://github.com/BetulBNY/sql-data-warehouse-project.git',
      date: 'March 2026'
    },
    {
      id: 11,
      title: 'Sales Pipeline with Pentaho',
      description: `Developed scalable ETL pipelines using Pentaho Data Integration (Kettle).
      - Automated data cleansing and normalization workflows.
      - Implemented Incremental (Delta) load logic to optimize performance.
      - Integrated diverse data sources into a centralized PostgreSQL target.`,
      image: [pentaho_workflow, datamodel3],
      technologies: ['Pentaho', 'PDI', 'SQL', 'PostgreSQL', 'ETL'],
      githubUrl: 'https://github.com/BetulBNY/pentaho-sales-etl-pipeline.git',
      date: 'February 2026'
    }
 
  ];
 
  const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const isEven = index % 2 === 0;
    const maxLength = 300;
    const shouldTruncate = project.description.length > maxLength;
    
    const displayDescription = shouldTruncate && !isExpanded 
      ? project.description.slice(0, maxLength) + '...'
      : project.description;

    const isImageArray = Array.isArray(project.image);
    const imageCount = isImageArray ? project.image.length : 1;
    
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCount);
    };
    
    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
    };
   
    return (
      <div style={{
        ...styles.projectCard,
        flexDirection: isEven ? 'row' : 'row-reverse'
      }}>
        {/* Project Image/Video */}
        <div style={styles.imageContainer}>
          {project.video ? (
            <video 
              src={project.video} 
              controls 
              muted 
              loop 
              poster={project.poster} 
              style={styles.projectImage}
            />
          ) : (
            <img
              src={isImageArray ? project.image[currentImageIndex] : project.image}
              alt={project.title}
              style={styles.projectImage}
            />
          )}


        {isImageArray && imageCount > 1 && (
        <>
          <button onClick={prevImage} style={{ ...styles.imageNavigationButton, ...styles.prevButton }}>
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextImage} style={{ ...styles.imageNavigationButton, ...styles.nextButton }}>
            <ChevronRight size={24} />
          </button>
        </>
      )}


          <div style={{...styles.imageOverlay, pointerEvents: "none" }}></div>
        </div>
 
        {/* Project Content */}
        <div style={styles.contentContainer}>
          <div style={styles.projectHeader}>
            <div style={styles.dateTag}>
              <Calendar size={16} />
              <span>{project.date}</span>
            </div>
          </div>
 
          <h2 style={styles.projectTitle}>{project.title}</h2>
         
          <p style={styles.projectDescription}>{displayDescription}</p>
          
          {/* Read More Button */}
          {shouldTruncate && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              style={styles.readMoreButton}
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  <span>Read More</span>
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          )}
 
          {/* Technologies */}
          <div style={styles.technologiesContainer}>
            {project.technologies.map((tech, i) => (
              <span key={i} style={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
 
          {/* Links */}
          <div style={styles.linksContainer}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkButton}
            >
              <Github size={20} />
              <span>View Code</span>
            </a>

            {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkButtonPrimary}
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a> )}
          </div>
        </div>
      </div>
    );
  };
 
  return (
    <div style={styles.page}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.iconWrapper}>
            <Code2 size={48} />
          </div>
          <h1 style={styles.pageTitle}>My Projects</h1>
          <p style={styles.pageSubtitle}>
            A collection of my recent work and personal projects. Each project represents
            a unique challenge and learning experience in my journey as a developer.
          </p>
        </div>
      </div>
 
      {/* Projects List */}
      <div style={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
 
      {/* Footer CTA */}
      <div style={styles.footerCTA}>
        <h3 style={styles.ctaTitle}>Want to see more?</h3>
        <p style={styles.ctaText}>
          Check out my GitHub profile for additional projects and contributions.
        </p>
        <a
          href="https://github.com/BetulBNY"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.ctaButton}
        >
          <Github size={20} />
          <span>Visit GitHub Profile</span>
        </a>
      </div>
    </div>
  );
}
 





//////////////////////////////////////////////////////////


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
  },
  pageSubtitle: {
    fontSize: '1.2rem',
    color: '#C4B5C7',
    lineHeight: '1.8',
  },
  projectsList: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '6rem',
  },
  projectCard: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'flex-start',
    background: 'rgba(77, 76, 125, 0.2)',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(216, 185, 195, 0.3)',
    transition: 'all 0.3s ease',
    padding: '2rem',
    flexWrap: 'wrap',
  },
  imageContainer: {
    position: 'relative',
    flex: '1 1 400px',
    minWidth: '300px',
    height: '350px',
    borderRadius: '16px',
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
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  prevButton: {
    left: '10px',
  },
  nextButton: {
    right: '10px',
  },


  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(130, 115, 151, 0.4), rgba(216, 185, 195, 0.4))',
    opacity: 0.5,
    transition: 'opacity 0.3s ease',
  },
  contentContainer: {
    flex: '1 1 500px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  projectHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(130, 115, 151, 0.3)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#D8B9C3',
  },
  projectTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#ffffff',
  },
  projectDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#C4B5C7',
    margin: 0,
    whiteSpace: 'pre-line',
  },
  readMoreButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(130, 115, 151, 0.25)',
    border: '1px solid rgba(216, 185, 195, 0.4)',
    borderRadius: '8px',
    color: '#D8B9C3',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-start',
  },
  technologiesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  techTag: {
    padding: '0.5rem 1rem',
    background: 'rgba(77, 76, 125, 0.3)',
    border: '1px solid rgba(216, 185, 195, 0.4)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#D8B9C3',
    fontWeight: '500',
  },
  linksContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  linkButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.5rem',
    background: 'rgba(77, 76, 125, 0.3)',
    border: '1px solid rgba(216, 185, 195, 0.4)',
    borderRadius: '12px',
    color: '#D8B9C3',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  linkButtonPrimary: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.5rem',
    background: 'linear-gradient(135deg, #827397, #D8B9C3)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(130, 115, 151, 0.4)',
  },
  footerCTA: {
    maxWidth: '800px',
    margin: '4rem auto',
    padding: '4rem 2rem',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#9999b3',
    marginBottom: '2rem',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
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