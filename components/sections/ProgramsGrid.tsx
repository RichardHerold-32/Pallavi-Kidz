import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Program } from "@/data/types";

interface ProgramsGridProps {
  programs: Program[];
  title?: string;
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({
  programs,
  title = "Our Programs",
}) => {
  return (
    <SectionWrapper background="white" id="programs">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          {title}
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Age-appropriate programs designed to nurture every child's potential
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program) => (
          <Card key={program.id} hover className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">
              {program.name}
            </h3>
            <p className="text-sm text-accent-1 font-semibold mb-3">
              {program.ageGroup}
            </p>
            <p className="text-text-muted text-sm mb-3">
              {program.description}
            </p>
            <p className="text-xs text-text-muted">
              Duration: {program.duration}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
