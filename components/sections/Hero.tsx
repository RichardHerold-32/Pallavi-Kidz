import React from "react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

interface HeroProps {
  headline: string;
  subtext: string;
  branchName?: string;
  showForm?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subtext,
  branchName,
  showForm = true,
}) => {
  return (
    <section className="bg-gradient-to-br from-primary to-accent-2 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {subtext}
            </p>
            {branchName && (
              <div className="flex items-center space-x-2 text-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{branchName}</span>
              </div>
            )}
          </div>

          {/* Form */}
          {showForm && (
            <div>
              <EnquiryForm branchName={branchName} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
