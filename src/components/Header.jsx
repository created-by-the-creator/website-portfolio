// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('header')) {
        setMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [menuOpen])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #eee',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        position: 'relative'
      }}>
        {/* Logo */}
        <Link to="/" style={{ 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center'
        }}>
          <img 
            src={logo} 
            alt="Venice Logo"
            style={{
              height: isMobile ? '45px' : '60px',
              width: 'auto',
              display: 'block',
              transition: 'height 0.3s ease'
            }}
          />
        </Link>

        {/* Desktop Nav - hide on mobile */}
        <div style={{ 
          display: isMobile ? 'none' : 'flex', 
          gap: '32px',
          alignItems: 'center'
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              style={({ isActive }) => ({
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: isActive ? '#6B3F69' : '#8B7D8A',
                textDecoration: 'none',
                paddingBottom: '4px',
                borderBottom: isActive ? '2px solid #6B3F69' : '2px solid transparent',
                transition: 'all 0.3s ease',
                position: 'relative'
              })}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.color = '#6B3F69'
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.color = '#8B7D8A'
                }
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button - show only on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: isMobile ? 'flex' : 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '28px',
            color: '#6B3F69',
            padding: '8px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            position: 'relative',
            zIndex: 51
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(107, 63, 105, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Nav - Overlay style */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 49,
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu */}
          <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '280px',
            height: '100vh',
            background: 'white',
            padding: '80px 30px 30px',
            boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
            zIndex: 50,
            animation: 'slideIn 0.3s ease',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '14px 0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: isActive ? '#6B3F69' : '#8B7D8A',
                  textDecoration: 'none',
                  borderBottom: '1px solid #f5f5f5',
                  transition: 'all 0.3s ease',
                  paddingLeft: isActive ? '12px' : '0',
                  borderLeft: isActive ? '3px solid #6B3F69' : '3px solid transparent'
                })}
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* Social icons or extra info in mobile menu */}
            <div style={{
              marginTop: 'auto',
              paddingTop: '20px',
              borderTop: '1px solid #eee'
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#A376A2',
                textAlign: 'center'
              }}>
                ✨ Let's connect!
              </p>
            </div>
          </div>
        </>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  )
}

export default Header