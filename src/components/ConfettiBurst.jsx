import { PawPrint } from './PawMark.jsx'

// Randomized paw print "confetti" particles (deterministic pseudo-random data).
const PAWS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${6 + (i * 89) % 88}%`,
  delay: `${(i % 7) * 0.14}s`,
  dx: `${(i % 2 === 0 ? 1 : -1) * (50 + (i % 5) * 22)}px`,
  dy: `${-100 - (i % 4) * 45}px`,
  rot: `${(i % 2 === 0 ? 1 : -1) * (18 + (i % 6) * 14)}deg`,
}))

function ConfettiBurst() {
  return (
    <div className="confetti" aria-hidden="true">
      {PAWS.map((p) => (
        <PawPrint
          key={p.id}
          size={18 + (p.id % 3) * 8}
          className="confetti-paw"
          style={{
            left: p.left,
            animationDelay: p.delay,
            '--dx': p.dx,
            '--dy': p.dy,
            '--rot': p.rot,
          }}
        />
      ))}
    </div>
  )
}

export default ConfettiBurst