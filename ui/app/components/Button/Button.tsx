import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  size?: keyof typeof sizeClassNames;
  className?: string;
}

const sizeClassNames: Record<string, string> = {
  sm: "px-2 h-8 text-sm",
  md: "px-3 h-10 text-base",
  lg: "px-4 h-12 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  size = "md",
  className,
  children,
}) => {
  return (
    <>
      <button
        className={`border border-slate-300 rounded ${sizeClassNames[size]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
