import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface AboutSectionProps {
  title?: string;
  content: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Us",
  content,
}) => {
  return (
    <SectionWrapper background="light" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          {title}
        </h2>
        <p className="text-lg text-text-dark leading-relaxed">
          {content}
        </p>
      </div>
    </SectionWrapper>
  );
};
