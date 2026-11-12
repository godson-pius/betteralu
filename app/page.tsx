import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VisionSection } from "@/components/VisionSection";
import { PrioritiesSection } from "@/components/PrioritiesSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { AccountabilitySection } from "@/components/AccountabilitySection";
import { GetInvolvedSection } from "@/components/GetInvolvedSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: CAMPAIGN_CONFIG.candidate.fullName,
      description:
        "Candidate for Student Representative Council (SRC) President at African Leadership University (ALU). Entrepreneurial Leadership student, software engineer, technology innovator, mentor, and community leader.",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: CAMPAIGN_CONFIG.candidate.university,
      },
    },
    {
      "@type": "WebSite",
      name: "Godson Azubuike | ALU SRC Presidential Campaign",
      description: CAMPAIGN_CONFIG.messaging.heroSupportingText,
    },
  ],
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <PrioritiesSection />
        <LeadershipSection />
        <AccountabilitySection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
