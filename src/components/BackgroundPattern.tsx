import { ReactNode } from "react";

interface BackgroundPatternProps {
  children: ReactNode;
  className?: string;
}

export function BackgroundPattern({ children, className = "" }: BackgroundPatternProps) {
  return (
    <div 
      className={`min-h-screen relative overflow-hidden ${className}`}
      style={{
        background: `
          linear-gradient(45deg, transparent 30%, hsl(0 0% 92%) 30%, hsl(0 0% 92%) 70%, transparent 70%),
          linear-gradient(-45deg, transparent 30%, hsl(0 0% 95%) 30%, hsl(0 0% 95%) 70%, transparent 70%),
          linear-gradient(135deg, transparent 30%, hsl(0 0% 88%) 30%, hsl(0 0% 88%) 70%, transparent 70%)
        `,
        backgroundSize: '60px 60px, 60px 60px, 60px 60px',
        backgroundPosition: '0 0, 30px 30px, 30px 0'
      }}
    >
      {/* Wave patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 400 800" className="absolute top-0 left-0 opacity-20">
          <path
            d="M0,100 Q100,50 200,100 T400,100 L400,200 Q300,150 200,200 T0,200 Z"
            fill="hsl(0 0% 85%)"
          />
          <path
            d="M0,300 Q100,250 200,300 T400,300 L400,400 Q300,350 200,400 T0,400 Z"
            fill="hsl(0 0% 90%)"
          />
          <path
            d="M0,500 Q100,450 200,500 T400,500 L400,600 Q300,550 200,600 T0,600 Z"
            fill="hsl(0 0% 85%)"
          />
        </svg>
      </div>
      {children}
    </div>
  );
}