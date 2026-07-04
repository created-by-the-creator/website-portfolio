// src/components/ButterflyCursor.jsx
import { useState, useEffect } from 'react'

export default function ButterflyCursor() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [rotation, setRotation] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                     ('ontouchstart' in window) ||
                     navigator.maxTouchPoints > 0
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mouse tracking - only on desktop
  useEffect(() => {
    if (isMobile) return

    let prevX = mousePos.x
    let prevY = mousePos.y

    const handleMouseMove = (e) => {
      const newX = e.clientX
      const newY = e.clientY
      
      if (prevX !== -1000 && prevY !== -1000) {
        const angle = Math.atan2(newY - prevY, newX - prevX) * (180 / Math.PI)
        setRotation(angle)
      }
      
      setMousePos({ x: newX, y: newY })
      prevX = newX
      prevY = newY
    }
    
    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMobile])

  // Don't render on mobile
  if (isMobile) return null

  const isVisible = mousePos.x !== -1000

  return (
    <>
      {/* Global Styles */}
      <style>{`
        @keyframes flapLeft {
          0% { transform: rotate(0deg) scaleX(1); }
          100% { transform: rotate(-5deg) scaleX(0.8); }
        }

        @keyframes flapRight {
          0% { transform: rotate(0deg) scaleX(1); }
          100% { transform: rotate(5deg) scaleX(0.8); }
        }

        @keyframes floatParticle {
          0% { transform: translate(-50%, -50%) scale(1) translateY(0px); }
          100% { transform: translate(-50%, -50%) scale(0.5) translateY(-20px); }
        }

        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(0); }
        }

        /* Hide default cursor on desktop */
        body {
          cursor: none;
        }

        a, button, [role="button"], input, textarea, select {
          cursor: pointer;
        }

        /* Show default cursor on interactive elements */
        a:hover, button:hover, [role="button"]:hover {
          cursor: pointer;
        }

        ::selection {
          background: #6B3F69;
          color: white;
        }
      `}</style>

      {/* Butterfly */}
      <div
        style={{
          position: 'fixed',
          left: mousePos.x + 'px',
          top: mousePos.y + 'px',
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(1.2)`,
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          filter: 'drop-shadow(0 0 30px rgba(163, 118, 162, 0.6))',
          width: '60px',
          height: '60px',
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Left wing */}
          <path 
            d="M 50 50 C 30 20, 5 30, 10 50 C 15 70, 30 65, 50 50" 
            fill="#A376A2" 
            opacity="0.9"
            style={{ animation: 'flapLeft 0.3s ease-in-out infinite alternate' }}
          />
          <path 
            d="M 45 45 C 35 30, 20 38, 23 50 C 26 62, 35 58, 45 45" 
            fill="#D4A0D3" 
            opacity="0.7"
            style={{ animation: 'flapLeft 0.3s ease-in-out infinite alternate' }}
          />
          <circle cx="25" cy="45" r="4" fill="#6B3F69" opacity="0.5" />
          <circle cx="30" cy="38" r="3" fill="#6B3F69" opacity="0.4" />
          
          {/* Right wing */}
          <path 
            d="M 50 50 C 70 20, 95 30, 90 50 C 85 70, 70 65, 50 50" 
            fill="#A376A2" 
            opacity="0.9"
            style={{ animation: 'flapRight 0.3s ease-in-out infinite alternate' }}
          />
          <path 
            d="M 55 45 C 65 30, 80 38, 77 50 C 74 62, 65 58, 55 45" 
            fill="#D4A0D3" 
            opacity="0.7"
            style={{ animation: 'flapRight 0.3s ease-in-out infinite alternate' }}
          />
          <circle cx="75" cy="45" r="4" fill="#6B3F69" opacity="0.5" />
          <circle cx="70" cy="38" r="3" fill="#6B3F69" opacity="0.4" />
          
          {/* Body */}
          <ellipse cx="50" cy="50" rx="3" ry="15" fill="#5A2D59" />
          <circle cx="50" cy="35" r="4" fill="#5A2D59" />
          <path d="M 48 33 Q 42 25 40 20" stroke="#5A2D59" strokeWidth="1.5" fill="none" />
          <path d="M 52 33 Q 58 25 60 20" stroke="#5A2D59" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="20" r="2" fill="#6B3F69" />
          <circle cx="60" cy="20" r="2" fill="#6B3F69" />
          
          {/* Glowing particles on butterfly */}
          <circle cx="40" cy="55" r="2" fill="#D4A0D3" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="55" r="2" fill="#D4A0D3" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" repeatCount="indefinite" begin="0.3s" />
          </circle>
        </svg>
      </div>

      {/* Trail Particles */}
      {isVisible && (
        <div style={{ position: 'fixed', zIndex: 9998, pointerEvents: 'none' }}>
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const distance = 20 + Math.random() * 30
            const px = mousePos.x + Math.cos(angle) * distance
            const py = mousePos.y + Math.sin(angle) * distance
            const size = 2 + Math.random() * 4
            const opacity = 0.1 + Math.random() * 0.3
            const delay = Math.random() * 2
            
            return (
              <div
                key={i}
                style={{
                  position: 'fixed',
                  left: px + 'px',
                  top: py + 'px',
                  width: size + 'px',
                  height: size + 'px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, #D4A0D3, transparent)`,
                  pointerEvents: 'none',
                  opacity: opacity,
                  transform: 'translate(-50%, -50%)',
                  animation: 'floatParticle 2s ease-in-out infinite alternate',
                  animationDelay: delay + 's',
                }}
              />
            )
          })}
        </div>
      )}
    </>
  )
}