// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: '#FAF8FA',
      borderTop: '1px solid #eee',
      padding: '30px 20px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center'
        }}>
          <a 
            href="https://github.com/created-by-the-creator" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#8B7D8A',
              fontSize: '22px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#6B3F69'
              e.currentTarget.style.transform = 'scale(1.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8B7D8A'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/venice-anne-manacop" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#8B7D8A',
              fontSize: '22px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#6B3F69'
              e.currentTarget.style.transform = 'scale(1.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8B7D8A'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:manacopveniceanne@gmail.com" 
            style={{
              color: '#8B7D8A',
              fontSize: '22px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#6B3F69'
              e.currentTarget.style.transform = 'scale(1.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8B7D8A'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#A376A2',
            margin: 0
          }}>
            © {currentYear} Venice Anne. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#C4B3C3',
            margin: 0
          }}>
            Made with <bold>love</bold> and lots of <bold>milo</bold>.
          </p>
        </div>

        {/* Mobile responsive styles */}
        <style>{`
          @media (max-width: 768px) {
            footer {
              padding: 20px 16px 16px !important;
            }
            
            footer .social-icons {
              gap: 20px !important;
            }
            
            footer .social-icons a {
              font-size: 20px !important;
            }
            
            footer .copyright {
              font-size: 12px !important;
            }
            
            footer .sub-text {
              font-size: 11px !important;
            }
          }
        `}</style>
      </div>
    </footer>
  )
}

export default Footer