import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { FacultyMember } from "@/data/types";

interface FacultyCardsProps {
  faculty: FacultyMember[];
  title?: string;
}

export const FacultyCards: React.FC<FacultyCardsProps> = ({
  faculty,
  title = "Our Faculty",
}) => {
  return (
    <SectionWrapper background="white" id="faculty">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          {title}
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Experienced and caring educators dedicated to your child's growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member) => (
          <Card key={member.id} hover className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent-2 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-1">
              {member.name}
            </h3>
            <p className="text-accent-1 font-semibold mb-3">{member.role}</p>
            <p className="text-sm text-text-muted mb-2">
              {member.qualification}
            </p>
            <p className="text-sm text-text-muted">{member.experience}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
