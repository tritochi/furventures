import { PawPrint } from './PawMark.jsx'

const PACK = [
  {
    emoji: '🦊',
    name: 'Milo the Fox',
    role: 'Head of Flavor',
    note: 'Finds the balance between adventurous and familiar.',
  },
  {
    emoji: '🐻',
    name: 'Bea the Bear',
    role: 'Comfort-Food Lead',
    note: 'Every con day deserves a warm, hearty bite.',
  },
  {
    emoji: '🐰',
    name: 'Radish the Rabbit',
    role: 'Keep-It-Fresh',
    note: 'Keeps the line moving and the energy friendly.',
  },
]

function Pack() {
  return (
    <section id="pack" className="section pack">
      <h2>Meet the Pack</h2>
      <p className="section-lead">
        The little crew and characters behind the counter — a placeholder look at
        who makes the fur corner run.
      </p>
      <div className="pack-grid">
        {PACK.map((member) => (
          <article key={member.name} className="pack-card">
            <div className="pack-avatar" aria-hidden="true">
              <span>{member.emoji}</span>
              <PawPrint size={16} />
            </div>
            <h3>{member.name}</h3>
            <p className="pack-role">{member.role}</p>
            <p className="pack-note">{member.note} [Placeholder]</p>
          </article>
        ))}
      </div>
      <p className="placeholder-note">[Placeholder characters — replace with the real team or mascots.]</p>
    </section>
  )
}

export default Pack