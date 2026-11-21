import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LeadershipExperienceSection } from "@/components/LeadershipExperienceSection";
import { GeancoSection } from "@/components/GeancoSection";
import { VenturesSection } from "@/components/VenturesSection";
import { ReadinessSection } from "@/components/ReadinessSection";
import { VisionSection } from "@/components/VisionSection";
import { PrioritiesSection } from "@/components/PrioritiesSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { AccountabilitySection } from "@/components/AccountabilitySection";
import { ClosingMessageSection } from "@/components/ClosingMessageSection";
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
        "Candidate for Student Representative Council (SRC) President at African Leadership University (ALU). CPS Course Representative, Entrepreneurial Leadership student, Founder of World Brain Technology Limited, educator, mentor, and community leader.",
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
        <LeadershipExperienceSection />
        <GeancoSection />
        <VenturesSection />
        <ReadinessSection />
        <VisionSection />
        <PrioritiesSection />
        <LeadershipSection />
        <AccountabilitySection />
        <ClosingMessageSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
