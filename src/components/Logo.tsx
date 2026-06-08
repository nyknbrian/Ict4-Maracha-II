/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-12',
  showText = true,
  textSize = 'md',
  textColor = 'text-slate-900',
  isLight = false,
}) => {
  // exact SVG representations of the sheared hexagonal bars
  // Left-most bar (1), and right-most bar (5) are light steely blue
  // Middle three bars (2, 3, 4) are deep navy blue
  const outerColor = isLight ? '#94a3b8' : '#5a738e';
  const centerColor = isLight ? '#f8fafc' : '#1a2e4c';

  const textClassMap = {
    sm: 'text-sm tracking-widest font-bold',
    md: 'text-lg tracking-wider font-extrabold',
    lg: 'text-2xl tracking-widest font-extrabold',
    xl: 'text-3xl tracking-widest font-black',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bar 1 (Leftmost) */}
        <path
          d="M 18 42 L 26 38 L 26 68 L 18 72 Z"
          fill={outerColor}
          className="transition-all duration-300 hover:opacity-90"
        />
        {/* Bar 2 */}
        <path
          d="M 33 26 L 41 22 L 41 82 L 33 86 Z"
          fill={centerColor}
          className="transition-all duration-300 hover:opacity-90"
        />
        {/* Bar 3 (Middle) */}
        <path
          d="M 48 10 L 56 6 L 56 94 L 48 98 Z"
          fill={centerColor}
          className="transition-all duration-300 hover:opacity-90"
        />
        {/* Bar 4 */}
        <path
          d="M 63 26 L 71 22 L 71 82 L 63 86 Z"
          fill={centerColor}
          className="transition-all duration-300 hover:opacity-90"
        />
        {/* Bar 5 (Rightmost) */}
        <path
          d="M 78 42 L 86 38 L 86 68 L 78 72 Z"
          fill={outerColor}
          className="transition-all duration-300 hover:opacity-90"
        />
      </svg>
      {showText && (
        <span
          className={`font-display uppercase font-extrabold ${isLight ? 'text-white' : textColor} ${textClassMap[textSize]}`}
          style={{ letterSpacing: '0.08em' }}
        >
          ICT4Maracha
        </span>
      )}
    </div>
  );
};
export default Logo;
