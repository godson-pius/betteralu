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
    electionDate: "25 November 2026",
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
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "My Vision", href: "/#vision" },
    { label: "Priorities", href: "/#priorities" },
    { label: "Leadership", href: "/#leadership" },
    { label: "Contact", href: "/#contact" },
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

  manifesto: {
    subtitle: "Listen. Represent. Act.",
    opening: [
      "Leadership is not about holding a title or making promises. It is about understanding the people you represent, bringing their concerns to the right tables, and following through until progress is made.",
      "My vision is an ALU where students feel heard, student leaders are empowered to serve effectively, opportunities are accessible, and our community works together to solve the challenges we face.",
      "I am running because I believe we can build a more responsive, connected and accountable student community. Not by starting everything from scratch, but by building on what already exists, improving what needs attention and introducing practical ideas where there are gaps.",
    ],
    pillars: [
      {
        number: "01",
        id: "stronger-src",
        title: "A Stronger SRC That Can Deliver",
        intro:
          "A student council can only serve students effectively when its members have the support and working relationships needed to do their jobs.",
        leadIn: "I will work towards:",
        bullets: [
          {
            lead: "Better recognition for SRC members:",
            text: "Advocate for an official and distinct SRC identification system that makes it easier for students and staff to recognise student representatives.",
          },
          {
            lead: "Stronger access to university stakeholders:",
            text: "Push for clearer communication and escalation channels between the SRC, relevant university teams and management.",
          },
          {
            lead: "Meaningful roles and responsibilities:",
            text: "Ensure every executive understands their portfolio, has clear expectations and receives the support needed to deliver.",
          },
          {
            lead: "Continuity between leadership teams:",
            text: "Strengthen handovers, documentation and follow-up so that useful work and pending initiatives are not abandoned whenever a new SRC takes office.",
          },
        ],
        closingNote:
          "The goal is simple: an SRC that is recognised, supported, coordinated and effective.",
      },
      {
        number: "02",
        id: "student-voice",
        title: "A Student Voice That Leads to Action",
        intro: "Students should not have to wait for election season to be heard.",
        leadIn:
          "I will champion a more accessible and accountable system for student feedback through:",
        bullets: [
          {
            text: "Regular opportunities for students to share concerns and suggestions.",
          },
          {
            text: "Accessible feedback channels for students on campus and those studying remotely.",
          },
          {
            text: "A clear process for documenting, referring and following up on recurring concerns.",
          },
          {
            text: "Regular updates so students know what has been raised, what is being worked on, what has been resolved and what remains outside the SRC's authority.",
          },
        ],
        closingNote:
          "I cannot promise that every request will be approved. I can commit to making sure genuine concerns are heard, properly represented and followed up.",
      },
      {
        number: "03",
        id: "academic-experience",
        title: "A Better Academic Experience",
        intro:
          "Our academic experience should challenge us, but students should also have a reasonable opportunity to manage their workload.",
        leadIn:
          "I will work with Academic Affairs and the relevant university teams to:",
        bullets: [
          {
            text: "Raise concerns about multiple assignments and deadlines clustering on the same day.",
          },
          {
            text: "Advocate for better coordination and visibility of major academic deadlines.",
          },
          {
            text: "Create more opportunities for peer learning, practical knowledge-sharing and academic support.",
          },
          {
            text: "Explore supervised practical competitions and challenges that allow students to demonstrate what they can do beyond assignments.",
          },
        ],
        extraParagraphs: [
          "For BSc students, I want to explore practical coding challenges that reward problem-solving and technical ability. For Business and other relevant programmes, I want to explore pitching opportunities where students can develop and present business ideas.",
        ],
        closingNote:
          "These initiatives will be developed with the relevant portfolios, students and potential partners, with realistic budgets and fair participation.",
      },
      {
        number: "04",
        id: "campus-life",
        title: "Improving Everyday Campus Life",
        intro:
          "Some of the biggest student frustrations are not complicated. They are part of everyday campus life.",
        leadIn:
          "I will prioritise listening to students and raising recurring concerns around:",
        bullets: [
          {
            lead: "Transportation:",
            text: "Engage the relevant stakeholders on availability, reliability, timing and affordability.",
          },
          {
            lead: "Internet connectivity:",
            text: "Document recurring connectivity problems and pursue follow-up with the responsible university teams.",
          },
          {
            lead: "Campus facilities:",
            text: "Create a more organised way to report non-functional facilities and track whether reported issues are addressed.",
          },
        ],
        closingNote:
          "The focus will be on consistent follow-up, not making promises about services the SRC does not directly control.",
      },
      {
        number: "05",
        id: "accommodation",
        title: "Fairer Access to Accommodation Information",
        intro:
          "Finding accommodation should not become an unnecessarily difficult experience, particularly for international students who may be unfamiliar with the local rental market.",
        leadIn:
          "I will explore partnerships and practical ways to improve access to reliable accommodation information, including:",
        bullets: [
          {
            text: "A verified accommodation information directory where feasible.",
          },
          {
            text: "Clearer listings with available locations, contact details and stated rental prices.",
          },
          {
            text: "Opportunities to connect students with reliable landlords and accommodation providers.",
          },
          {
            text: "A channel for students to report concerns about unfair treatment or misleading rental information.",
          },
        ],
        closingNote:
          "The SRC cannot set prices for private landlords or guarantee accommodation. However, we can work towards better information, stronger connections and a clearer way to raise concerns.",
      },
      {
        number: "06",
        id: "opportunities",
        title: "More Opportunities Beyond the Classroom",
        intro:
          "ALU should be a place where students can connect what they learn to real opportunities.",
        leadIn:
          "I will use existing relationships and pursue new partnerships to explore:",
        bullets: [
          { text: "Internship and career opportunities." },
          { text: "Industry engagement and professional mentorship." },
          { text: "Practical competitions and student showcases." },
          { text: "Business pitching and entrepreneurship opportunities." },
          {
            text: "Connections with organisations that can support student development.",
          },
        ],
        extraParagraphs: [
          "I will also work with relevant SRC portfolios to identify opportunities across different programmes, rather than focusing on only one group of students.",
        ],
        closingNote:
          "The goal is to create more pathways for students to learn, demonstrate their abilities and connect with the world beyond campus.",
      },
      {
        number: "07",
        id: "engaged-community",
        title: "A More Engaged and Connected ALU Community",
        intro:
          "A stronger student community does not happen by accident. It grows when students have meaningful reasons and opportunities to participate.",
        leadIn: "I will support the relevant SRC portfolios in developing:",
        bullets: [
          {
            text: "More inclusive student activities and community-building events.",
          },
          {
            text: "Opportunities for students from different programmes, backgrounds and year groups to connect.",
          },
          {
            text: "Student-led initiatives that encourage participation, collaboration and personal growth.",
          },
          {
            text: "Practical ways to recognise and appreciate consistent student participation.",
          },
        ],
        closingNote:
          "I also want to explore a student engagement and recognition system that encourages participation in campus activities. This will be developed with the relevant portfolio and based on available resources, rather than becoming another costly programme.",
      },
      {
        number: "08",
        id: "financial-planning",
        title: "Responsible Financial Planning and Resource Mobilisation",
        intro: "Good ideas need responsible planning to become reality.",
        leadIn:
          "I will work towards stronger financial coordination within the SRC by:",
        bullets: [
          {
            text: "Encouraging better planning across portfolios so available resources are considered fairly.",
          },
          {
            text: "Improving visibility of proposed activities, budgets, approvals and outstanding requests.",
          },
          {
            text: "Exploring partnerships and legitimate external sponsorship opportunities.",
          },
          {
            text: "Advocating for a clearer financial oversight structure that gives the appropriate SRC officers meaningful responsibilities while respecting university financial policies.",
          },
          {
            text: "Promoting transparency and accountability in the use of resources.",
          },
        ],
        closingNote:
          "I will also review existing arrangements and previous proposals before advocating for changes such as a dedicated SRC account. Any financial structure must have the necessary university approval, clear controls and proper accountability.",
      },
      {
        number: "09",
        id: "student-enterprise",
        title: "Student Enterprise and Empowerment Initiative",
        intro:
          "Students at ALU have creativity, ambition and entrepreneurial drive—what is often missing is practical support to take the first step.",
        leadIn: "The idea could involve:",
        bullets: [
          {
            text: "Helping students identify business opportunities.",
          },
          {
            text: "Supporting them to start small businesses with low capital.",
          },
          {
            text: "Providing mentorship and practical business guidance.",
          },
          {
            text: "Connecting promising student businesses to funding and customers.",
          },
          {
            text: "Creating a community where students support and buy from one another.",
          },
        ],
        closingNote:
          "This initiative will be explored with the relevant SRC portfolios, student entrepreneurs and partners—focused on practical, low-barrier support rather than unrealistic promises.",
      },
    ],
    wayILead: {
      heading: "The Way I Will Lead",
      subheading: "Listen. Represent. Act.",
      pillars: [
        {
          title: "Listen",
          description:
            "I will make time to understand students' experiences, including perspectives that may differ from my own.",
        },
        {
          title: "Represent",
          description:
            "I will communicate student concerns honestly and engage the appropriate people and offices to seek solutions.",
        },
        {
          title: "Act",
          description:
            "I will coordinate the SRC team, follow up on commitments and keep students informed about progress.",
        },
      ],
      notes: [
        "I believe a President should not attempt to do every executive's job. The role is to provide direction, support the team, remove obstacles, encourage collaboration and hold everyone accountable for their responsibilities.",
        "I also believe leadership should make people feel valued. SRC members volunteer their time and effort. They deserve clear responsibilities, reasonable support, recognition and an environment where they can contribute and grow.",
      ],
    },
    firstPriorities: {
      heading: "My First Priorities If Elected",
      intro:
        "I will begin by understanding the work already done before introducing new initiatives.",
      steps: [
        {
          number: "01",
          title: "Review and understand the handover.",
          description:
            "Meet with outgoing leaders, review existing proposals, understand what has been implemented and identify what is still pending.",
        },
        {
          number: "02",
          title: "Engage students.",
          description:
            "Gather concerns from different programmes, year groups and remote students to identify the issues that require the most urgent attention.",
        },
        {
          number: "03",
          title: "Strengthen the SRC team.",
          description:
            "Clarify responsibilities, agree on working expectations and establish a practical system for communication, meetings and accountability.",
        },
        {
          number: "04",
          title: "Engage the relevant university stakeholders.",
          description:
            "Prioritise outstanding concerns and establish clear channels for raising and following up on them.",
        },
        {
          number: "05",
          title: "Communicate progress.",
          description:
            "Keep students informed about what the SRC is doing, what has changed, what is taking longer and why.",
        },
      ],
    },
    commitment: {
      heading: "My Commitment To You",
      paragraphs: [
        "I will not tell you that I can solve every problem alone. I will not promise things that depend entirely on decisions outside the SRC's authority.",
        "But I will listen. I will represent your concerns. I will work with the right people, support the team and follow through.",
        "I want us to build an SRC that does not simply exist, but serves. An ALU community where students feel included, opportunities are pursued, concerns are taken seriously and leadership is accountable.",
      ],
    },
  },
} as const;

