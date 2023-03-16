import * as React from "react"

const ReactIcon = (props) => (
  <svg
    {...props}
    height={30}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.232 23 20.463"
  >
    <title>{"React Logo"}</title>
    <circle r={2.05} fill="#61dafb" />
    <g stroke="#61dafb" fill="none">
      <ellipse rx={11} ry={4.2} />
      <ellipse rx={11} ry={4.2} transform="rotate(60)" />
      <ellipse rx={11} ry={4.2} transform="rotate(120)" />
    </g>
  </svg>
)

export default ReactIcon
