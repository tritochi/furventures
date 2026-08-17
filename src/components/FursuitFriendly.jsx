import { PawPrint } from './PawMark.jsx'

const POINTS = [
  'Straw-friendly drinks and easy finger food',
  'Clear queues so you stay in the flow of the con',
  'Calm, shaded spots to take a break between panels',
  'Quick service built for busy convention schedules',
]

function FursuitFriendly() {
  return (
    <section id="fursuit" className="section fursuit">
      <h2>Fursuit-Friendly</h2>
      <p className="section-lead">
        We design our food stalls around long, full-suit con days — so the only
        thing you take off is the worry.
      </p>
      <ul className="fursuit-list">
        {POINTS.map((point) => (
          <li key={point}>
            <PawPrint size={18} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="placeholder-note">[Placeholder content — replace with real details.]</p>
    </section>
  )
}

export default FursuitFriendly