// src/pages/Skills.jsx
import { skillGroups } from '../data/skills'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as VscIcons from 'react-icons/vsc'

const iconMap = {
  SiPython: SiIcons.SiPython,
  SiCplusplus: SiIcons.SiCplusplus,
  SiC: SiIcons.SiC,
  SiHtml5: SiIcons.SiHtml5,
  SiReact: SiIcons.SiReact,
  SiJavascript: SiIcons.SiJavascript,
  FaCss3Alt: FaIcons.FaCss3Alt,
  SiGit: SiIcons.SiGit,
  SiGithub: SiIcons.SiGithub,
  SiFigma: SiIcons.SiFigma,
  VscVscode: VscIcons.VscVscode,
  FaBrain: FaIcons.FaBrain,
  FaUsers: FaIcons.FaUsers,
  FaComment: FaIcons.FaComment
}

function getSkillLayout(count) {
  if (count === 4) {
    return {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: 'repeat(2, max-content)',
      gap: '16px 24px',
      justifyContent: 'center',
      justifyItems: 'center'
    }
  }

  if (count === 3) {
    return {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: 'repeat(2, max-content)',
      gap: '16px 24px',
      justifyContent: 'center',
      justifyItems: 'center'
    }
  }

  return {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(72px, max-content))',
    justifyContent: 'center',
    justifyItems: 'center',
    gap: '16px 24px'
  }
}

export default function Skills() {
  return (
    <div className="page-container" style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px 40px 60px'
    }}>
      <div style={{ width: '100%' }}>
        <h1 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: '50px', 
          fontWeight: 'bold', 
          color: '#2D1A2C',
          margin: '0 0 8px 0',
          lineHeight: 1.2
        }}>
          My <span className="gradient-text">Skills</span>
        </h1>

        <div className="subtitle" style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: '22px',
          color: '#A376A2',
          fontWeight: 500,
          marginBottom: '40px'
        }}>
          Technologies and tools I work with
        </div>

        <div className="skills-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '24px',
          marginTop: '20px'
        }}>
          {skillGroups.map((group) => (
            <div 
              key={group.category} 
              className="card"
              style={{ 
                padding: '24px 20px 28px',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(107, 63, 105, 0.08)',
                border: '1px solid #F5EEF0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <h3 style={{ 
                fontFamily: 'Lexend, sans-serif', 
                fontSize: '18px', 
                color: '#6B3F69',
                marginBottom: '20px',
                fontWeight: 600,
                textAlign: 'center'
              }}>
                {group.category}
              </h3>
              <div className="skill-items" style={getSkillLayout(group.skills.length)}>
                {group.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon]
                  const isThreeItemCenter = group.skills.length === 3 && index === 2
                  return (
                    <div 
                      key={skill.name}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px',
                        ...(isThreeItemCenter
                          ? {
                              gridColumn: '1 / -1',
                              justifySelf: 'center'
                            }
                          : {})
                      }}
                    >
                      {IconComponent && (
                        <IconComponent 
                          size={32} 
                          style={{
                            color: '#6B3F69',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                          }}
                        />
                      )}
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        color: '#8B7D8A',
                        textAlign: 'center'
                      }}>
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}