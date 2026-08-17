function PawMark({ size = 28, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <ellipse cx="12" cy="26" rx="5" ry="6" />
        <ellipse cx="36" cy="26" rx="5" ry="6" />
        <ellipse cx="19" cy="14" rx="5" ry="6" />
        <ellipse cx="29" cy="14" rx="5" ry="6" />
        <ellipse cx="24" cy="36" rx="9" ry="7" />
      </g>
    </svg>
  )
}

export function PawPrint({ size = 20, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <ellipse cx="6" cy="14" rx="2.4" ry="2.8" />
        <ellipse cx="18" cy="14" rx="2.4" ry="2.8" />
        <ellipse cx="9.5" cy="8" rx="2.4" ry="2.8" />
        <ellipse cx="14.5" cy="8" rx="2.4" ry="2.8" />
        <ellipse cx="12" cy="18" rx="4.2" ry="3.4" />
      </g>
    </svg>
  )
}

export default PawMark