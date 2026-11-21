export interface JourneyMilestone {
  period: string;
  badge: string;
  title: string;
  detail: string;
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  status: "Current Role" | "Previous Role";
  timeframe: string;
  featured?: boolean;
  summary: string;
  highlights: string[];
}

export interface VentureItem {
  id: string;
  name: string;
  role: string;
  status: string;
  statusTone: "active" | "progress" | "hackathon" | "exploring";
  description: string;
}

export interface ReadinessRow {
  experience: string;
  lesson: string;
}

export const CANDIDATE_STORY = {
  education: [
    {
      status: "Current",
      degree: "BSc (Hons) in Entrepreneurial Leadership",
      institution: "African Leadership University (ALU), Rwanda",
      note: "Strengthening my understanding of entrepreneurship, leadership, innovation and solving real-world problems.",
    },
    {
      status: "Graduated with Distinction • 2020",
      degree: "Applied Technology Education",
      institution: "Nigeria",
      note: "Built a strong foundation in practical technology, teaching and helping others learn.",
    },
  ],

  journeyTimeline: [
    {
      period: "2020",
      badge: "Education & Founding",
      title: "Applied Technology Education (Distinction) & World Brain Technology",
      detail:
        "Graduated with distinction in Applied Technology Education and founded World Brain Technology Limited in Nigeria to build practical digital solutions—websites, mobile apps, business systems, CRM platforms and IoT systems.",
    },
    {
      period: "Teaching & Mentorship",
      badge: "200+ Students Trained",
      title: "Senior Faculty at Aptech & World Brain Technology Academy",
      detail:
        "Established World Brain Technology Academy and served as Senior Faculty at Aptech Computer Education teaching ASP.NET, C#, C and C++. Across these roles, I have trained and mentored over 200 students.",
    },
    {
      period: "Community & STEM",
      badge: "Nigeria",
      title: "GEANCO STEM Outreach & Five Years of Youth & Community Leadership",
      detail:
        "Taught IoT and robotics to high-school girls across Abuja, Ibadan, Anambra and Enugu; served ~5 years as Youth Secretary at The Salvation Army, Enugu Central Corps, as Evangelical Coordinator for Enugu and Ebonyi States, and as Assistant Minister.",
    },
    {
      period: "Today at ALU",
      badge: "Rwanda • Current",
      title: "CPS Course Representative, Builder & Community Member",
      detail:
        "Currently pursuing BSc (Hons) in Entrepreneurial Leadership at ALU, serving as CPS Course Representative, placing 2nd out of 88 at the TechX Rwanda Hackathon (VunaLink), building Gabvia and MedMask, and serving as a tuba player in the Rwanda Territorial Band.",
    },
  ] satisfies JourneyMilestone[],

  leadershipRoles: [
    {
      id: "cps-rep",
      role: "CPS Course Representative",
      organization: "African Leadership University, Rwanda",
      status: "Current Role",
      timeframe: "Present",
      featured: true,
      summary:
        "I am already involved in student representation at ALU—representing classmates, communicating course-related concerns and facilitating constructive communication between students and relevant academic stakeholders.",
      highlights: [
        "Listening to classmates and documenting course-related challenges accurately.",
        "Communicating student concerns clearly to relevant academic stakeholders.",
        "Following up so feedback leads to clarity and practical next steps.",
      ],
    },
    {
      id: "youth-secretary",
      role: "Youth Secretary",
      organization: "The Salvation Army, Enugu Central Corps",
      status: "Previous Role",
      timeframe: "~5 Years",
      summary:
        "Supported and guided young people in their spiritual, social and financial development while coordinating youth activities, mentorship and programmes.",
      highlights: [
        "Coordinated youth programmes and team responsibilities over five years.",
        "Supported mentorship and personal growth for young people.",
      ],
    },
    {
      id: "evangelical-coordinator",
      role: "Evangelical Coordinator",
      organization: "Enugu & Ebonyi States, Nigeria",
      status: "Previous Role",
      timeframe: "Multi-State Service",
      summary:
        "Oversaw evangelical activities across Enugu and Ebonyi States, coordinating outreach initiatives and working across diverse communities.",
      highlights: [
        "Organised outreach programmes across two states.",
        "Built collaboration and communication across different local groups.",
      ],
    },
    {
      id: "assistant-minister",
      role: "Assistant Minister",
      organization: "Church Congregation in Nigeria",
      status: "Previous Role",
      timeframe: "Community Service",
      summary:
        "Supported the leadership and day-to-day activities of a church congregation of hundreds of members, contributing to spiritual growth and community development.",
      highlights: [
        "Assisted in coordinating congregation activities with humility and consistency.",
        "Supported people through service, listening and community care.",
      ],
    },
  ] satisfies LeadershipRole[],

  teachingAndService: [
    {
      label: "Teaching & Mentorship",
      title: "Senior Faculty, Aptech Computer Education",
      detail:
        "Taught advanced programming and software development—including ASP.NET, C#, C and C++—and trained and mentored over 200 students across Aptech and World Brain Technology Academy. Teaching built patience, clear communication and a commitment to helping others grow.",
    },
    {
      label: "Public Speaking & Engagement",
      title: "Speaking Across Ebonyi, Imo & STEM Outreach Events",
      detail:
        "Participated in technical speaking, mentorship talks, career-panel discussions as a Software Engineer and IoT enthusiast, and served as a quiz competition judge—strengthening listening, confidence and audience engagement.",
    },
    {
      label: "Community & Music",
      title: "Rwanda Territorial Band & Gospel Ministry",
      detail:
        "Alongside technology and student leadership, I serve as a musician, gospel minister and tuba player in the Rwanda Territorial Band—grounded in teamwork, discipline and service to community.",
    },
  ],

  geanco: {
    locations: ["Abuja", "Ibadan", "Anambra", "Enugu"],
    intro:
      "I participated in a month-long STEM outreach programme with the GEANCO Foundation across four Nigerian locations, teaching high-school girls about the Internet of Things (IoT), robotics and how they can use technology to build practical products.",
    activities: [
      "Introduced students to IoT concepts and how connected devices communicate.",
      "Demonstrated how mobile phones communicate with electronic hardware.",
      "Built a working demonstration using a mobile phone to switch a light bulb on and off.",
      "Introduced students to robotics and practical hardware assembly.",
      "Assembled a robot alongside students during one of the sessions in Abuja.",
      "Participated in career-panel discussions as a Software Engineer and IoT enthusiast, and served as a quiz competition judge.",
    ],
    reflection:
      "This experience reinforced my conviction that opportunities, mentorship and access to practical knowledge can transform how young people see their future.",
    helperRobot: {
      title: "Building a Helper Robot — Handover & Continuity",
      body: "During my time with the foundation, I also began developing a helper robot project before leaving Nigeria. Rather than letting the work stop when I relocated, I made sure there was a structured handover to another person to continue its development.",
      note: "The project was handed over in progress rather than completed by me—an experience that shaped my belief that good leadership plans for continuity beyond any single person.",
    },
  },

  ventures: [
    {
      id: "wbt",
      name: "World Brain Technology Limited",
      role: "Founder • Established 2020 (Nigeria)",
      status: "Founded Company",
      statusTone: "active",
      description:
        "A technology company focused on building practical digital solutions, including websites, mobile applications, business systems, CRM platforms and IoT solutions.",
    },
    {
      id: "wbt-academy",
      name: "World Brain Technology Academy",
      role: "Founder • Technology Education",
      status: "Education Initiative",
      statusTone: "active",
      description:
        "An initiative dedicated to teaching practical technology and programming skills—contributing to over 200 students trained and mentored across my academy and teaching work.",
    },
    {
      id: "vunalink",
      name: "VunaLink (TechX Rwanda Hackathon)",
      role: "Team Builder • 2nd Place out of 88 Participants",
      status: "2nd / 88 • Hackathon Prototype",
      statusTone: "hackathon",
      description:
        "An offline-first crop disease detection Progressive Web App using MobileNetV2 trained on the PlantVillage dataset with ONNX Runtime for local, on-device inference.",
    },
    {
      id: "gabvia",
      name: "Gabvia",
      role: "Founder • Started in Rwanda",
      status: "Ongoing Venture",
      statusTone: "progress",
      description:
        "An AI-powered multilingual communication platform designed to help people communicate across language barriers through translation, voice features and AI-assisted tools.",
    },
    {
      id: "medmask",
      name: "MedMask",
      role: "Builder • Health Technology",
      status: "In Development",
      statusTone: "progress",
      description:
        "A health-focused venture currently being developed to help people access sexual health information and consult qualified healthcare professionals more privately.",
    },
    {
      id: "bludux",
      name: "Bludux Finance / Blueducks",
      role: "Entrepreneurial Exploration • Fintech",
      status: "Concept / Exploration",
      statusTone: "exploring",
      description:
        "Fintech-related entrepreneurial work exploring multi-currency financial services and digital wallets.",
    },
  ] satisfies VentureItem[],

  technicalSummary: {
    years: "8+ Years of Practical Problem-Solving",
    description:
      "Over six years working across web and mobile applications, backend systems, IoT and robotics—including React, Next.js, React Native, Node.js, databases, Raspberry Pi, Arduino and ESP32. Technology taught me how to diagnose root problems, collaborate in teams and turn ideas into practical systems.",
  },

  readinessRows: [
    {
      experience: "CPS Course Representative",
      lesson: "Student representation and advocacy",
    },
    {
      experience: "Founder and entrepreneur",
      lesson: "Initiative, accountability and execution",
    },
    {
      experience: "Teaching over 200 students",
      lesson: "Listening, mentorship and capacity building",
    },
    {
      experience: "GEANCO STEM outreach",
      lesson: "Inclusion, opportunity and empowering young people",
    },
    {
      experience: "Youth Secretary",
      lesson: "Team coordination and community leadership",
    },
    {
      experience: "Evangelical Coordinator",
      lesson: "Organisation and working across communities",
    },
    {
      experience: "Assistant Minister",
      lesson: "Responsibility, service and supporting people",
    },
    {
      experience: "Building technology products",
      lesson: "Problem-solving, persistence and innovation",
    },
    {
      experience: "Hackathon experience",
      lesson: "Collaboration and delivering under pressure",
    },
  ] satisfies ReadinessRow[],

  readinessQuote:
    "I have spent years teaching, mentoring, representing, coordinating, building and serving people. These experiences have shaped how I lead. I am bringing that experience, not just promises, into the SRC presidency.",

  closingMessage: {
    eyebrow: "A Personal Closing Message",
    heading: "Leadership Did Not Begin With This Election.",
    centralMessage:
      "I am not running simply because I want a title. I am bringing years of experience, a willingness to listen, a commitment to serve and the determination to make ALU better, together with the students.",
    body: "Whether we have worked together in class, met on campus, or are just connecting through this campaign, I invite you to read the manifesto, share what matters to you, and join us in building an SRC that listens, represents and follows through.",
  },
} as const;
