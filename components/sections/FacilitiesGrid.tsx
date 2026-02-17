import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Facility } from "@/data/types";

interface FacilitiesGridProps {
  facilities: Facility[];
  title?: string;
}

const facilityIcons: Record<string, JSX.Element> = {
  classroom: (
    <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-9-5v7a2 2 0 002 2h14a2 2 0 002-2v-7l-9 5z" />
  ),
  playground: (
    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  library: (
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
  activity: (
    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  ),
  cctv: (
    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  ),
  transport: (
    <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
  ),
};

export const FacilitiesGrid: React.FC<FacilitiesGridProps> = ({
  facilities,
  title = "Our Facilities",
}) => {
  return (
    <SectionWrapper background="light" id="facilities">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          {title}
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          World-class facilities to ensure the best learning environment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <Card key={facility.id} hover>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-2 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {facilityIcons[facility.id] || facilityIcons.classroom}
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {facility.name}
                </h3>
                <p className="text-text-muted text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
