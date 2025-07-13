interface WiseGoLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WiseGoLogo({ size = "md", className = "" }: WiseGoLogoProps) {
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }[size];

  return (
    <div className={`${sizeClass} ${className} relative`}>
      <div className="w-full h-full bg-white rounded-full border-2 border-primary flex items-center justify-center">
        <span className="text-primary font-bold text-lg">W</span>
      </div>
    </div>
  );
}