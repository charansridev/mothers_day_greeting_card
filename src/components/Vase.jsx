export default function Vase({ pickedFlowers, flowerData }) {
  const picked = flowerData.filter(f => pickedFlowers.includes(f.id))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="picked-stems">
        {picked.map((flower) => (
          <div className="picked-stem" key={flower.id}>
            <span className="stem-flower">{flower.emoji}</span>
            <div className="stem-line" />
          </div>
        ))}
      </div>

      <svg width="120" height="90" viewBox="0 0 120 90">
        <defs>
          <linearGradient id="vaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#d4b87a" />
            <stop offset="40%"  stopColor="#e8d090" />
            <stop offset="100%" stopColor="#c8a860" />
          </linearGradient>
        </defs>
        <path d="M30 10 Q28 50 20 80 Q20 88 60 88 Q100 88 100 80 Q92 50 90 10 Z"
              fill="url(#vaseGrad)" stroke="#c4a860" strokeWidth="1.5"/>
        <ellipse cx="60" cy="10" rx="30" ry="5" fill="#e8d090" stroke="#c4a860" strokeWidth="1"/>
        <path d="M38 40 Q60 36 82 40" stroke="rgba(255,255,255,0.35)"
              strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  )
}