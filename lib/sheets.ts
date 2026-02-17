// Google Sheets integration for lead routing
// This is a placeholder implementation. In production, you would:
// 1. Set up Google Apps Script Web App as webhook endpoint
// 2. Use environment variables for the Web App URL
// 3. Handle authentication and error cases properly

interface EnquiryData {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  email: string;
  program: string;
  message?: string;
  branch?: string;
  timestamp?: string;
}

const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || "";

export const submitToGoogleSheets = async (
  data: EnquiryData
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Add timestamp
    const enrichedData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    // In production, this would send to Google Sheets via Apps Script Web App
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrichedData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit to Google Sheets");
      }

      return { success: true };
    } else {
      // For development/demo purposes, just log the data
      console.log("Google Sheets submission (demo mode):", enrichedData);
      return { success: true };
    }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

// Alternative: Submit to multiple sheets based on branch
export const submitToBranchSheet = async (
  data: EnquiryData,
  branchSlug: string
): Promise<{ success: boolean; error?: string }> => {
  // You could have different webhook URLs for different branches
  const branchWebhookUrl = process.env[
    `NEXT_PUBLIC_SHEETS_WEBHOOK_${branchSlug.toUpperCase().replace(/-/g, "_")}`
  ] as string | undefined;

  return submitToGoogleSheets({
    ...data,
    branch: branchSlug,
  });
};
