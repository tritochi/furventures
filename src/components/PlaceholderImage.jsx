import { useId } from 'react'

/**
 * A self-contained placeholder "photo" rendered as inline SVG.
 * No external image is loaded, so it always displays and is privacy-friendly.
 * Replace with a real <img> once actual photos exist.
 */
function PlaceholderImage({ label, emoji = '🐾', from = '#f2dfc8', to = '#c08a3e' }) {
  const gradId = useId()
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label={`Placeholder photo: ${label}`}
      className="placeholder-photo"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="320" height="200" rx="14" fill={`url(#${gradId})`} />
      <text x="160" y="104" textAnchor="middle" fontSize="72">
        {emoji}
      </text>
      <rect x="24" y="146" width="150" height="30" rx="999" fill="rgba(255,253,248,0.62)" />
      <text
        x="99"
        y="166"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="#3a2b20"
      >
        {label}
      </text>
    </svg>
  )
}

export default PlaceholderImage