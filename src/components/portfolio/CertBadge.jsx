import React from "react";

const ISSUER_COLORS = {
  Microsoft: "#0078D4",
  CompTIA: "#E4002B",
  ISC2: "#1B6CA8",
  Cisco: "#1BA0D7",
  Fortinet: "#EE3124",
  IBM: "#0F62FE",
  Google: "#4285F4",
  "Red Hat": "#EE0000",
  Datadog: "#632CA6",
  "Linux Foundation": "#3DAEE9",
  VMware: "#607078",
};

// Forme du badge selon le niveau : hexagone (Associate/Expert), cercle (Fundamentals), carré arrondi (Professional)
export default function CertBadge({ code, issuer, level, size = 96 }) {
  const color = ISSUER_COLORS[issuer] || "#0078D4";
  const shape = level === "Fundamentals" ? "circle" : level === "Professional" ? "square" : "hexagon";
  const gid = `g-${(code || "").replace(/[^a-z0-9]/gi, "")}-${(issuer || "").replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {shape === "hexagon" && (
        <polygon points="50,3 91,26 91,74 50,97 9,74 9,26" fill={`url(#${gid})`} stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      )}
      {shape === "circle" && <circle cx="50" cy="50" r="46" fill={`url(#${gid})`} stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />}
      {shape === "square" && <rect x="7" y="7" width="86" height="86" rx="18" fill={`url(#${gid})`} stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />}
      {issuer === "Microsoft" && (
        <g transform="translate(38 18)">
          <rect width="11" height="11" fill="#F25022" />
          <rect x="13" width="11" height="11" fill="#7FBA00" />
          <rect y="13" width="11" height="11" fill="#00A4EF" />
          <rect x="13" y="13" width="11" height="11" fill="#FFB900" />
        </g>
      )}
      <text x="50" y={issuer === "Microsoft" ? 64 : 54} textAnchor="middle" fill="#fff" fontFamily="Inter, sans-serif" fontWeight="700" fontSize={code && code.length > 6 ? 9 : 12}>{code}</text>
      <text x="50" y={issuer === "Microsoft" ? 77 : 67} textAnchor="middle" fill="#fff" fillOpacity="0.8" fontFamily="Inter, sans-serif" fontSize="6" letterSpacing="0.5">{issuer.toUpperCase()}</text>
    </svg>
  );
}