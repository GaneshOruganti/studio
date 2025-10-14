

export type Job = {
    id: string;
    title: string;
    category: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    rolesAndResponsibilities: string[];
    perks: string[];
};

export const jobOpenings: Job[] = [
  {
    id: "innovation-solutions-engineer",
    title: "Innovation Solutions Engineer",
    category: "Engineering",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Design and implement advanced software solutions using the latest technologies. Collaborate with cross-functional teams to build products that deliver high value at speed.",
    rolesAndResponsibilities: [
      "Design and implement advanced software solutions using the latest technologies.",
      "Collaborate with cross-functional teams to build high-value products.",
      "Ensure scalability, reliability, and security of applications.",
      "Follow agile and DevOps best practices to ensure speed and quality.",
      "Constantly research and prototype emerging tools and frameworks."
    ],
    perks: ["Flexible work hours", "Health insurance", "Generous PTO", "Remote work stipend"],
  },
  {
    id: "ai-product-architect",
    title: "AI Product Architect",
    category: "AI",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Lead the ideation, design, and development of AI-driven products across various sectors. Define architecture, ensure robust data pipelines, and guide the team in deploying and optimizing AI/ML models.",
    rolesAndResponsibilities: [
      "Lead the ideation and design of AI-driven products.",
      "Define the architecture for AI and machine learning solutions.",
      "Ensure robust data pipelines for model training and deployment.",
      "Guide the team in deploying and optimizing AI/ML models.",
      "Evaluate new AI technologies and ensure compliance with ethical standards."
    ],
    perks: ["401(k) matching", "Professional development budget", "Stock options", "Access to powerful computing resources"],
  },
  {
    id: "express-delivery-devops-specialist",
    title: "Express Delivery DevOps Specialist",
    category: "DevOps",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Automate the software delivery process to guarantee rapid, reliable deployments. Set up and monitor CI/CD pipelines, ensure high performance and uptime, and optimize cloud infrastructure for scalability.",
    rolesAndResponsibilities: [
      "Automate the software delivery process for rapid and reliable deployments.",
      "Set up, monitor, and maintain CI/CD pipelines.",
      "Ensure high performance and uptime of cloud infrastructure.",
      "Optimize cloud resources for scalability and cost-effectiveness.",
      "Implement security protocols, backup strategies, and disaster recovery plans."
    ],
    perks: ["Remote-first culture", "Latest DevOps toolchain", "Team retreats", "Performance bonuses"],
  },
  {
    id: "customer-success-catalyst",
    title: "Customer Success Catalyst",
    category: "Customer Success",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Be the client’s advocate, ensuring successful adoption of solutions, high satisfaction, and long-term retention. Onboard accounts, provide technical assistance, and collect feedback to improve the offering.",
    rolesAndResponsibilities: [
      "Act as the primary advocate for clients to ensure successful solution adoption.",
      "Manage client onboarding, provide technical assistance, and gather feedback.",
      "Collaborate with product and engineering teams to improve offerings.",
      "Monitor key usage metrics to identify opportunities and risks.",
      "Provide training and resources to enable client success."
    ],
    perks: ["Flexible schedule", "Health insurance", "Generous PTO", "Client-facing role"],
  },
  {
    id: "product-strategy-lead",
    title: "Product Strategy Lead",
    category: "Product",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Define the product vision and develop winning strategies for market entry and growth. Conduct competitive analysis, gather user feedback, and prioritize feature development to align with business objectives.",
    rolesAndResponsibilities: [
      "Define and communicate the product vision and strategy.",
      "Conduct market research and competitive analysis to identify opportunities.",
      "Gather user feedback to inform product development.",
      "Prioritize features and align product roadmaps with business goals.",
      "Work closely with leadership, design, and engineering teams."
    ],
    perks: ["Stock options", "Leadership role", "Conference and travel opportunities", "Strategic impact"],
  },
  {
    id: "user-experience-innovator",
    title: "User Experience (UX) Innovator",
    category: "Design",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Craft intuitive, modern, and visually striking interfaces for digital products. Conduct user research, design wireframes and prototypes, and collaborate with engineers to implement engaging interactions.",
    rolesAndResponsibilities: [
      "Craft intuitive, modern, and visually striking user interfaces.",
      "Conduct user research, create wireframes, and design high-fidelity prototypes.",
      "Collaborate with engineers to implement engaging and accessible user interactions.",
      "Champion branding consistency and iterate on designs based on user analytics.",
      "Maintain and evolve the company's design system."
    ],
    perks: ["Creative autonomy", "Latest design software", "Access to design conferences", "Flexible work hours"],
  },
  {
    id: "data-security-guardian",
    title: "Data Security Guardian",
    category: "Security",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Safeguard systems and customer data against threats. Conduct security assessments, manage firewalls and encryption, monitor vulnerabilities, and lead incident response planning.",
    rolesAndResponsibilities: [
      "Safeguard company systems and customer data against all potential threats.",
      "Conduct regular security assessments and vulnerability monitoring.",
      "Manage firewalls, encryption, and other security infrastructure.",
      "Lead incident response planning and execution.",
      "Educate teams on security best practices and ensure compliance."
    ],
    perks: ["Critical role in the company", "Professional development in cybersecurity", "Health insurance", "Remote work stipend"],
  },
  {
    id: "digital-outreach-brand-evangelist",
    title: "Digital Outreach & Brand Evangelist",
    category: "Marketing",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Drive the company’s brand narrative across digital channels and the broader tech community. Plan and execute marketing campaigns, engage on social media, and create impactful content to grow brand equity.",
    rolesAndResponsibilities: [
      "Drive the company’s brand narrative across all digital channels.",
      "Plan and execute data-driven marketing campaigns.",
      "Engage with the tech community on social media and other platforms.",
      "Create impactful content to establish thought leadership.",
      "Analyze campaign results and foster partnerships to grow brand equity."
    ],
    perks: ["Remote-first culture", "Marketing tech stack", "Team retreats", "Performance bonuses"],
  },
  {
    id: "chief-innovation-architect",
    title: "Chief Innovation Architect",
    category: "Leadership",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Drives technology vision, identifies new product opportunities, leads R&D, and champions a culture of continuous advancement. Collaborates with founders and stakeholders to translate bold ideas into scalable roadmaps.",
    rolesAndResponsibilities: [
      "Drive the overall technology vision and long-term innovation strategy.",
      "Identify and evaluate new product opportunities and market trends.",
      "Lead the Research & Development (R&D) department.",
      "Champion a culture of continuous advancement and experimentation.",
      "Collaborate with founders and key stakeholders to align technology with business goals."
    ],
    perks: ["Executive Leadership Role", "Significant Equity Options", "Board-level Influence", "Innovation Budget"],
  },
  {
    id: "ai-solutions-engineer",
    title: "AI Solutions Engineer",
    category: "AI",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Designs and implements AI algorithms and intelligent software modules. Works with cross-functional teams to integrate AI into products that address real-world business and user needs at speed.",
    rolesAndResponsibilities: [
      "Design, build, and implement custom AI algorithms and models.",
      "Integrate AI/ML capabilities into new and existing products.",
      "Work with product managers to define AI requirements for user needs.",
      "Optimize models for performance, scalability, and speed.",
      "Stay current with the latest advancements in AI and machine learning."
    ],
    perks: ["Access to cutting-edge AI hardware/software", "Conference attendance budget", "Publication opportunities", "Collaborative research projects"],
  },
  {
    id: "product-velocity-manager",
    title: "Product Velocity Manager",
    category: "Product",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Coordinates agile project delivery, ensures teams unblock quickly, manages timelines, quality checks, and resource allocation, always optimizing for the shortest time from idea to live product.",
    rolesAndResponsibilities: [
      "Coordinate and manage agile project delivery from conception to launch.",
      "Identify and remove blockers to accelerate team performance.",
      "Oversee project timelines, quality assurance, and resource allocation.",
      "Optimize workflows for maximum efficiency and speed.",
      "Report on project status and velocity to stakeholders."
    ],
    perks: ["Agile/Scrum Master certification sponsorship", "High-impact cross-functional role", "Performance bonuses", "Flexible work hours"],
  },
  {
    id: "user-experience-futurist",
    title: "User Experience Futurist",
    category: "Design",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Envisions and crafts next-generation digital user journeys. Conducts research, designs prototypes, and iterates on design based on analytics and feedback to ensure delightful, intuitive, and future-focused experiences.",
    rolesAndResponsibilities: [
      "Envision and design next-generation user experiences and interfaces.",
      "Conduct user research, usability testing, and data analysis.",
      "Create wireframes, high-fidelity prototypes, and interactive mockups.",
      "Iterate on designs based on user feedback and performance metrics.",
      "Champion a future-focused, user-centric design culture."
    ],
    perks: ["Top-tier design hardware/software", "Creative and experimental projects", "Design leadership opportunities", "Mentorship programs"],
  },
  {
    id: "express-devops-engineer",
    title: "Express DevOps Engineer",
    category: "DevOps",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Automates deployments, maintains CI/CD pipelines, manages cloud infrastructure, and implements best practices for ultra-fast, reliable, and secure software releases at scale.",
    rolesAndResponsibilities: [
      "Automate and streamline the software deployment process.",
      "Maintain and improve CI/CD pipelines for speed and reliability.",
      "Manage and scale cloud infrastructure on platforms like AWS, GCP, or Azure.",
      "Implement infrastructure as code (IaC) using tools like Terraform or Pulumi.",
      "Ensure system reliability, security, and performance at scale."
    ],
    perks: ["Certification courses (e.g., CKA, AWS DevOps)", "On-call flexibility", "Access to the latest DevOps tools", "Infrastructure budget"],
  },
  {
    id: "client-success-strategist",
    title: "Client Success Strategist",
    category: "Customer Success",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Onboards, supports, and grows customer relationships. Acts as the customer’s internal advocate, troubleshoots issues, collects feedback, and partners with product/development teams to exceed client goals.",
    rolesAndResponsibilities: [
      "Manage the entire customer lifecycle from onboarding to renewal.",
      "Serve as the primary point of contact and internal advocate for clients.",
      "Proactively troubleshoot issues and provide strategic guidance.",
      "Gather and relay customer feedback to product and development teams.",
      "Develop strategies to exceed client goals and drive long-term value."
    ],
    perks: ["Customer-facing leadership", "Bonus structure based on retention", "Travel opportunities", "Health and wellness stipend"],
  },
  {
    id: "digital-brand-evangelist-v2",
    title: "Digital Brand Evangelist",
    category: "Marketing",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Builds and amplifies the company’s narrative online. Runs digital campaigns, social listening/engagement, PR, and thought leadership to position your company as an industry leader and employer of choice.",
    rolesAndResponsibilities: [
      "Develop and execute the company’s digital brand strategy.",
      "Manage and grow our online presence through social media, content, and PR.",
      "Run targeted digital marketing campaigns (SEO, SEM, social).",
      "Create thought leadership content (blogs, whitepapers, webinars).",
      "Position the company as an industry leader and top employer brand."
    ],
    perks: ["Content creation budget", "Social media management tools", "Public speaking opportunities", "Flexible content strategy"],
  },
  {
    id: "cybersecurity-sentinel",
    title: "Cybersecurity Sentinel",
    category: "Security",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Secures company and customer data, anticipates digital threats, automates security systems, and educates teams on best practices to maintain trust and compliance.",
    rolesAndResponsibilities: [
      "Proactively secure company infrastructure and customer data.",
      "Anticipate and defend against emerging digital threats.",
      "Automate security monitoring, testing, and incident response.",
      "Develop and enforce security policies and best practices.",
      "Educate the team on security awareness to maintain a strong security posture."
    ],
    perks: ["Security conference budget (e.g., Black Hat, DEF CON)", "Advanced security certifications (e.g., CISSP, OSCP)", "Latest security software", "Ethical hacking opportunities"],
  }
];

export const aboutCompany = "At Branch Edge, we are dedicated to delivering next-generation software and AI solutions with unrivaled speed and quality. Our mission is to empower industries and communities with transformative digital tools that accelerate progress, whether in education, real estate, government, or beyond. By combining cutting-edge technology, agile delivery, and a passion for innovation, we act as a digital catalyst helping organizations thrive in a rapidly changing world. Our commitment to integrity, creativity, and client success positions us as a trusted partner for the future, wherever technology paves the way.";

export function getJobById(id: string) {
    return jobOpenings.find(job => job.id === id);
}
