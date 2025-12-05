import React from "react";

function Logo({ width, height }: { width: number; height: number }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 128 128"
        role="img"
        aria-labelledby="title desc"
      >
        <title id="title">Health Plus Symbol</title>
        <desc id="desc">
          Stylish medical cross centered on a gradient circular badge with a
          subtle shadow and highlight.
        </desc>

        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>

          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset in="SourceAlpha" dy="4" result="off" />
            <feGaussianBlur in="off" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0.25 0"
              result="shadow"
            />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#shadow)">
          <circle cx="64" cy="64" r="52" fill="url(#grad)" />
        </g>

        <circle
          cx="64"
          cy="64"
          r="52"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />

        <ellipse
          cx="48"
          cy="44"
          rx="28"
          ry="12"
          fill="rgba(255,255,255,0.08)"
          transform="rotate(-22 48 44)"
        />

        <g transform="translate(64,64)" fill="#047857">
          <rect x="-10" y="-30" width="20" height="60" rx="6" />
          <rect x="-30" y="-10" width="60" height="20" rx="6" />
        </g>
      </svg>
    </>
  );
}

export default Logo;
