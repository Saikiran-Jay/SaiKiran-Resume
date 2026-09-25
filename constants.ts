
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Sai Kiran Jabu",
  title: "SEM Specialist | Performance Marketing & PPC Specialist",
  about: "Performance Marketing & PPC Specialist with 6+ years of experience. Managed global clients across the USA, UK, Australia, New Zealand, and Europe (France, Germany, Italy, Spain, Sweden, Denmark, Netherlands, Portugal, Poland, Finland), delivering results across eCommerce, lead generation, store visits, and appointment booking campaigns. Expert in Google Ads, SA360, GA4, Meta Ads, and advanced bidding strategies to drive ROAS and scale performance.",
  contact: {
    email: "saikiran.jabu95@gmail.com",
    phone: "+91 7702183149",
    linkedin: "www.linkedin.com/in/sai-kiran-j",
    website: "saikiran-jabu.dev", 
    location: "Hyderabad, Telangana, India"
  },
  stats: [
    { label: "Monthly Spend", value: "$200k+" },
    { label: "Experience", value: "6+ Years" },
    { label: "Global Markets", value: "14+" },
    { label: "ROAS Growth", value: "High" }
  ],
  experience: [
    {
      id: "exp0",
      company: "FULL Creative Pvt. Ltd.",
      role: "Sr. Performance Marketing Analyst",
      period: "Feb 2026 – Present",
      location: "Remote, India",
      url: "https://full.io/",
      description: "Managed paid campaigns across Google Ads and Bing Ads, focusing on performance and lead quality.",
      achievements: [
        "Conducted lead audits and created detailed reports to track performance and identify improvement areas.",
        "Conducted landing page and user behavior analysis using Microsoft Clarity to improve user experience and conversion rates.",
        "Created and analyzed performance reports, highlighting key trends, issues, and growth opportunities.",
        "Shared regular insights and updates with stakeholders to support data-driven decision-making."
      ]
    },
    {
      id: "exp1",
      company: "Cendyn India Pvt Ltd.",
      role: "SEM Specialist",
      period: "Aug 2023 – Dec 2025",
      location: "Hyderabad, India",
      url: "https://www.cendyn.com",
      description: "Managing 20–25 US-based luxury hotel & resort paid search accounts.",
      achievements: [
        "Managed $200k+ monthly spend across Google & Bing Ads via SA360.",
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
      location: "Remote, India",
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
    },
    {
      category: "Certifications",
      items: ["Google Ads Search", "Google Ads Display", "Search Ads 360", "Google Ads Shopping"]
    }
  ],
  projects: [
    {
      title: "Car Log - AI-built premium vehicle management dashboard.",
      description: "Built a premium vehicle management dashboard featuring automatic trip logging, fuel tracking, and maintenance analytics, developed entirely using AI-assisted prompting and deployed on Vercel with Supabase as the backend.",
      link: "https://carlog-rho.vercel.app/",
      tech: "Vercel + Supabase"
    },
    {
      title: "Google SERP-themed Resume",
      description: "created using AI prompting to showcase my search expertise, branding skills, and deep understanding of how users interact with Google Ads and SERP layouts.",
      link: "https://saikiran-jabu-resume.vercel.app/",
      tech: "React, Gemini AI"
    }
  ],
  caseStudies: [
    {
      id: "cs1",
      title: "Landing Page A/B Test",
      subtitle: "Offer Hub vs. Homepage for High-Intent Search Traffic",
      background: "A hotel with strong branded search demand wanted to understand whether paid search users convert better when sent to a generic homepage or a centralized offers page.",
      question: "Should high-intent search users land on a homepage for a general brand overview, or on an offers hub that immediately presents booking incentives?",
      approach: [
        "Variant A: Homepage (Brand messaging and standard booking path)",
        "Variant B: Offers Hub (Live promotions and clear pricing cues)"
      ],
      results: [
        "22% higher booking conversion rate",
        "19% increase in revenue per click",
        "17% reduction in bounce rate"
      ],
      impact: "Branded search revenue increased by 21% in the following quarter.",
      takeaway: "Immediate access to relevant offers reduces friction and drives stronger booking performance."
    },
    {
      id: "cs2",
      title: "Bid Strategy A/B Test",
      subtitle: "Efficiency vs. Scale in Branded Search",
      background: "A well-known brand was running branded search campaigns on Maximize Conversion Value, delivering strong efficiency with ROAS between 18x to 21x. While profitable, volume was constrained.",
      question: "Could a shift in bid strategy unlock additional demand and revenue, even if it meant a reduction in ROAS?",
      approach: [
        "Control: Maximize Conversion Value (efficiency-focused)",
        "Test: Maximize Clicks (volume and visibility-focused)"
      ],
      results: [
        "+26% increase in click volume via higher impression share",
        "+18% improvement in CTR reflecting stronger visibility",
        "+10% lift in CVR as high-intent branded users entered the funnel",
        "+22% increase in total revenue from higher booking volume"
      ],
      impact: "Revenue growth outweighed efficiency loss. ROAS remained very strong at approximately 14x, exceeding profitability benchmarks.",
      takeaway: "Highest ROAS is not always the same as Maximum Revenue. Strategic bid testing can unlock growth while maintaining healthy returns."
    },
    {
      id: "cs3",
      title: "Brand Keyword Match Type Optimization",
      subtitle: "Exact Match vs. Phrase Match",
      background: "Branded campaigns mixed match types, causing CPC volatility and limiting visibility by intent.",
      question: "What is the impact of separating exact and phrase match brand keywords on CPC stability and booking efficiency?",
      approach: [
        "Phase 1: Search Term Refinement and Negative Keywords",
        "Phase 2: Segmented Ad Groups for Exact and Phrase match",
        "Duration: 3-month trial to ensure statistical significance"
      ],
      results: [
        "23% lower and more stable CPCs",
        "19% higher CTR",
        "15% higher conversion rate",
        "35% more bookings"
      ],
      impact: "Paused phrase match and consolidated budget into exact match for maximum ROI.",
      takeaway: "For strong brand demand, precision with Exact Match outperforms expansion via Phrase Match."
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

export const SIDEBAR_SKILLS = [
  {
    category: "Advertising Platforms",
    items: [
      { name: "Google Ads", domain: "ads.google.com" },
      { name: "SA360", domain: "searchads.google.com" },
      { name: "Meta Ads", domain: "meta.com" },
      { name: "Microsoft Ads", domain: "ads.microsoft.com" },
      { name: "Email Marketing", domain: "mailchimp.com" },
      { name: "Google Ads Editor", domain: "ads.google.com" },
      { name: "Merchant Center", domain: "merchants.google.com" },
      { name: "Shopify", domain: "shopify.com" },
      { name: "WooCommerce", domain: "woocommerce.com" },
      { name: "WordPress", domain: "wordpress.org" }
    ]
  },
  {
    category: "Analytics & Tracking",
    items: [
      { name: "Google Analytics", domain: "analytics.google.com" },
      { name: "GTM", domain: "tagmanager.google.com" },
      { name: "Floodlight", domain: "marketingplatform.google.com" },
      { name: "Conversion Tracking", icon: "Target" },
      { name: "SEMRush", domain: "semrush.com" },
      { name: "Tracking Setup", icon: "Target" },
      { name: "Data Analysis", icon: "BarChart3" },
      { name: "Reporting & Insights", icon: "FileBarChart" },
      { name: "Looker Studio", domain: "lookerstudio.google.com" }
    ]
  },
  {
    category: "Certifications",
    items: [
      { name: "Google Ads Search", domain: "skillshop.exceedlms.com" },
      { name: "Google Ads Display", domain: "skillshop.exceedlms.com" },
      { name: "Search Ads 360", domain: "skillshop.exceedlms.com" },
      { name: "Google Ads Shopping", domain: "skillshop.exceedlms.com" }
    ]
  },
  {
    category: "Productivity Tools",
    items: [
      { name: "MS Office", domain: "office.com" },
      { name: "ChatGPT", domain: "openai.com" },
      { name: "Grok", domain: "x.ai" },
      { name: "Gemini", domain: "gemini.google.com" },
      { name: "Bard", domain: "gemini.google.com" },
      { name: "Google Ai Studio", domain: "aistudio.google.com" }
    ]
  },
  {
    category: "Projects & Builds",
    items: [
      {
        name: "I Wish I Could Say",
        description: "Anonymous space for the words left unsaid.",
        url: "https://iwishicouldsay.com/",
        domain: "iwishicouldsay.com"
      },
      {
        name: "AiGen Hub",
        description: "Discover AI tools, prompts, and workflows.",
        url: "https://aigenhub.space/",
        domain: "aigenhub.space"
      },
      {
        name: "Janma Sutra",
        description: "Discover your birth Tithi from your birth details.",
        url: "https://janmasutra.vercel.app/",
        domain: "janmasutra.vercel.app"
      },
      {
        name: "CarLog",
        description: "Digital logbook for your car journeys.",
        url: "https://carlog-rho.vercel.app/",
        domain: "carlog-rho.vercel.app"
      },
      {
        name: "PodRead",
        description: "Turn podcasts into readable knowledge.",
        url: "https://podread-jay.vercel.app/",
        domain: "podread-jay.vercel.app"
      },
      {
        name: "Jay",
        description: "Personal playground for ideas and experiments.",
        url: "https://jay995.vercel.app/",
        domain: "jay995.vercel.app"
      },
      {
        name: "Sai Kiran Jabu — Portfolio",
        description: "Google-style interactive portfolio showcasing my career, skills, and experience.",
        url: "https://saikiran-jabu-resume.vercel.app/",
        domain: "saikiran-jabu-resume.vercel.app"
      }
    ]
  }
];

export const PEOPLE_ALSO_ASK = [
  {
    question: "What is Sai Kiran's experience with SA360?",
    answer: "Sai Kiran has advanced expertise in Search Ads 360 (SA360), specifically in managing budget groups, bid strategies, and aligning Floodlight tags for luxury hotel accounts."
  },
  {
    question: "How much ad spend has Sai Kiran managed?",
    answer: "Sai has managed monthly budgets exceeding $200k+, primarily for US-based luxury hotel and resort portfolios."
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
