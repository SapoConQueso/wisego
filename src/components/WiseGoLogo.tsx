interface WiseGoLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WiseGoLogo({ size = "md", className = "" }: WiseGoLogoProps) {
  const dimensions = {
    sm: { size: "w-8 h-8", icon: "text-sm", arrow: "w-2 h-2" },
    md: { size: "w-12 h-12", icon: "text-lg", arrow: "w-3 h-3" },
    lg: { size: "w-16 h-16", icon: "text-2xl", arrow: "w-4 h-4" }
  }[size];

  return (
    <div className={`${dimensions.size} ${className} relative`}>
      {/* Main circle with blue background */}
      <div className="w-full h-full bg-primary rounded-full border-2 border-primary shadow-lg flex items-center justify-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"></div>
        
        {/* W letter with stylized design */}
        <div className="relative z-10 flex items-center justify-center">
          <span className={`text-white font-bold ${dimensions.icon} font-title`}>W</span>
          {/* Arrow accent in orange */}
          <div className={`absolute -top-1 -right-1 ${dimensions.arrow} bg-accent rounded-full border border-white`}>
            <div className="w-full h-full bg-accent rounded-full"></div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
      </div>
    </div>
  );
}