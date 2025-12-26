type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
};

export function ImagePlaceholder({ 
  label = "Image Required", 
  className = "",
  size = "full"
}: ImagePlaceholderProps) {
  const sizeClasses = {
    sm: "h-32",
    md: "h-64",
    lg: "h-96",
    full: "h-full min-h-[200px]"
  };

  return (
    <div 
      className={`${sizeClasses[size]} w-full flex items-center justify-center bg-gold/10 border-2 border-dashed border-gold/30 rounded-3xl ${className}`}
    >
      <p className="text-gold/70 text-xs font-medium text-center px-4 leading-tight">
        {label}
      </p>
    </div>
  );
}

