"use client"

import { colors } from "@/lib/colors"

export function SalaryCycleVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 px-6">
      <style>{`
        @keyframes repeat-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .repeat-text {
          animation: repeat-rotate 4s linear infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Salary */}
      <div className="text-center">
        <p className="font-semibold text-lg" style={{ color: colors.charcoal }}>
          SALARY
        </p>
      </div>

      {/* Arrow down */}
      <div className="h-8 flex items-center justify-center">
        <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
          <line x1="1" y1="0" x2="1" y2="24" stroke={colors.maroon} strokeWidth="2" />
          <polygon points="1,32 -2,24 4,24" fill={colors.maroon} />
        </svg>
      </div>

      {/* Distribution Methods (Horizontal) */}
      <div className="flex items-center gap-12 justify-center">
        {/* Debit Orders */}
        <div className="text-center">
          <p className="font-semibold text-lg" style={{ color: colors.charcoal }}>
            DEBIT ORDERS
          </p>
        </div>

        {/* OR Divider */}
        <div 
          className="h-12 w-px"
          style={{ backgroundColor: colors.sandLight }}
        />

        {/* Accounts */}
        <div className="text-center">
          <p className="font-semibold text-lg" style={{ color: colors.charcoal }}>
            ACCOUNTS
          </p>
        </div>
      </div>

      {/* Arrow down */}
      <div className="h-8 flex items-center justify-center">
        <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
          <line x1="1" y1="0" x2="1" y2="24" stroke={colors.maroon} strokeWidth="2" />
          <polygon points="1,32 -2,24 4,24" fill={colors.maroon} />
        </svg>
      </div>

      {/* Repeat with rotation */}
      <div className="relative h-16 w-16 flex items-center justify-center">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          className="repeat-text"
        >
          {/* Circular arrow */}
          <path
            d="M 28 8 A 20 20 0 1 1 48 28"
            stroke={colors.maroon}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Arrow head */}
          <polygon points="48,28 43,25 45,32" fill={colors.maroon} />
        </svg>
        <span
          className="absolute text-center font-semibold text-sm"
          style={{ color: colors.charcoal }}
        >
          REPEAT
        </span>
      </div>
    </div>
  )
}
