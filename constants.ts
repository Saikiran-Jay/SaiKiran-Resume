import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Sai Kiran Jabu",
  title: "SEM Specialist | Performance Marketing & PPC Specialist",
  about: "Performance Marketing & PPC Specialist with 5+ years of experience managing large-scale paid search portfolios, including luxury hotel accounts with $800K+ monthly spend. Expert in Google Ads, Bing Ads, SA360, GA4, Meta Ads, advanced bidding strategies, RLSA, Customer Match, funnel-based optimizations, and analytics-driven growth. Proven record of increasing ROAS, reducing CPA, and scaling high-performance campaigns.",
  contact: {
    email: "saikiran.jabu95@gmail.com",
    phone: "+91 7702183149",
    linkedin: "www.linkedin.com/in/sai-kiran-j",
    website: "saikiran-jabu.dev", // Placeholder for portfolio if not provided, used for display URL
    location: "Hyderabad, Telangana, India"
  },
  stats: [
    { label: "Monthly Spend", value: "$800K+" },
    { label: "Experience", value: "5+ Years" },
    { label: "Certifications", value: "4" },
    { label: "ROAS Growth", value: "High" }
  ],
  experience: [
    {
      id: "exp1",
      company: "Cendyn India Pvt Ltd.",
      role: "SEM Specialist",
      period: "Aug 2023 – Present",
      location: "Hyderabad, India",
      url: "https://www.cendyn.com",
      description: "Managing 20–25 US-based luxury hotel & resort paid search accounts.",
      achievements: [
        "Managed $800K+ monthly spend across Google & Bing Ads via SA360.",
        "Owned end-to-end account management, strategic planning (monthly/quarterly), and budget pacing.",
        "Expertise in SA360 budget groups, bid strategies, and Floodlight alignment.",
        "Executed RLSA, Customer Match, lookalikes, and upper-funnel strategies.",
        "Drove consistent incremental revenue by identifying optimization opportunities.",
        "Mentored teams and led strategy sessions to solve campaign performance issues."
      ]
    },
    {
      id: "exp2",
      company: "Webdura Technologies",
      role: "Sr. Performance Marketing Executive",
      period: "Jun 2022 – Jun 2023",
      location: "India",
      url: "https://www.webdura.in/",
      description: "Managed client onboarding and multi-channel performance strategies.",
      achievements: [
        "Handled Google Ads, Meta Ads & Email Marketing daily ops including tracking and reporting.",
        "Improved ROI, CPA, and lead generation via optimized multi-channel strategies.",
        "Coordinated with Google/Meta reps and Dev teams for creative and tracking requirements.",
        "Utilized Google Ads Editor, FB Business Manager, and Klaviyo for execution."
      ]
    },
    {
      id: "exp3",
      company: "JoulestoWatts Business Solutions",
      role: "Process Associate",
      period: "Jun 2021 – Mar 2022",
      location: "India",
      url: "https://www.joulestowatts.com",
      description: "End-to-end management of Google & Meta campaigns.",
      achievements: [
        "Optimized bids, budgets, and keywords to improve lead quality and maintain CPA.",
        "Handled pacing, STR monitoring, performance alerts, and issue resolution.",
        "Created comprehensive reports and ensured smooth creative trafficking."
      ]
    },
    {
      id: "exp4",
      company: "Altech Star Solutions Pvt Ltd.",
      role: "PPC Executive",
      period: "Oct 2019 – May 2021",
      location: "India",
      url: "https://www.starsolutionsgroup.com",
      description: "Managed Search, Shopping, Display, and Video campaigns from setup to optimization.",
      achievements: [
        "Conducted keyword research, ad copy testing, pacing checks, and reporting.",
        "Analyzed CPC/CTR/Impressions/Conversions to improve ROI.",
        "Provided data-backed insights to sales & account teams."
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "Mother Theresa College of Engineering & Technology",
      degree: "B.Tech, Mining Engineering",
      year: "2014 – 2018"
    },
    {
      id: "edu2",
      institution: "Alphores Junior College",
      degree: "Intermediate MPC",
      year: "2012 – 2014"
    },
    {
      id: "edu3",
      institution: "Vidhyadhari High School",
      degree: "SSC",
      year: "2012"
    }
  ],
  skills: [
    {
      category: "Platforms & Tools",
      items: ["Google Ads", "SA360", "Bing Ads", "Meta Ads", "Email Marketing", "GA4", "Floodlight", "GTM", "Google Merchant Center", "Shopify", "WooCommerce", "WordPress", "MS Office"]
    },
    {
      category: "Competencies",
      items: ["Data Analysis", "Conversion Tracking", "Media Planning", "Campaign Structuring", "Keyword Research", "Audience Research", "Competitor Analysis", "CRO Recommendations", "Account Audits", "Scaling Strategies", "A/B Testing", "Budget Management", "Team Management", "AI Prompting"]
    }
  ],
  projects: [
    {
      title: "Car Log",
      description: "AI-built premium vehicle management dashboard.",
      link: "https://carlog-rho.vercel.app/",
      tech: "Vercel + Supabase"
    },
    {
      title: "Google SERP-Style AI Resume",
      description: "A Google SERP themed resume using AI prompting.",
      link: "https://saikiran-jabu-resume.vercel.app/",
      tech: "React, Gemini AI"
    }
  ],
  certifications: [
    "Google Ads Search Certification",
    "Google Ads Display Certification",
    "Search Ads 360 Certification",
    "Google Ads Shopping Certification"
  ],
  interests: ["Playing Chess", "Digital Art"]
};

export const PEOPLE_ALSO_ASK = [
  {
    question: "What is Sai Kiran's experience with SA360?",
    answer: "Sai Kiran has advanced expertise in Search Ads 360 (SA360), specifically in managing budget groups, bid strategies, and aligning Floodlight tags for luxury hotel accounts."
  },
  {
    question: "How much ad spend has Sai Kiran managed?",
    answer: "Sai has managed monthly budgets exceeding $800,000, primarily for US-based luxury hotel and resort portfolios."
  },
  {
    question: "What digital marketing tools is Sai proficient in?",
    answer: "He is proficient in Google Ads, Bing Ads, Meta Ads, GA4, Google Tag Manager, Google Merchant Center, Shopify, and WordPress."
  },
  {
    question: "Does Sai Kiran have experience with team management?",
    answer: "Yes, Sai has mentored teams, led strategy sessions, and helped solve complex campaign performance issues in his recent roles."
  }
];

export const AVATAR_URL = "https://i.ibb.co/z9hVWfz/Jay.jpg";