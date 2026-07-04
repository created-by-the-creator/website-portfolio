import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '10px 20px' }}>
      <h1 style={{ fontFamily: 'Lexend, sans-serif', fontSize: '48px', fontWeight: 'bold', color: '#6B3F69', marginBottom: '40px' }}>Experience</h1>
      {experiences.map((item, index) => (
        <div key={item.id} style={{ position: 'relative', paddingLeft: '40px' }}>
          {index < experiences.length - 1 && (
            <div style={{ position: 'absolute', left: '11px', top: '28px', bottom: '0', width: '2px', background: 'rgba(163,118,162,0.2)' }} />
          )}
          <div style={{ position: 'absolute', left: '0', top: '6px', width: '24px', height: '24px', borderRadius: '50%', background: '#6B3F69' }} />
          <div className="card" style={{ padding: '24px', marginBottom: '24px', marginLeft: '16px' }}>
            <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: '18px', color: '#6B3F69', margin: '0 0 4px' }}>{item.title}</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#A376A2', margin: '0 0 8px' }}>{item.period}</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#8B7D8A', margin: 0 }}>{item.organization}</p>
          </div>
        </div>
      ))}
    </div>
  )
}