interface WiseGoLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WiseGoLogo({ size = "md", className = "" }: WiseGoLogoProps) {
  const dimensions = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  }[size];

  return (
    <img 
      src="/lovable-uploads/2ea8f684-4e74-415b-b5d2-9026d653377f.png"
      alt="WiseGO Logo"
      className={`${dimensions} ${className} object-contain`}
    />
  );
}