const ITEMS = [
  '🐾 FURVENTURES',
  'SUIT UP!',
  '🍜 CON FOOD COURT',
  'NYA~',
  '☕ FURSUIT CAFÉ',
  '🥞 PAW-SOME BITES',
]

function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee