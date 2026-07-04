// src/pages/Projects.jsx

const projects = {
  academic: [
    {
      id: 'gas-queue',
      title: 'GasQueue: Fuel Distribution System',
      description: 'A C++ console-based application that simulates a fuel distribution process using Queue, Priority Queue, and Stack data structures. It demonstrates efficient handling of fuel requests and distribution.',
      technologies: ['C++', 'Queue', 'Priority Queue', 'Stack'],
      repoLink: 'https://github.com/created-by-the-creator/CC103-FinalProject-CS1206-Team6',
      demoLink: '', // Add demo link if available (e.g., YouTube video, GitHub Pages, etc.)
      status: 'Completed'
    },
    {
      id: 'application-monitoring',
      title: 'Educational Application and Monitoring System',
      description: 'A Python-based application using Tkinter that streamlines the educational assistance process, allowing students to apply, manage requirements, and track application status efficiently.',
      technologies: ['Python', 'Tkinter', 'JSON'],
      repoLink: 'https://github.com/created-by-the-creator/application-monitoring-system-tkinter', 
      demoLink: 'https://elf-leaves-09010883.figma.site/', // Add demo link if available (e.g., YouTube video, GitHub Pages, etc.)
      status: 'Completed'
    },
    {
      id: 'tapat',
      title: 'TAPAT: Break the Cycle',
      description: 'A static website project focused on raising awareness about important social issues. "Stop the lies. Start the change." - A campaign to promote truth and positive change.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      repoLink: 'https://github.com/created-by-the-creator/static-website-project', // Add your repository link here
      demoLink: 'https://static-website-project-beige.vercel.app/', // Add demo link if available (e.g., live website, GitHub Pages, etc.)
      status: 'Completed'
    }
  ],
  hackathon: [
    {
      id: 'agrinet',
      title: 'AgriNet for Farmers',
      description: 'AgriNet is a hackathon project built to help farmers by creating a platform where they can access information, share knowledge, and stay connected. The goal is to make farming more efficient and accessible through technology.',
      technologies: ['Wireframe', 'Project Proposal', 'Demo'],
      wireframeLink: 'https://bit.ly/4c7oq5Y', // Add your wireframe link here
      proposalLink: 'https://created-by-the-creator.github.io/venice-anne-manacop/AgriNet_ProjectProposal.pdf', // Add your project proposal link here
      demoLink: 'https://drive.google.com/file/d/1nF4MkBYjI1ArVuO8NEJbOjwdIwM7fKZ8/view', // Add your demo link here
      status: 'Completed'
    }
  ],
  activities: [
    {
      id: 'python-fundamentals',
      title: 'Python Fundamentals Practice',
      description: 'Practice exercises and mini-projects covering Python fundamentals including loops, functions, and file handling.',
      technologies: ['Python'],
      repoLink: 'https://github.com/created-by-the-creator/python-fundamentals-practice' // Add your repository link here
    },
    {
      id: 'cpp-data-structures',
      title: 'C++ Data Structures Practice',
      description: 'Practice implementations of fundamental data structures and concepts in C++ such as basic loops, arrays, and other essential programming concepts.',
      technologies: ['C++'],
      repoLink: 'https://github.com/created-by-the-creator/cpp-data-structures-practice' // Add your repository link here
    },
    {
      id: 'c-programming',
      title: 'C Programming Basics',
      description: 'A collection of C programming exercises and foundational projects covering core concepts, syntax, and problem-solving techniques.',
      technologies: ['C'],
      repoLink: 'https://github.com/created-by-the-creator/c-programming-basics' // Add your repository link here
    }
  ]
};

