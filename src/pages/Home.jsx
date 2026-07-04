// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ['Computer Science Student', 'A student, developer and creator']

  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <div className="page-container" style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 20px 10px 60px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '700px'
      }}>
        <div style={{ 
          textAlign: 'center',
          width: '100%'
        }}>
          <h1 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'clamp(32px, 6vw, 50px)',
            fontWeight: 'bold',
            color: '#2D1A2C',
            margin: '0 0 8px 0',
            lineHeight: 1.2
          }}>
            Hi, I'm <span className="gradient-text">Venice Anne</span>
          </h1>

          <div className="subtitle" style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'clamp(16px, 3vw, 22px)',
            color: '#A376A2',
            fontWeight: 500,
            marginBottom: '24px',
            minHeight: '32px'
          }}>
            {displayText}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: 'clamp(18px, 3vw, 24px)',
              background: '#A376A2',
              marginLeft: '2px',
              animation: 'blink 0.8s infinite',
              verticalAlign: 'middle'
            }} />
          </div>

          <p className="description" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: '#8B7D8A',
            lineHeight: 1.8,
            marginBottom: '36px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0 10px'
          }}>
            A driven Computer Science student passionate about building, learning, and solving problems through technology and creativity.
          </p>

          <div style={{ 
            maxWidth: '500px', 
            margin: '0 auto',
            padding: '0 10px'
          }}>
            <div className="button-row" style={{ 
              display: 'flex', 
              gap: '14px', 
              marginBottom: '14px'
            }}>
              <Link to="/projects" style={{
                flex: 1,
                padding: '14px 28px',
                background: '#6B3F69',
                color: 'white',
                border: '2px solid #6B3F69',
                borderRadius: '10px',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                textAlign: 'center',
                transition: 'all 0.3s',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
              }}>
                View Projects
              </Link>
              
              <Link to="/contact" style={{
                flex: 1,
                padding: '14px 28px',
                background: 'transparent',
                color: '#6B3F69',
                border: '2px solid #6B3F69',
                borderRadius: '10px',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                textAlign: 'center',
                transition: 'all 0.3s',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
              }}>
                Contact Me
              </Link>
            </div>

            <a href="/resume.pdf" download style={{
              display: 'flex',
              width: '100%',
              padding: '14px 28px',
              background: '#F5EEF0',
              color: '#6B3F69',
              border: '2px solid #6B3F69',
              borderRadius: '10px',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              textAlign: 'center',
              transition: 'all 0.3s',
              boxSizing: 'border-box',
              minHeight: '48px',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              Download CV / Resume
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6B3F69, #A376A2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Mobile-specific fixes */
        @media (max-width: 768px) {
          .page-container {
            padding: 20px 16px !important;
            min-height: 70vh !important;
          }
          
          .button-row {
            flex-direction: column !important;
            gap: 10px !important;
          }
          
          .button-row a {
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            min-height: 44px !important;
          }

          .page-container a[download] {
            padding: 12px 20px !important;
            font-size: 14px !important;
            min-height: 44px !important;
          }
        }

        @media (max-width: 480px) {
          .page-container {
            padding: 70px 30px !important;
          }

          .button-row a {
            font-size: 13px !important;
            padding: 10px 16px !important;
            min-height: 42px !important;
          }

          .page-container a[download] {
            font-size: 13px !important;
            padding: 10px 16px !important;
            min-height: 42px !important;
          }
        }
      `}</style>
    </div>
  )
}