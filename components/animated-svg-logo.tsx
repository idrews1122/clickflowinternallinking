"use client"

export default function AnimatedSVGLogo() {
  return (
    <div className="h-8 w-auto">
      <svg width="140" height="32" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Logo text - this would be the actual Clickflow text */}
        <g className="logo-text">
          <path
            d="M15 8C8.925 8 4 12.925 4 19C4 25.075 8.925 30 15 30H25C31.075 30 36 25.075 36 19C36 12.925 31.075 8 25 8H15Z"
            fill="#1A1A1A"
          />
          <path d="M45 8V30H50V8H45Z" fill="#1A1A1A" />
          <path d="M55 8V30H60V8H55Z" fill="#1A1A1A" />
          <path
            d="M75 8C68.925 8 64 12.925 64 19C64 25.075 68.925 30 75 30H85C91.075 30 96 25.075 96 19C96 12.925 91.075 8 85 8H75Z"
            fill="#1A1A1A"
          />
          <path d="M105 8V30H110V8H105Z" fill="#1A1A1A" />
          <path d="M115 8V30H120V19L130 30H136V8H131V19L121 8H115Z" fill="#1A1A1A" />
        </g>

        {/* Animated flowing water */}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6">
              <animate attributeName="offset" values="-0.5;1.5" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#0EA5E9">
              <animate attributeName="offset" values="0;2" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#14B8A6">
              <animate attributeName="offset" values="0.5;2.5" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <mask id="flowMask">
            <rect x="0" y="28" width="140" height="12" fill="white" />
          </mask>
        </defs>

        {/* The flowing water element */}
        <g mask="url(#flowMask)">
          <rect x="0" y="28" width="140" height="12" fill="url(#flowGradient)" />

          {/* Add some wave effect */}
          <path
            d="M0,32 
                  Q10,30 20,32 
                  T40,32 
                  T60,32 
                  T80,32 
                  T100,32 
                  T120,32 
                  T140,32
                  V40 H0 Z"
            fill="url(#flowGradient)"
          >
            <animate
              attributeName="d"
              values="
                M0,32 Q10,30 20,32 T40,32 T60,32 T80,32 T100,32 T120,32 T140,32 V40 H0 Z;
                M0,32 Q10,34 20,32 T40,32 T60,32 T80,32 T100,32 T120,32 T140,32 V40 H0 Z;
                M0,32 Q10,30 20,32 T40,32 T60,32 T80,32 T100,32 T120,32 T140,32 V40 H0 Z
              "
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  )
}
