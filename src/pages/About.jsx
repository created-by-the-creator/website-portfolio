// src/pages/About.jsx
import profilePic from '../assets/profile.png'

export default function About() {
  return (
    <div className="page-container" style={{ 
      minHeight: '75vh',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1100px', 
      margin: '0 auto', 
      padding: '40px 20px 40px 60px'  
    }}>
      
      {/* Hero Section */}
      <div className="two-column-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        width: '100%',
        marginBottom: '80px'
      }}>
        
        {/* Left Side - Text */}
        <div style={{ paddingRight: '20px' }}>
          <h1 style={{ 
            fontFamily: 'Lexend, sans-serif', 
            fontSize: '50px', 
            fontWeight: 'bold', 
            color: '#2D1A2C',
            margin: '0 0 8px 0',
            lineHeight: 1.2
          }}>
            About <span className="gradient-text">Me</span>
          </h1>

          <div className="subtitle" style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: '22px',
            color: '#A376A2',
            fontWeight: 500,
            marginBottom: '24px',
            minHeight: '32px'
          }}>
            Get to know me better
          </div>

          <div style={{ 
            padding: '0',
            marginBottom: '36px'
          }}>
            <p className="description" style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '16px', 
              color: '#8B7D8A', 
              lineHeight: 1.8,
              marginBottom: '16px',
              textAlign: 'justify'
            }}>
              I am an aspiring developer and Computer Science 
              student dedicated to learning, creating, and growing in 
              the field of technology. I enjoy building projects that 
              strengthen my technical foundation while allowing me to 
              explore creative approaches to problem-solving.
            </p>
            <p className="description" style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '16px', 
              color: '#8B7D8A', 
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              Through each experience, I aim to develop solutions 
              that are efficient, thoughtful, and centered on 
              making a positive impact.
            </p>
          </div>
        </div>

        {/* Right Side - Picture */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="profile-image-container" style={{
            width: '300px',
            height: '330px',
            borderRadius: '180px',
            background: 'linear-gradient(135deg, #6B3F69, #A376A2, #DDC3C3)',
            padding: '4px',
            boxShadow: '0 20px 60px rgba(107, 63, 105, 0.2)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '260px',
              overflow: 'hidden',
              background: '#F5EEF0'
            }}>
              <img 
                src={profilePic} 
                alt="Venice Anne"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Additional Sections */}
      <div className="two-column-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        width: '100%'
      }}>
        
        {/* Background / Story */}
        <div className="card" style={{
          background: '#F5EEF0',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid #E8DCE8'
        }}>
          <h2 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: '24px',
            fontWeight: '600',
            color: '#2D1A2C',
            margin: '0 0 12px 0'
          }}>
            <span className="gradient-text">Background</span> / Story
          </h2>
          <p className="description" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#8B7D8A',
            lineHeight: 1.8,
            margin: 0,
            textAlign: 'justify'
          }}>
            I chose to pursue Computer Science out of curiosity about how technology works and how ideas can be transformed into meaningful digital solutions. Over time, that curiosity evolved into a growing passion for creating websites and developing systems that address real-world problems and improve people's experiences.
          </p>
        </div>

        {/* Education */}
        <div className="card" style={{
          background: '#F5EEF0',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid #E8DCE8'
        }}>
          <h2 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: '24px',
            fontWeight: '600',
            color: '#2D1A2C',
            margin: '0 0 12px 0'
          }}>
            <span className="gradient-text">Education</span>
          </h2>
          <p className="description" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#8B7D8A',
            lineHeight: 1.8,
            margin: 0,
            textAlign: 'justify'
          }}>
            Currently pursuing a Bachelor of Science in Computer Science at Batangas State University – The National Engineering University (TNEU), Alangilan Campus. My academic experience focuses on developing a strong foundation in software development, system design, analytical thinking, and emerging technologies.
          </p>
        </div>

        {/* Achievements / Certifications */}
        <div className="card" style={{
          background: '#F5EEF0',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid #E8DCE8'
        }}>
          <h2 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: '24px',
            fontWeight: '600',
            color: '#2D1A2C',
            margin: '0 0 12px 0'
          }}>
            <span className="gradient-text">Achievements</span> / Certifications
          </h2>
          <p className="description" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#8B7D8A',
            lineHeight: 1.8,
            margin: 0,
            textAlign: 'justify'
          }}>
            Actively engaged in leadership, student involvement, and organizational initiatives through participation in academic and student organizations. Contributed to activities and programs under ACCESS and CICS-SC.
          </p>
        </div>

        {/* Goals / Aspirations */}
        <div className="card" style={{
          background: '#F5EEF0',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid #E8DCE8'
        }}>
          <h2 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: '24px',
            fontWeight: '600',
            color: '#2D1A2C',
            margin: '0 0 12px 0'
          }}>
            <span className="gradient-text">Goals</span> / Aspirations
          </h2>
          <p className="description" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#8B7D8A',
            lineHeight: 1.8,
            margin: 0,
            textAlign: 'justify'
          }}>
            As an aspiring developer, I am currently exploring the field of web development while remaining open to discovering and growing in other areas of technology. My goal is to create innovative, user-centered, and impactful digital solutions.
          </p>
        </div>

      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #6B3F69, #A376A2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  )
}