import { useId } from 'react'

/**
 * Animated inline-SVG "photo" placeholder (no external assets).
 * Ken Burns drift on the scene, floating sparkles, and a neon label chip.
 * Replace with a real <img> once actual photos exist.
 */
function PlaceholderImage({
  label,
  emoji = '🐾',
  from = '#f2dfc8',
  to = '#c08a3e',
  sparkle = '✦',
}) {
  const gradId = useId()
  const glowId = useId()
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label={`Placeholder photo: ${label}`} className="placeholder-photo">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <radialGradient id={glowId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="rgba(255,253,248,0.55)" />
          <stop offset="1" stopColor="rgba(255,253,248,0)" />
        </radialGradient>
      </defs>

      {/* Photo "backdrop" layer (Ken Burns) */}
      <g className="pp-scene">
        <rect width="320" height="200" rx="14" fill={`url(#${gradId})`} />
        <circle cx="58" cy="44" r="42" fill="rgba(255,253,248,0.16)" />
        <circle cx="272" cy="150" r="56" fill="rgba(58,43,32,0.10)" />
        <rect y="158" width="320" height="42" fill="rgba(58,43,32,0.14)" />
      </g>

      {/* Emoji subject (gentle bob + glow) */}
      <g className="pp-subject">
        <circle cx="160" cy="96" r="44" fill={`url(#${glowId})`} />
        <text x="160" y="104" textAnchor="middle" fontSize="72">
          {emoji}
        </text>
      </g>

      {/* Floating sparkles */}
      <g className="pp-sparkles">
        <text x="44" y="70" fontSize="18" fill="rgba(255,253,248,0.85)">{sparkle}</text>
        <text x="266" y="92" fontSize="14" fill="rgba(255,253,248,0.7)">{sparkle}</text>
        <text x="90" y="150" fontSize="13" fill="rgba(255,253,248,0.6)">{sparkle}</text>
        <text x="232" y="52" fontSize="16" fill="rgba(255,253,248,0.75)">{sparkle}</text>
      </g>

      {/* Label chip */}
      <rect className="pp-chip" x="24" y="146" width="150" height="30" rx="999" fill="rgba(255,253,248,0.62)" />
      <text x="99" y="166" textAnchor="middle" fontSize="15" fontWeight="700" fill="#3a2b20">
        {label}
      </text>
    </svg>
  )
}

export default PlaceholderImage