import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-6 ${
        hover ? "transition-transform hover:scale-105 hover:shadow-lg" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
