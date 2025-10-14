
export const jobOpenings = [
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
  }
];

export const aboutCompany = "At Branch Edge, we are dedicated to delivering next-generation software and AI solutions with unrivaled speed and quality. Our mission is to empower industries and communities with transformative digital tools that accelerate progress, whether in education, real estate, government, or beyond. By combining cutting-edge technology, agile delivery, and a passion for innovation, we act as a digital catalyst helping organizations thrive in a rapidly changing world. Our commitment to integrity, creativity, and client success positions us as a trusted partner for the future, wherever technology paves the way.";

export function getJobById(id: string) {
    return jobOpenings.find(job => job.id === id);
}