export default function Projects() {
  return (
    <div className="page-container" style={{
      minHeight: '70vh',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '10px 40px 90px 60px'
    }}>
      {/* Academic Projects Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: '600',
          color: '#2D1A2C',
          marginBottom: '30px',
          paddingBottom: '10px',
          borderBottom: '3px solid #E8DCE8'
        }}>
          <span className="gradient-text">Academic</span> Projects
        </h2>
        
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {projects.academic.map((project) => (
            <ProjectCard key={project.id} project={project} showDemo={true} showStatus={true} />
          ))}
        </div>
      </div>

      {/* Hackathon Projects Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: '600',
          color: '#2D1A2C',
          marginBottom: '30px',
          paddingBottom: '10px',
          borderBottom: '3px solid #E8DCE8'
        }}>
          <span className="gradient-text">Hackathon</span> Projects
        </h2>
        
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {projects.hackathon.map((project) => (
            <ProjectCard key={project.id} project={project} showDemo={false} showStatus={true} isHackathon={true} />
          ))}
        </div>
      </div>

      {/* Programming Activities Section */}
      <div>
        <h2 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: '600',
          color: '#2D1A2C',
          marginBottom: '30px',
          paddingBottom: '10px',
          borderBottom: '3px solid #E8DCE8'
        }}>
          <span className="gradient-text">Programming</span> Activities
        </h2>
        
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {projects.activities.map((project) => (
            <ProjectCard key={project.id} project={project} showDemo={false} showStatus={false} />
          ))}
        </div>
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #6B3F69, #A376A2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .page-container {
            padding: 10px 16px 40px 16px !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .page-container {
            padding: 8px 12px 30px 12px !important;
          }
          
          .projects-grid {
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, showDemo, showStatus, isHackathon }) {
  const statusColors = {
    'Completed': '#4CAF50',
    'In Progress': '#FF9800',
    'Planned': '#2196F3'
  };

  return (
    <div className="project-card" style={{
      background: '#F5EEF0',
      borderRadius: '20px',
      padding: '12px',
      border: '1px solid #E8DCE8',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative'
    }}>
      {/* Status Badge - Only show for academic projects */}
      {showStatus && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '11px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          background: statusColors[project.status] || '#9E9E9E',
          color: 'white',
        }}>
          {project.status}
        </div>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: '18px',
        fontWeight: '600',
        color: '#2D1A2C',
        margin: '0 0 12px 0',
        paddingRight: showStatus ? '80px' : '0px',
        lineHeight: 1.3
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#8B7D8A',
        lineHeight: 1.6,
        margin: '0 0 16px 0',
        flex: 1
      }}>
        {project.description}
      </p>

      {/* Technologies - Regular tags for non-hackathon */}
      {!isHackathon && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '20px'
        }}>
          {project.technologies.map((tech, index) => (
            <span key={index} style={{
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              background: 'white',
              color: '#6B3F69',
              border: '1px solid #DDC3C3'
            }}>
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links Section */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: 'auto',
        flexWrap: 'wrap'
      }}>
        {isHackathon ? (
          // Hackathon Links - Wireframe, Proposal, Video Demo in one row without pipes
          <div style={{
            display: 'flex',
            gap: '8px',
            width: '100%'
          }}>
            {project.wireframeLink ? (
              <a 
                href={project.wireframeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: '#6B3F69',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#5A2D58';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#6B3F69';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Wireframe
              </a>
            ) : (
              <span style={{
                flex: 1,
                padding: '8px 12px',
                background: '#E8DCE8',
                color: '#8B7D8A',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'not-allowed',
                textAlign: 'center',
                display: 'inline-block'
              }}>
                Wireframe
              </span>
            )}

            {project.proposalLink ? (
              <a 
                href={project.proposalLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: 'transparent',
                  color: '#6B3F69',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: '500',
                  border: '2px solid #6B3F69',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#6B3F69';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#6B3F69';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Proposal
              </a>
            ) : (
              <span style={{
                flex: 1,
                padding: '8px 12px',
                background: '#E8DCE8',
                color: '#8B7D8A',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'not-allowed',
                textAlign: 'center',
                display: 'inline-block'
              }}>
                Proposal
              </span>
            )}

            {project.demoLink ? (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: 'transparent',
                  color: '#6B3F69',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: '500',
                  border: '2px solid #6B3F69',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#6B3F69';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#6B3F69';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Video Demo
              </a>
            ) : (
              <span style={{
                flex: 1,
                padding: '8px 12px',
                background: '#E8DCE8',
                color: '#8B7D8A',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'not-allowed',
                textAlign: 'center',
                display: 'inline-block'
              }}>
                Video Demo
              </span>
            )}
          </div>
        ) : (
          // Regular Links - Repository and Demo for Academic & Activities
          <>
            {/* Repository Link */}
            {project.repoLink ? (
              <a 
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 16px',
                  background: '#6B3F69',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#5A2D58';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#6B3F69';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Repository
              </a>
            ) : (
              <span style={{
                padding: '8px 16px',
                background: '#E8DCE8',
                color: '#8B7D8A',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'not-allowed',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Coming Soon
              </span>
            )}
            
            {/* Demo/Prototype Link - Only show for academic projects */}
            {showDemo && (
              <>
                {project.demoLink ? (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 16px',
                      background: 'transparent',
                      color: '#6B3F69',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      border: '2px solid #6B3F69',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#6B3F69';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#6B3F69';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    View Demo
                  </a>
                ) : (
                  <span style={{
                    padding: '8px 16px',
                    background: '#E8DCE8',
                    color: '#8B7D8A',
                    borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'not-allowed',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    No Demo
                  </span>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}