export interface ContactChannel {
  id: "email" | "instagram" | "linkedin" | "community";
  label: string;
  /**
   * Set `value` and `href` once your official campaign channel is active.
   * Leave `configured: false` to display a clean, honest placeholder state
   * without inventing fake contact details.
   */
  value: string;
  href: string | null;
  configured: boolean;
  description: string;
}

export const CAMPAIGN_CONFIG = {
  candidate: {
    fullName: "Godson Azubuike",
    heroIntro: "Godson Azubuike | Candidate for SRC President",
    position: "Candidate for SRC President",
    university: "African Leadership University",
    universityShort: "ALU",
    electionDate: "TBD",
    whatsappNumber: "250799908557",
    whatsappDisplay: "+250 799 908 557",
    /**
     * PORTRAIT CONFIGURATION
     * ----------------------
     * To use your real campaign portrait:
     * 1. Place your photo in `public/images/candidate-portrait.jpg` (or .png / .webp).
     * 2. Update `src` below to `"/images/candidate-portrait.jpg"` and set `isPlaceholder: false`.
     */
    portrait: {
      src: "/images/Godson Nnamdi Azubuike SRC PC.jpeg",
      alt: "Portrait of Godson Azubuike, Candidate for SRC President at African Leadership University",
      isPlaceholder: false,
      replacementPath: "public/images/Godson Nnamdi Azubuike SRC PC.jpeg",
    },
  },

  messaging: {
    slogan: "TOGETHER, WE MAKE ALU BETTER.",
    supportingStatement: "One community. Shared responsibility. A better ALU.",
    heroSupportingText:
      "An ALU where every student is heard, every concern matters, and progress is something we build together.",
    coreBeliefs: [
      "I believe leadership is about listening to people, understanding their challenges, representing their interests and taking practical steps towards addressing them.",
      "I am running to help build an SRC that is accessible, responsive, transparent and accountable to students.",
      "Leadership should not be about one person making all the decisions. It should be about bringing people together, creating opportunities for everyone to contribute and working collectively towards meaningful progress.",
    ],
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "My Vision", href: "#vision" },
    { label: "Priorities", href: "#priorities" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    heading: "Leadership Begins With Listening.",
    intro:
      "I am a student of Entrepreneurial Leadership at African Leadership University (ALU), a software engineer, technology innovator, mentor, and community leader.",
    philosophyQuote:
      "I believe leadership is not about having all the answers or doing everything yourself. It is about listening, empowering people, creating room for others to contribute and providing the guidance needed to move forward.",
    experiences: [
      {
        title: "Student Representation & Coordination at ALU",
        detail:
          "Working alongside peers to surface student concerns, coordinate initiatives, and bridge communication across campus.",
      },
      {
        title: "Mentoring & Teaching Over 200 Learners",
        detail:
          "Guiding learners through technical and personal growth with patience, structure, and practical support.",
      },
      {
        title: "Technology Entrepreneurship & Product Development",
        detail:
          "Building user-centred software solutions by listening closely to real needs and iterating with discipline.",
      },
      {
        title: "Community & Faith-Based Leadership",
        detail:
          "Serving communities with integrity, empathy, and a commitment to shared responsibility.",
      },
      {
        title: "Team Collaboration & Project Coordination",
        detail:
          "Bringing diverse contributors together around clear goals, transparent timelines, and mutual accountability.",
      },
    ],
  },

  vision: {
    heading: "What Kind of ALU Do We Want to Build Together?",
    statement:
      "To contribute to an ALU community where students feel heard, supported, represented and empowered to participate in shaping their university experience.",
    principles: [
      {
        number: "01",
        title: "LISTEN",
        description:
          "Understand the real experiences, concerns and aspirations of students.",
      },
      {
        number: "02",
        title: "REPRESENT",
        description:
          "Ensure student voices are communicated clearly and responsibly to relevant university stakeholders.",
      },
      {
        number: "03",
        title: "ACT",
        description:
          "Follow up on concerns, advocate for practical improvements and communicate progress.",
      },
    ],
  },

  priorities: {
    heading: "Real Concerns. Practical Action.",
    disclaimer:
      "The items below represent proposed actions and areas of advocacy. Where changes depend on university departments or external providers, the SRC's role is to gather evidence, represent students responsibly, and advocate persistently—not to promise unilateral authority.",
    items: [
      {
        id: "transportation",
        number: "01",
        label: "PRIORITY 01: TRANSPORTATION",
        shortTitle: "Transportation",
        headline: "Making the Journey to School Better.",
        description:
          "Students should have access to reliable and well-coordinated transportation arrangements.",
        scopeNote: "Proposed SRC advocacy & student data coordination",
        actions: [
          "Understand transportation challenges through student feedback.",
          "Document common routes, waiting times and peak demand.",
          "Engage relevant university stakeholders and transport providers.",
          "Advocate for improved schedules and reliable communication.",
        ],
      },
      {
        id: "utilities",
        number: "02",
        label: "PRIORITY 02: INTERNET AND CAMPUS UTILITIES",
        shortTitle: "Internet & Campus Utilities",
        headline: "An Environment That Supports Learning.",
        description:
          "Access to reliable internet and functional campus facilities is essential to the student experience.",
        scopeNote: "Proposed SRC reporting channel & facilities advocacy",
        actions: [
          "Document recurring internet connectivity challenges.",
          "Engage relevant IT and facilities departments.",
          "Establish a structured channel for reporting infrastructure issues.",
          "Advocate for timely maintenance and transparent updates.",
        ],
      },
      {
        id: "academics",
        number: "03",
        label: "PRIORITY 03: ACADEMIC COORDINATION",
        shortTitle: "Academic Coordination",
        headline: "Better Coordination. Better Learning.",
        description:
          "Students should not have to navigate avoidable clashes between multiple major assessments and deadlines.",
        scopeNote: "Proposed academic rep collaboration & faculty advocacy",
        actions: [
          "Gather evidence of overlapping deadlines.",
          "Engage course representatives and academic coordinators.",
          "Advocate for better visibility and coordination of major assessments.",
          "Explore a shared academic assessment calendar.",
        ],
      },
      {
        id: "student-voice",
        number: "04",
        label: "PRIORITY 04: STUDENT VOICE AND ACCOUNTABILITY",
        shortTitle: "Student Voice & Accountability",
        headline: "Your Voice Should Lead to Action.",
        description:
          "Students deserve accessible ways to raise concerns and understand what happens after they do.",
        scopeNote: "Direct SRC commitment & governance practice",
        actions: [
          "Establish accessible student feedback channels.",
          "Hold regular student engagement sessions.",
          "Track concerns and their progress.",
          "Share regular SRC accountability updates.",
        ],
      },
    ],
  },

  leadership: {
    heading: "Leadership Is More Than Holding a Position.",
    quote:
      "I don't believe leadership means having the loudest voice in the room. Sometimes, it means creating room for other people to be heard.",
    pillars: [
      {
        title: "Accessible Leadership",
        description:
          "Being present, approachable, and easy for students to reach—not distant behind a title.",
      },
      {
        title: "Listening Before Making Decisions",
        description:
          "Grounding every position in real student experiences rather than assumptions.",
      },
      {
        title: "Collaboration & Delegation",
        description:
          "Empowering committee members, course reps, and student volunteers to lead meaningful work together.",
      },
      {
        title: "Transparency",
        description:
          "Communicating openly about what is being raised, what is in progress, and where institutional constraints exist.",
      },
      {
        title: "Accountability",
        description:
          "Following through on commitments and reporting outcomes consistently to the student body.",
      },
      {
        title: "Respect for Different Perspectives",
        description:
          "Welcoming constructive disagreement and representing the full diversity of the ALU community.",
      },
    ],
  },

  accountability: {
    heading: "Promises Are Easy. Accountability Matters.",
    subheading:
      "A clear, repeatable process for turning student feedback into documented follow-up.",
    steps: [
      {
        step: "01",
        title: "Students Raise Concerns",
        description:
          "Accessible feedback channels and open student sessions make it straightforward to share issues and ideas.",
      },
      {
        step: "02",
        title: "SRC Reviews & Prioritises",
        description:
          "Concerns are logged, grouped by urgency and impact, and reviewed with clarity on what the SRC can act on directly vs. advocate for.",
      },
      {
        step: "03",
        title: "Stakeholders Are Engaged",
        description:
          "Documented student evidence is presented clearly and responsibly to the relevant university departments or partners.",
      },
      {
        step: "04",
        title: "Progress Is Documented & Followed Up",
        description:
          "Every raised issue has an owner and follow-up timeline so concerns do not quietly disappear after one meeting.",
      },
      {
        step: "05",
        title: "Students Receive Updates",
        description:
          "Regular SRC updates share outcomes, ongoing work, and honest explanations of outstanding challenges.",
      },
    ],
  },

  /**
   * CONFIGURABLE CONTACT CHANNELS
   * -----------------------------
   * Replace the placeholder values below with verified campaign links and set `configured: true`.
   */
  contactChannels: [
    {
      id: "email",
      label: "Campaign Email",
      value: "n.azubuike@alustudent.com",
      href: "mailto:n.azubuike@alustudent.com",
      configured: true,
      description:
        "For direct questions, student concerns, or written proposals.",
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@godsonpius01",
      href: "https://www.instagram.com/godsonpius01/",
      configured: true,
      description:
        "Campaign updates, listening session dates, and announcements.",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Godson Pius",
      href: "https://www.linkedin.com/in/godson-pius-9b462b1b1/",
      configured: true,
      description:
        "Background, projects, and leadership experience.",
    },
    {
      id: "community",
      label: "Campaign WhatsApp Channel",
      value: "Join Campaign WhatsApp Group",
      href: "https://chat.whatsapp.com/HYxRZAmwYdj8Cquukfx0x0?mode=gi_t",
      configured: true,
      description:
        "Official student community updates, listening sessions, and discussions.",
    },
  ] as ContactChannel[],
} as const;

