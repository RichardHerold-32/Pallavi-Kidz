"use client";

import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input, TextArea } from "@/components/ui/Input";

interface EnquiryFormProps {
  branchName?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  branchName,
  className = "",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, this would send to Google Sheets via API
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Form submitted:", data);
    
    // Track analytics event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submission", {
        form_name: "enquiry_form",
        branch: branchName || "general",
      });
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
        <div className="text-center">
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
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
          <p className="text-text-muted">
            We've received your enquiry. Our team will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-bold text-secondary mb-6">
        Enquire Now
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Parent Name"
          name="parentName"
          type="text"
          placeholder="Enter your name"
          required
        />
        
        <Input
          label="Child Name"
          name="childName"
          type="text"
          placeholder="Enter child's name"
          required
        />
        
        <Input
          label="Child Age"
          name="childAge"
          type="text"
          placeholder="e.g., 3 years"
          required
        />
        
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          required
        />
        
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        
        <div className="w-full">
          <label
            htmlFor="program"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Program of Interest <span className="text-danger ml-1">*</span>
          </label>
          <select
            id="program"
            name="program"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a program</option>
            <option value="playgroup">Playgroup (1.5-2.5 years)</option>
            <option value="nursery">Nursery (2.5-3.5 years)</option>
            <option value="lkg">Lower KG (3.5-4.5 years)</option>
            <option value="ukg">Upper KG (4.5-5.5 years)</option>
          </select>
        </div>
        
        <TextArea
          label="Message"
          name="message"
          placeholder="Any specific questions or requirements?"
          rows={4}
        />

        {branchName && (
          <input type="hidden" name="branch" value={branchName} />
        )}
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
};
