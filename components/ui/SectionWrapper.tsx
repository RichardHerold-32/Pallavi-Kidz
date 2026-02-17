import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "primary" | "secondary";
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  background = "white",
  id,
}) => {
  const bgStyles = {
    white: "bg-white",
    light: "bg-surface-light",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
