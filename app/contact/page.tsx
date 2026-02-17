import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Pallavi Kidz",
  description:
    "Get in touch with Pallavi Kidz for admissions, enquiries, and more information about our preschool programs.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <SectionWrapper background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Whether you're interested in admissions, have questions about our
              programs, or want to schedule a visit, we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Phone</h3>
                  <p className="text-text-muted">+91 9876543210</p>
                  <p className="text-text-muted text-sm mt-1">
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

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
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Email</h3>
                  <p className="text-text-muted">info@pallavikidz.com</p>
                  <p className="text-text-muted">admissions@pallavikidz.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-1 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">
                    Working Hours
                  </h3>
                  <p className="text-text-muted">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-text-muted">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-text-muted">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-3 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">
                    Social Media
                  </h3>
                  <p className="text-text-muted">Follow us for updates and news</p>
                  <div className="flex space-x-3 mt-2">
                    <a
                      href="#"
                      className="text-primary hover:text-opacity-80 transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-opacity-80 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-opacity-80 transition-colors"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <EnquiryForm />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Visit a School Near You
          </h2>
          <p className="text-lg text-text-muted mb-8">
            Want to see our facilities in person? Schedule a visit to any of our
            branches. Our team will give you a comprehensive tour and answer all
            your questions.
          </p>
          <a
            href="/schools"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-opacity-90 transition-colors"
          >
            Find Your Nearest School
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
