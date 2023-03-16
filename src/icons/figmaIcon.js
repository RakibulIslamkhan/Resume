import * as React from "react"

const FigmaIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={45}
    height={45}
    {...props}
  >
    <path fill="#e64a19" d="M26 17h-8a7 7 0 1 1 0-14h8v14z" />
    <path fill="#7c4dff" d="M25 31h-7a7 7 0 1 1 0-14h7v14z" />
    <path fill="#66bb6a" d="M18 45a7 7 0 1 1 0-14h7v7a7 7 0 0 1-7 7z" />
    <path fill="#ff7043" d="M32 17h-7V3h7a7 7 0 1 1 0 14z" />
    <circle cx={32} cy={24} r={7} fill="#29b6f6" />
  </svg>
)

export default FigmaIcon
