

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
  },
  {
    id: "software-development-intern",
    title: "Software Development Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Work on real-world coding projects, contribute to web/app development, and learn modern frameworks while working alongside senior developers.",
    rolesAndResponsibilities: [
      "Contribute to feature development and bug fixing on active projects.",
      "Learn and apply modern coding practices and software architecture.",
      "Collaborate with the engineering team in an agile environment.",
      "Assist in writing and maintaining technical documentation."
    ],
    perks: ["Mentorship from senior engineers", "Hands-on project experience", "Flexible work hours", "Potential for future employment"],
  },
  {
    id: "ai-data-science-intern",
    title: "AI & Data Science Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Assist with building intelligent models, data analysis, machine learning experiments, and automation for company products and R&D.",
    rolesAndResponsibilities: [
      "Assist in building, training, and testing AI/ML models.",
      "Perform data collection, cleaning, and analysis.",
      "Contribute to machine learning experiments and R&D projects.",
      "Help automate data processing and reporting tasks."
    ],
    perks: ["Work with large datasets and cutting-edge models", "Mentorship from data scientists", "Gain practical AI/ML skills", "Academic credit support"],
  },
  {
    id: "ui-ux-design-intern",
    title: "UI/UX Design Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Help design intuitive user interfaces, create wireframes and prototypes, and participate in user testing to enhance product experiences.",
    rolesAndResponsibilities: [
      "Collaborate with designers to create intuitive and engaging interfaces.",
      "Develop wireframes, mockups, and high-fidelity prototypes.",
      "Participate in user research and usability testing sessions.",
      "Contribute to the evolution of our design system."
    ],
    perks: ["Build a professional design portfolio", "Mentorship from experienced designers", "Access to premium design tools", "Creative and collaborative environment"],
  },
  {
    id: "devops-cloud-engineering-intern",
    title: "DevOps & Cloud Engineering Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Learn about automation tools, cloud infrastructure, CI/CD pipeline management, and participate in efficient software deployment.",
    rolesAndResponsibilities: [
      "Support the automation of software deployments and infrastructure management.",
      "Assist in maintaining CI/CD pipelines for various projects.",
      "Monitor cloud infrastructure for performance and reliability.",
      "Learn about infrastructure as code and other DevOps best practices."
    ],
    perks: ["Hands-on experience with AWS, GCP, or Azure", "Learn industry-standard DevOps tools", "Mentorship from senior DevOps engineers", "Contribute to mission-critical systems"],
  },
  {
    id: "product-management-intern",
    title: "Product Management Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Support product lifecycle activities, do market/user research, collect feedback, assist with roadmap planning, and coordinate between tech and business teams.",
    rolesAndResponsibilities: [
      "Support product managers in defining product strategy and roadmaps.",
      "Conduct market research and competitive analysis.",
      "Gather and analyze user feedback to inform product decisions.",
      "Coordinate between engineering, design, and marketing teams."
    ],
    perks: ["Learn the full product development lifecycle", "Gain strategic business experience", "Mentorship from product leaders", "Impact product direction"],
  },
  {
    id: "cybersecurity-intern-2",
    title: "Cybersecurity Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Assist in auditing systems, monitoring network activity, and learning about the latest strategies in digital protection and compliance.",
    rolesAndResponsibilities: [
      "Participate in vulnerability assessments and security audits.",
      "Assist in monitoring network activity and identifying potential threats.",
      "Help develop and enforce security policies and procedures.",
      "Learn about compliance standards and security best practices."
    ],
    perks: ["Gain experience in a high-demand field", "Work with advanced security tools", "Mentorship from cybersecurity experts", "Understand real-world security challenges"],
  },
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Help develop online campaigns, manage social media channels, and analyze performance data to drive brand awareness and user engagement.",
    rolesAndResponsibilities: [
      "Assist with planning and executing digital marketing campaigns.",
      "Help manage social media channels and create engaging content.",
      "Analyze marketing data to measure campaign performance.",
      "Contribute to SEO, content marketing, and brand outreach efforts."
    ],
    perks: ["Hands-on marketing campaign experience", "Learn analytics and reporting tools", "Creative and dynamic work environment", "Mentorship from marketing professionals"],
  },
  {
    id: "customer-success-intern",
    title: "Customer Success Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Support onboarding and assisting new clients, preparing help documentation, gathering user feedback, and collaborating with support teams.",
    rolesAndResponsibilities: [
      "Assist with onboarding new clients and ensuring their success.",
      "Engage with users to provide support and gather feedback.",
      "Help create and maintain help documentation and tutorials.",
      "Collaborate with the customer success team to improve the user experience."
    ],
    perks: ["Develop strong communication and client-facing skills", "Directly impact user satisfaction", "Work in a supportive team environment", "Learn about the SaaS business model"],
  },
  {
    id: "software-engineering-intern-2",
    title: "Software Engineering Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Work on feature development, bug fixing, and learn modern coding practices alongside the engineering team.",
    rolesAndResponsibilities: [
      "Work on feature development, bug fixing, and learn modern coding practices alongside the engineering team.",
      "Contribute to web/app development.",
      "Learn modern frameworks while working alongside senior developers.",
    ],
    perks: ["Mentorship from senior engineers", "Hands-on project experience", "Flexible work hours", "Potential for future employment"],
  },
  {
    id: "ai-ml-research-intern",
    title: "AI/ML Research Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Assist in building and testing AI models, perform data analysis, and explore new machine learning techniques.",
    rolesAndResponsibilities: [
      "Assist in building and testing AI models.",
      "Perform data analysis.",
      "Explore new machine learning techniques.",
    ],
    perks: ["Work with large datasets and cutting-edge models", "Mentorship from data scientists", "Gain practical AI/ML skills", "Academic credit support"],
  },
  {
    id: "product-design-intern",
    title: "Product Design Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Collaborate with designers to create intuitive interfaces, work on user research, and contribute to UX/UI projects.",
    rolesAndResponsibilities: [
      "Collaborate with designers to create intuitive interfaces.",
      "Work on user research.",
      "Contribute to UX/UI projects.",
    ],
    perks: ["Build a professional design portfolio", "Mentorship from experienced designers", "Access to premium design tools", "Creative and collaborative environment"],
  },
  {
    id: "devops-intern-2",
    title: "DevOps Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Support the automation of deployments, maintain cloud infrastructure, and monitor reliability and performance.",
    rolesAndResponsibilities: [
      "Support the automation of deployments.",
      "Maintain cloud infrastructure.",
      "Monitor reliability and performance.",
    ],
    perks: ["Hands-on experience with AWS, GCP, or Azure", "Learn industry-standard DevOps tools", "Mentorship from senior DevOps engineers", "Contribute to mission-critical systems"],
  },
  {
    id: "cybersecurity-intern-3",
    title: "Cybersecurity Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Participate in vulnerability assessments, policy creation, and help ensure compliance with security protocols.",
    rolesAndResponsibilities: [
      "Participate in vulnerability assessments.",
      "Assist in policy creation.",
      "Help ensure compliance with security protocols.",
    ],
    perks: ["Gain experience in a high-demand field", "Work with advanced security tools", "Mentorship from cybersecurity experts", "Understand real-world security challenges"],
  },
  {
    id: "product-management-intern-2",
    title: "Product Management Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Support product roadmapping, conduct market research, and coordinate feature prioritization and releases.",
    rolesAndResponsibilities: [
      "Support product roadmapping.",
      "Conduct market research.",
      "Coordinate feature prioritization and releases.",
    ],
    perks: ["Learn the full product development lifecycle", "Gain strategic business experience", "Mentorship from product leaders", "Impact product direction"],
  },
  {
    id: "business-analytics-intern",
    title: "Business Analytics Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Analyze product and business data, build dashboards, and deliver insights that support decision-making.",
    rolesAndResponsibilities: [
      "Analyze product and business data.",
      "Build dashboards.",
      "Deliver insights that support decision-making.",
    ],
    perks: ["Develop strong analytical skills", "Work with business intelligence tools", "Present findings to leadership", "Data-driven decision making"],
  },
  {
    id: "customer-experience-intern",
    title: "Customer Experience Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Engage with users, prepare documentation, and help in onboarding and troubleshooting customer issues.",
    rolesAndResponsibilities: [
      "Engage with users.",
      "Prepare documentation.",
      "Help in onboarding and troubleshooting customer issues.",
    ],
    perks: ["Develop strong communication and client-facing skills", "Directly impact user satisfaction", "Work in a supportive team environment", "Learn about the SaaS business model"],
  }
];

export const aboutCompany = "At Branch Edge, we are dedicated to delivering next-generation software and AI solutions with unrivaled speed and quality. Our mission is to empower industries and communities with transformative digital tools that accelerate progress, whether in education, real estate, government, or beyond. By combining cutting-edge technology, agile delivery, and a passion for innovation, we act as a digital catalyst helping organizations thrive in a rapidly changing world. Our commitment to integrity, creativity, and client success positions us as a trusted partner for the future, wherever technology paves the way.";

export function getJobById(id: string) {
    return jobOpenings.find(job => job.id === id);
}
