// Google Analytics 4 event tracking helpers

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = (
  action: string,
  params?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, branch?: string) => {
  event("form_submission", {
    category: "engagement",
    label: formName,
    branch: branch || "general",
  });
};

// Track CTA button clicks
export const trackCTAClick = (buttonName: string, location: string) => {
  event("cta_click", {
    category: "engagement",
    label: buttonName,
    location: location,
  });
};

// Track branch page views
export const trackBranchView = (branchName: string) => {
  event("branch_view", {
    category: "navigation",
    label: branchName,
  });
};

// Track program interest
export const trackProgramInterest = (programName: string, branch?: string) => {
  event("program_interest", {
    category: "engagement",
    label: programName,
    branch: branch || "general",
  });
};
