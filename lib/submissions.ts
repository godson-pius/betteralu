import { CAMPAIGN_CONFIG } from "@/lib/campaign";

export type SubmissionIntent = "concern" | "volunteer";

export interface CampaignSubmissionPayload {
  intent: SubmissionIntent;
  name?: string;
  email?: string;
  yearOfStudy: string;
  category: string;
  message: string;
  consentAccepted: boolean;
  submittedAt: string;
}

export interface SubmissionResult {
  status: "whatsapp-ready" | "sent";
  message: string;
  whatsappUrl?: string;
}

export const YEAR_OF_STUDY_OPTIONS = [
  "Year 1",
  "Year 2",
  "Year 3",
  "Prefer not to say",
] as const;

export const CONCERN_CATEGORIES = [
  "Transportation",
  "Internet & Campus Utilities",
  "Academic Coordination",
  "Student Voice & Accountability",
  "Campus Life & Wellbeing",
  "Campaign Volunteering / Involvement",
  "Other",
] as const;

export function buildWhatsAppUrl(payload: CampaignSubmissionPayload): string {
  const intentLabel =
    payload.intent === "volunteer"
      ? "Join the Campaign Team"
      : "Student Concern / Suggestion";

  const lines = [
    `*ALU SRC Campaign — ${intentLabel}*`,
    `• Name: ${payload.name ?? "Not provided"}`,
    `• Email: ${payload.email ?? "Not provided"}`,
    `• Year of Study: ${payload.yearOfStudy}`,
    `• Category: ${payload.category}`,
    "",
    "*Message:*",
    payload.message,
  ];

  const encodedText = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${CAMPAIGN_CONFIG.candidate.whatsappNumber}?text=${encodedText}`;
}

/**
 * Prepares the submission for direct WhatsApp delivery to Godson's campaign number
 * (and optionally posts to `NEXT_PUBLIC_CAMPAIGN_FORM_ENDPOINT` if configured).
 */
export async function submitCampaignFeedback(
  payload: CampaignSubmissionPayload
): Promise<SubmissionResult> {
  const whatsappUrl = buildWhatsAppUrl(payload);
  const endpoint = process.env.NEXT_PUBLIC_CAMPAIGN_FORM_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        "Unable to deliver your submission right now. Please use the WhatsApp button below to send it directly."
      );
    }
  }

  return {
    status: "whatsapp-ready",
    whatsappUrl,
    message: `Your message is ready to send directly to Godson on WhatsApp (${CAMPAIGN_CONFIG.candidate.whatsappDisplay}). If WhatsApp did not open automatically, click the button below.`,
  };
}
