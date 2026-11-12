"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  ShieldCheck,
  Users,
  MessageSquarePlus,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/MotionPrimitives";
import {
  CONCERN_CATEGORIES,
  YEAR_OF_STUDY_OPTIONS,
  submitCampaignFeedback,
  type SubmissionIntent,
  type SubmissionResult,
} from "@/lib/submissions";

interface FormErrors {
  email?: string;
  yearOfStudy?: string;
  category?: string;
  message?: string;
  consent?: string;
}

export function GetInvolvedSection() {
  const [intent, setIntent] = useState<SubmissionIntent>("concern");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState<string>(YEAR_OF_STUDY_OPTIONS[0]);
  const [category, setCategory] = useState<string>(CONCERN_CATEGORIES[0]);
  const [message, setMessage] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleIntentSwitch = (nextIntent: SubmissionIntent) => {
    setIntent(nextIntent);
    if (nextIntent === "volunteer") {
      setCategory("Campaign Volunteering / Involvement");
    } else if (category === "Campaign Volunteering / Involvement") {
      setCategory(CONCERN_CATEGORIES[0]);
    }
    setResult(null);
    setSubmitError(null);
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedEmail = email.trim();

    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address or leave this field blank.";
    }
    if (!yearOfStudy) {
      nextErrors.yearOfStudy = "Please select your year of study.";
    }
    if (!category) {
      nextErrors.category = "Please select a category.";
    }
    if (message.trim().length < 10) {
      nextErrors.message =
        "Please share at least 10 characters so your concern or idea is clear.";
    }
    if (!consentAccepted) {
      nextErrors.consent =
        "Please confirm you understand how your submission is handled.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setResult(null);

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionResult = await submitCampaignFeedback({
        intent,
        name: name.trim() || undefined,
        email: email.trim() || undefined,
        yearOfStudy,
        category,
        message: message.trim(),
        consentAccepted,
        submittedAt: new Date().toISOString(),
      });
      setResult(submissionResult);
      if (submissionResult.whatsappUrl) {
        window.open(
          submissionResult.whatsappUrl,
          "_blank",
          "noopener,noreferrer"
        );
      }
      setMessage("");
      setName("");
      setEmail("");
      setConsentAccepted(false);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong while submitting. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="get-involved"
      className="border-b border-slate-200 bg-ivory py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                Get Involved
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Let&apos;s Build a Better ALU Together.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                This campaign is not just about one candidate. It is about
                understanding what matters to students and working together
                towards meaningful improvements.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <MessageSquarePlus
                      className="mt-0.5 h-5 w-5 shrink-0 text-navy-900"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-navy-900">
                        Share a Student Concern or Suggestion
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        Tell us what is affecting your day-to-day experience at
                        ALU—whether it is transport, campus utilities, academic
                        deadlines, or student representation. You may submit
                        anonymously by leaving Name and Email blank.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <Users
                      className="mt-0.5 h-5 w-5 shrink-0 text-navy-900"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-navy-900">
                        Volunteer &amp; Contribute
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        Interested in helping host listening sessions, gathering
                        student feedback, or supporting campaign outreach? Switch
                        to &ldquo;Join the Campaign&rdquo; and leave your
                        contact details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div
                  role="tablist"
                  aria-label="Choose submission type"
                  className="grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={intent === "concern"}
                    onClick={() => handleIntentSwitch("concern")}
                    className={`rounded-md px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                      intent === "concern"
                        ? "bg-navy-900 text-white shadow-2xs"
                        : "text-slate-700 hover:text-navy-900"
                    }`}
                  >
                    Share a Concern / Idea
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={intent === "volunteer"}
                    onClick={() => handleIntentSwitch("volunteer")}
                    className={`rounded-md px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                      intent === "volunteer"
                        ? "bg-navy-900 text-white shadow-2xs"
                        : "text-slate-700 hover:text-navy-900"
                    }`}
                  >
                    Join the Campaign
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="campaign-name"
                        className="block text-sm font-semibold text-navy-900"
                      >
                        Name{" "}
                        <span className="font-normal text-slate-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="campaign-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="campaign-email"
                        className="block text-sm font-semibold text-navy-900"
                      >
                        Email{" "}
                        <span className="font-normal text-slate-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="campaign-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) {
                            setErrors((prev) => ({ ...prev, email: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "campaign-email-error" : undefined
                        }
                        placeholder="you@alustudent.com"
                        className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
                          errors.email
                            ? "border-red-600 focus:border-red-600"
                            : "border-slate-300 focus:border-navy-900"
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="campaign-email-error"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="campaign-year"
                        className="block text-sm font-semibold text-navy-900"
                      >
                        Year of Study
                      </label>
                      <select
                        id="campaign-year"
                        name="yearOfStudy"
                        value={yearOfStudy}
                        onChange={(e) => setYearOfStudy(e.target.value)}
                        aria-invalid={Boolean(errors.yearOfStudy)}
                        className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-navy-900 focus:outline-none"
                      >
                        {YEAR_OF_STUDY_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="campaign-category"
                        className="block text-sm font-semibold text-navy-900"
                      >
                        Category of Concern
                      </label>
                      <select
                        id="campaign-category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        aria-invalid={Boolean(errors.category)}
                        className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-navy-900 focus:outline-none"
                      >
                        {CONCERN_CATEGORIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="campaign-message"
                      className="block text-sm font-semibold text-navy-900"
                    >
                      {intent === "volunteer"
                        ? "How would you like to get involved?"
                        : "Message or Suggestion"}
                    </label>
                    <textarea
                      id="campaign-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors((prev) => ({ ...prev, message: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "campaign-message-error" : undefined
                      }
                      placeholder={
                        intent === "volunteer"
                          ? "Share your interests, skills, or how you would like to support student listening and outreach..."
                          : "Describe the challenge, context, or practical improvement you would like the SRC to prioritise..."
                      }
                      className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
                        errors.message
                          ? "border-red-600 focus:border-red-600"
                          : "border-slate-300 focus:border-navy-900"
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="campaign-message-error"
                        className="mt-1.5 text-xs font-medium text-red-700"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <input
                        id="campaign-consent"
                        name="consent"
                        type="checkbox"
                        checked={consentAccepted}
                        onChange={(e) => {
                          setConsentAccepted(e.target.checked);
                          if (errors.consent) {
                            setErrors((prev) => ({
                              ...prev,
                              consent: undefined,
                            }));
                          }
                        }}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby="campaign-privacy-note"
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-navy-900"
                      />
                      <div className="text-xs leading-relaxed text-slate-600">
                        <label
                          htmlFor="campaign-consent"
                          className="font-semibold text-navy-900"
                        >
                          Consent &amp; Privacy Notice
                        </label>
                        <p id="campaign-privacy-note" className="mt-1">
                          Submitting opens WhatsApp with your message pre-filled
                          for Godson&apos;s campaign line (+250 799 908 557).
                          Please do not include sensitive personal information.
                          Messages are used solely for student representation
                          and campaign coordination.
                        </p>
                      </div>
                    </div>
                    {errors.consent && (
                      <p className="mt-2 text-xs font-medium text-red-700">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                    >
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <p>{submitError}</p>
                    </div>
                  )}

                  {result && (
                    <div
                      role="status"
                      className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold">
                          Ready to Send on WhatsApp
                        </p>
                        <p className="mt-1 leading-relaxed">{result.message}</p>
                        {result.whatsappUrl && (
                          <a
                            href={result.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-navy-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
                          >
                            Open in WhatsApp
                            <ExternalLink
                              className="h-3.5 w-3.5 text-gold-400"
                              aria-hidden="true"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <ShieldCheck
                        className="h-4 w-4 text-navy-900"
                        aria-hidden="true"
                      />
                      Sends directly to +250 799 908 557 via WhatsApp.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Preparing WhatsApp..." : "Send via WhatsApp"}
                      <Send className="h-4 w-4 text-gold-400" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

