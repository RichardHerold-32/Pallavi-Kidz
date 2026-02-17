import { AboutSection } from "@/components/sections/AboutSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Pallavi Kidz",
  description:
    "Learn about Pallavi Kidz, our mission, vision, and commitment to providing quality early childhood education across multiple locations.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About Pallavi Kidz
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Pioneering excellence in early childhood education since our inception
          </p>
        </div>
      </section>

      <AboutSection
        title="Our Story"
        content="Pallavi Kidz was founded with a vision to provide world-class early childhood education that nurtures every aspect of a child's development. What started as a single preschool has now grown into a trusted chain of educational centers across multiple locations, touching the lives of thousands of children and families."
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
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
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">Our Vision</h3>
            <p className="text-text-muted">
              To be the most trusted name in early childhood education, creating
              future-ready learners who are confident, creative, and compassionate.
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 bg-accent-2 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">Our Mission</h3>
            <p className="text-text-muted">
              To provide a nurturing environment where children develop holistically
              through play-based learning, innovative curriculum, and personalized
              attention.
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 bg-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">Our Values</h3>
            <p className="text-text-muted">
              Excellence, integrity, compassion, and innovation guide everything
              we do. We believe in treating every child with respect and
              celebrating their uniqueness.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
            Why Choose Pallavi Kidz?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Child-Centric Approach
                </h3>
                <p className="text-text-muted">
                  Every child is unique, and our curriculum is designed to cater
                  to individual learning styles and developmental needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Experienced Faculty
                </h3>
                <p className="text-text-muted">
                  Our teachers are qualified, trained, and passionate about early
                  childhood education, ensuring the best care for your child.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Modern Facilities
                </h3>
                <p className="text-text-muted">
                  State-of-the-art classrooms, safe play areas, and
                  age-appropriate learning resources at all our locations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Holistic Development
                </h3>
                <p className="text-text-muted">
                  Focus on cognitive, social, emotional, and physical development
                  through a balanced curriculum.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Parent Partnership
                </h3>
                <p className="text-text-muted">
                  Regular communication and involvement of parents in their
                  child's learning journey through meetings and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
