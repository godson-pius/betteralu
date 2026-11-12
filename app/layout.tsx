import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

function getMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

const campaignTitle =
  "Godson Azubuike | Candidate for SRC President — ALU";
const campaignDescription =
  "Together, We Make ALU Better. One community. Shared responsibility. A better ALU. Explore Godson Azubuike's vision, practical priorities, and accountability plan for ALU SRC. Election Day: 25 November 2026.";

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: campaignTitle,
    template: "%s | Godson Azubuike for SRC President",
  },
  description: campaignDescription,
  applicationName: "Godson Azubuike — ALU SRC Campaign",
  keywords: [
    "Godson Azubuike",
    "Godson Pius",
    "ALU SRC President",
    "African Leadership University",
    "Student Representative Council",
    "Together We Make ALU Better",
    "ALU SRC Election 2026",
  ],
  authors: [{ name: "Godson Azubuike" }],
  creator: "Godson Azubuike",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: campaignTitle,
    description:
      "Together, We Make ALU Better. One community. Shared responsibility. A better ALU. Explore the vision, practical priorities & accountability plan. Election Day: 25 Nov 2026.",
    url: "/",
    siteName: "Godson Azubuike — ALU SRC Presidential Campaign",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: campaignTitle,
    description:
      "Together, We Make ALU Better. One community. Shared responsibility. A better ALU. Election Day: 25 November 2026.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-navy-900 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
