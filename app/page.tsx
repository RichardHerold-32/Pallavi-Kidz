import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { FacilitiesGrid } from "@/components/sections/FacilitiesGrid";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { branches } from "@/data/branches";

export default function HomePage() {
  // Get sample programs and facilities from first branch
  const sampleBranch = branches[0];

  return (
    <>
      <Hero
        headline="Welcome to Pallavi Kidz"
        subtext="Nurturing Young Minds with Excellence in Early Childhood Education"
        showForm={true}
      />

      <AboutSection
        title="About Pallavi Kidz"
        content="Pallavi Kidz is a leading preschool chain committed to providing quality early childhood education across multiple locations. With a child-centric approach, modern facilities, and experienced educators, we create an environment where children thrive, learn, and develop essential skills for life. Our holistic curriculum focuses on cognitive, social, emotional, and physical development, ensuring every child receives the best foundation for their educational journey."
      />

      <ProgramsGrid
        programs={sampleBranch.programs}
        title="Our Programs"
      />

      <FacilitiesGrid
        facilities={sampleBranch.facilities}
        title="World-Class Facilities"
      />

      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Find a School Near You
          </h2>
          <p className="text-lg text-text-muted mb-8">
            With {branches.length}+ locations across the city, there's a Pallavi Kidz
            preschool near you. Explore our branches and find the perfect fit for
            your child.
          </p>
          <Link href="/schools">
            <Button variant="primary" size="lg">
              View All Schools
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      <TestimonialsSlider
        testimonials={sampleBranch.testimonials}
        title="What Parents Say About Us"
      />

      <SectionWrapper background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule a visit to any of our branches and experience the Pallavi
            Kidz difference. Our team is ready to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schools">
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90">
                Find a School
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
