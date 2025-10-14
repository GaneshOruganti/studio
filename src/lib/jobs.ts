
export type Job = {
    id: string;
    title: string;
    category: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    rolesAndResponsibilities: string[];
    requirements: string[];
    perks: string[];
};

export const jobOpenings: Job[] = [
  // Full-Time Roles
  {
    id: "chief-innovation-architect",
    title: "Chief Innovation Architect",
    category: "Leadership",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Drives technology vision, identifies new product opportunities, leads R&D, and champions a culture of continuous advancement. Collaborates with founders and stakeholders to translate bold ideas into scalable roadmaps.",
    rolesAndResponsibilities: [
        "Define and champion the technical vision and innovation roadmap.",
        "Lead R&D initiatives, inspiring teams to perform cutting-edge development.",
        "Bridge company vision with technology strategy, driving scalable solutions.",
        "Evaluate emerging technologies and integrate them strategically.",
        "Collaborate with executive stakeholders to align product and business goals."
    ],
    requirements: [
        "Proven technology leadership with 10+ years in software innovation.",
        "Strong knowledge of AI, cloud, security, and software architecture.",
        "Excellent communication and leadership skills.",
        "Experience in startup or high-growth environments preferred.",
        "Advanced degree in Computer Science or related technical field."
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
        "Develop and optimize AI/ML models for client and internal product use.",
        "Work closely with data scientists and developers on AI application deployments.",
        "Ensure robustness, scalability, and real-time performance of AI features.",
        "Research and adopt new AI frameworks, platforms, and approaches.",
        "Troubleshoot issues and improve model accuracy via validation and testing."
    ],
    requirements: [
        "Strong programming skills in Python, TensorFlow, PyTorch, or similar.",
        "Experience with data preprocessing, model training, and deployment.",
        "Background in machine learning, deep learning, and statistical analysis.",
        "Degree in CS, Data Science, or equivalent practical experience.",
        "Familiarity with cloud AI services (Google AI, AWS SageMaker, Azure ML) is a plus."
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
        "Drive agile development processes ensuring timely delivery.",
        "Manage sprint planning, backlog grooming, and team communications.",
        "Identify and remove workflow blockers across teams.",
        "Maintain documentation and release schedules.",
        "Collaborate with product, design, and engineering teams to align priorities."
    ],
    requirements: [
      "Experience in Agile/Scrum methodologies and project management tools (Jira, Trello).",
      "Strong organizational and communication skills.",
      "Proven track record in a product delivery or project manager role.",
      "Ability to work in fast-paced, evolving environments."
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
        "Lead innovation in user experience design using emerging trends.",
        "Develop wireframes, prototypes, and usability test plans.",
        "Collaborate with product owners and engineers for seamless implementation.",
        "Analyze user research data and iterate on design decisions.",
        "Promote accessible and inclusive design principles."
    ],
    requirements: [
        "Expertise in UX/UI tools like Figma, Sketch, Adobe XD.",
        "Experience conducting user research and data-driven design.",
        "Knowledge of current design trends and willingness to experiment.",
        "Portfolio demonstrating innovative and effective UX design work."
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
      "Set up and optimize CI/CD pipelines and automated deployment frameworks.",
      "Monitor cloud infrastructure and troubleshoot performance issues.",
      "Implement security practices in deployment processes.",
      "Scale infrastructure to support rapid feature releases.",
      "Collaborate with development and QA teams to ensure reliability."
    ],
    requirements: [
        "Strong proficiency with cloud platforms (AWS, GCP, Azure).",
        "Experience with infrastructure as code tools (Terraform, Ansible).",
        "Knowledge in containerization (Docker, Kubernetes).",
        "Understanding of scripting languages (Python, Bash).",
        "Excellent problem-solving and communication skills."
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
      "Develop and execute customer success strategies to maximize retention and satisfaction.",
      "Monitor onboarding processes and ensure smooth client adoption of products.",
      "Analyze usage data to provide actionable insights and improvements.",
      "Act as a liaison between customers and internal product/service teams.",
      "Organize training sessions, webinars, and support documentation."
    ],
    requirements: [
      "Experience in customer success, account management, or client-facing roles.",
      "Strong analytical skills and proficiency with CRM tools.",
      "Exceptional interpersonal and communication skills.",
      "Demonstrated ability to manage and grow client relationships."
    ],
    perks: ["Customer-facing leadership", "Bonus structure based on retention", "Travel opportunities", "Health and wellness stipend"],
  },
  {
    id: "digital-brand-evangelist",
    title: "Digital Brand Evangelist",
    category: "Marketing",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Builds and amplifies the company’s narrative online. Runs digital campaigns, social listening/engagement, PR, and thought leadership to position your company as an industry leader and employer of choice.",
    rolesAndResponsibilities: [
      "Create and promote compelling digital content across social media, blogs, and campaigns.",
      "Build and engage online communities to expand brand loyalty.",
      "Collaborate with product and marketing teams for consistent messaging.",
      "Monitor and respond to brand-related conversations and feedback.",
      "Identify partnership opportunities and manage influencer relationships."
    ],
    requirements: [
      "Experience in digital marketing, content creation, or community management.",
      "Knowledge of SEO, social media platforms, and analytics tools.",
      "Strong writing and storytelling capabilities.",
      "Ability to work creatively and strategically."
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
      "Lead security operations, risk assessments, and vulnerability management.",
      "Implement controls for data privacy, access management, and threat detection.",
      "Coordinate incident response and ensure compliance with data protection laws.",
      "Educate teams on cybersecurity best practices and protocols.",
      "Collaborate with IT and DevOps to secure cloud infrastructure."
    ],
    requirements: [
      "Experience in cybersecurity, information security, or IT security roles.",
      "Certifications such as CISSP, CEH, or CISM preferred.",
      "Knowledge of security tools, firewalls, and network protocols.",
      "Strong analytical and problem-solving skills."
    ],
    perks: ["Security conference budget (e.g., Black Hat, DEF CON)", "Advanced security certifications (e.g., CISSP, OSCP)", "Latest security software", "Ethical hacking opportunities"],
  },
  {
    id: "data-security-guardian",
    title: "Data Security Guardian",
    category: "Security",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Safeguard systems and customer data against threats. Conduct security assessments, manage firewalls and encryption, monitor vulnerabilities, and lead response planning for incidents. Educate teams on best practices and develop policies to ensure compliance with industry standards.",
    rolesAndResponsibilities: [
      "Lead security operations, risk assessments, and vulnerability management.",
      "Implement controls for data privacy, access management, and threat detection.",
      "Coordinate incident response and ensure compliance with data protection laws.",
      "Educate teams on cybersecurity best practices and protocols.",
      "Collaborate with IT and DevOps to secure cloud infrastructure."
    ],
    requirements: [
      "Experience in cybersecurity, information security, or IT security roles.",
      "Certifications such as CISSP, CEH, or CISM preferred.",
      "Knowledge of security tools, firewalls, and network protocols.",
      "Strong analytical and problem-solving skills."
    ],
    perks: ["Advanced security training", "Budget for security tools", "Career growth in a critical field", "Contribution to a secure product"],
  },
  {
    id: "ai-product-architect",
    title: "AI Product Architect",
    category: "AI",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Lead the ideation, design, and development of AI-driven products across various sectors. Define architecture, ensure robust data pipelines, and guide the team in deploying and optimizing AI/ML models. Evaluate new AI technologies for integration and maintain compliance with ethical standards.",
    rolesAndResponsibilities: [
        "Design and oversee AI product architectures aligned with business goals.",
        "Ensure integration of AI models with software platforms reliably and efficiently.",
        "Collaborate with data scientists, engineers, and product managers.",
        "Maintain documentation and oversee technical governance.",
        "Analyze new AI technologies for potential product enhancements."
    ],
    requirements: [
      "Expert in AI/ML concepts, cloud services, data pipelines.",
      "Proven experience architecting AI-based products.",
      "Strong programming and system design skills.",
      "Ability to lead cross-functional technical teams."
    ],
    perks: ["Lead innovative AI projects", "Work with a talented AI team", "Access to state-of-the-art MLOps tools", "Shape the future of our AI products"],
  },
  {
    id: "product-strategy-lead",
    title: "Product Strategy Lead",
    category: "Product",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Define the product vision and develop winning strategies for market entry and growth. Conduct competitive analysis, gather user feedback, prioritize feature development, and align roadmaps with business objectives. Work closely with leadership, design, and engineering to translate strategy into actionable plans.",
    rolesAndResponsibilities: [
        "Develop and communicate product vision and strategy.",
        "Conduct market research, competitor analysis, and user feedback loops.",
        "Align cross-team priorities and manage product roadmaps.",
        "Facilitate product launches and monitor key performance indicators.",
        "Advise leadership on product opportunities and risks."
    ],
    requirements: [
      "Experience in product management or strategy roles.",
      "Strong business acumen and analytical skills.",
      "Excellent stakeholder management and communication.",
      "Familiarity with agile development and product lifecycle."
    ],
    perks: ["High-level strategic impact", "Leadership and mentorship role", "Direct influence on company direction", "Competitive bonus structure"],
  },
  {
    id: "innovation-solutions-engineer",
    title: "Innovation Solutions Engineer",
    category: "Engineering",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Design and implement advanced software solutions using the latest technologies. Collaborate with cross-functional teams to build products that deliver high value at speed. Ensure scalability, reliability, and security while following agile and DevOps best practices. Constantly research and prototype emerging tools and frameworks relevant to your domain.",
    rolesAndResponsibilities: [
        "Design and build innovative software solutions addressing unique client challenges.",
        "Collaborate with R&D and product teams to prototype and test new ideas.",
        "Integrate latest technologies such as AI, automation, and analytics.",
        "Ensure code quality, scalability, and performance.",
        "Participate in code reviews and mentor junior engineers."
    ],
    requirements: [
      "Experience in software engineering with innovative, client-focused projects.",
      "Familiarity with AI, cloud, and modern software development frameworks.",
      "Strong problem-solving and adaptability skills.",
      "Excellent communication and team collaboration."
    ],
    perks: ["Work on a variety of challenging projects", "Flexible technology stack", "Professional development budget", "Opportunities for open-source contributions"],
  },
  {
    id: "customer-success-catalyst",
    title: "Customer Success Catalyst",
    category: "Customer Success",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Be the client’s advocate, ensuring successful adoption of solutions, high satisfaction, and long-term retention. Onboard accounts, provide technical assistance, collect feedback, and collaborate with product/engineering to improve the offering. Monitor key use metrics and provide training and resources to enable success.",
    rolesAndResponsibilities: [
        "Onboard and guide customers through the product journey.",
        "Maintain strong relationships and respond proactively to issues.",
        "Collaborate with product and engineering to resolve customer challenges.",
        "Drive usage, feature adoption, and customer loyalty.",
        "Collect and synthesize customer feedback for continuous improvement."
    ],
    requirements: [
      "Experience in customer support, success, or account management.",
      "Passion for customer service and data-driven decision-making.",
      "Strong interpersonal and communication skills.",
      "Familiarity with CRM and customer success software."
    ],
    perks: ["Build strong client relationships", "Directly impact customer satisfaction", "Performance-based bonuses", "Professional growth opportunities"],
  },
  {
    id: "ux-ui-design-lead",
    title: "UX/UI Design Lead",
    category: "Design",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Lead the design of intuitive, modern, and visually striking interfaces for our digital products. Mentor a team of designers, establish and maintain design systems, and champion a user-centered design process from research to implementation.",
    rolesAndResponsibilities: [
        "Lead and manage a UX/UI design team.",
        "Develop design frameworks, style guides, and conduct usability testing.",
        "Collaborate with product and engineering for seamless implementation.",
        "Oversee design innovation, accessibility, and brand consistency."
    ],
    requirements: [
      "Proven experience as a UX/UI lead or senior designer.",
      "Portfolio showcasing user-centered design and innovation.",
      "Strong expertise with design tools like Figma, Sketch, Adobe Creative Suite.",
      "Ability to guide and mentor design teams."
    ],
    perks: ["Lead a creative team", "Shape the visual identity of our products", "Access to top design tools", "Opportunities for creative freedom"],
  },
  {
    id: "engineering-team-lead",
    title: "Engineering Team Lead",
    category: "Engineering",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Lead a team of software engineers in building and maintaining high-quality software products. Provide technical guidance, mentor team members, and ensure the successful delivery of projects. Foster a collaborative and productive team environment.",
    rolesAndResponsibilities: [
        "Manage development teams and allocate resources effectively.",
        "Ensure adherence to coding standards and efficient project execution.",
        "Facilitate communication between product, QA, and management.",
        "Lead technical planning, reviews, and mentoring junior staff."
    ],
    requirements: [
      "Significant experience in software development and team leadership.",
      "Strong technical expertise in full-stack development.",
      "Excellent organizational and interpersonal skills.",
      "Ability to motivate and lead teams under tight deadlines."
    ],
    perks: ["Leadership and mentorship opportunities", "Influence over technical direction", "Team performance bonuses", "Professional management training"],
  },
  {
    id: "devops-lead",
    title: "DevOps Lead",
    category: "DevOps",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Lead the DevOps team in automating and optimizing our software delivery processes. Design and manage our cloud infrastructure, ensure system reliability and security, and promote a culture of DevOps best practices.",
    rolesAndResponsibilities: [
        "Strategize and maintain infrastructure and CI/CD pipelines.",
        "Lead DevOps team and ensure automation, security, and performance.",
        "Monitor systems and resolve escalated deployment issues.",
        "Collaborate on disaster recovery, backup, and security policies."
    ],
    requirements: [
      "Advanced experience in cloud platforms, containerization, and automation.",
      "Leadership experience in DevOps or infrastructure teams.",
      "Strong scripting and systems knowledge.",
      "Excellent problem-solving and communication skills."
    ],
    perks: ["Lead a critical engineering function", "Budget for advanced tooling", "Strategic role in technical operations", "Flexible on-call schedule"],
  },
  {
    id: "qa-test-lead",
    title: "QA/Test Lead",
    category: "QA",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Lead our quality assurance efforts to ensure our products meet the highest standards of quality and reliability. Develop and implement test strategies, manage automated and manual testing processes, and work closely with development teams to identify and resolve issues.",
    rolesAndResponsibilities: [
        "Develop and execute comprehensive test plans and strategies.",
        "Lead and mentor a team of QA engineers.",
        "Oversee both manual and automated testing efforts.",
        "Collaborate with developers to ensure product quality from start to finish."
    ],
    requirements: [],
    perks: ["Own the quality assurance process", "Access to modern testing frameworks", "Critical role in product delivery", "Opportunities for certification"],
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    category: "Customer Success",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Manage a portfolio of clients, ensuring they achieve their desired outcomes while using our products. Develop strong relationships, provide strategic advice, and act as the voice of the customer to internal teams.",
    rolesAndResponsibilities: [
        "Onboard and guide customers through the product journey.",
        "Maintain strong relationships and respond proactively to issues.",
        "Collaborate with product and engineering to resolve customer challenges.",
        "Drive usage, feature adoption, and customer loyalty.",
        "Collect and synthesize customer feedback for continuous improvement."
    ],
    requirements: [
      "Experience in customer support, success, or account management.",
      "Passion for customer service and data-driven decision-making.",
      "Strong interpersonal and communication skills.",
      "Familiarity with CRM and customer success software."
    ],
    perks: ["Build and manage key client relationships", "Directly contribute to customer retention", "Competitive commission and bonus structure", "Professional development opportunities"],
  },
  {
    id: "hr-talent-lead",
    title: "HR & Talent Lead",
    category: "HR",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "Lead our efforts to attract, retain, and develop top talent. Manage the full recruitment lifecycle, develop and implement HR policies, and foster a positive and inclusive company culture. Act as a strategic partner to leadership on all people-related matters.",
    rolesAndResponsibilities: [
        "Lead the full-cycle recruitment process to attract top talent.",
        "Develop and implement HR policies and programs.",
        "Champion a positive and inclusive company culture.",
        "Advise leadership on talent management and organizational development."
    ],
    requirements: [],
    perks: ["Shape the company culture", "Lead a critical business function", "Strategic role with leadership visibility", "Budget for wellness and culture initiatives"],
  },
  
  // Internship Roles
  {
    id: "software-development-intern",
    title: "Software Development Intern",
    category: "Engineering",
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
    requirements: [],
    perks: ["Mentorship from senior engineers", "Hands-on project experience", "Flexible work hours", "Potential for future employment"],
  },
  {
    id: "ai-data-science-intern",
    title: "AI & Data Science Intern",
    category: "AI",
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
    requirements: [],
    perks: ["Work with large datasets and cutting-edge models", "Mentorship from data scientists", "Gain practical AI/ML skills", "Academic credit support"],
  },
  {
    id: "ui-ux-design-intern",
    title: "UI/UX Design Intern",
    category: "Design",
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
    requirements: [],
    perks: ["Build a professional design portfolio", "Mentorship from experienced designers", "Access to premium design tools", "Creative and collaborative environment"],
  },
  {
    id: "devops-cloud-engineering-intern",
    title: "DevOps & Cloud Engineering Intern",
    category: "DevOps",
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
    requirements: [],
    perks: ["Hands-on experience with AWS, GCP, or Azure", "Learn industry-standard DevOps tools", "Mentorship from senior DevOps engineers", "Contribute to mission-critical systems"],
  },
  {
    id: "product-management-intern",
    title: "Product Management Intern",
    category: "Product",
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
    requirements: [],
    perks: ["Learn the full product development lifecycle", "Gain strategic business experience", "Mentorship from product leaders", "Impact product direction"],
  },
  {
    id: "cybersecurity-intern",
    title: "Cybersecurity Intern",
    category: "Security",
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
    requirements: [],
    perks: ["Gain experience in a high-demand field", "Work with advanced security tools", "Mentorship from cybersecurity experts", "Understand real-world security challenges"],
  },
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    category: "Marketing",
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
    requirements: [],
    perks: ["Hands-on marketing campaign experience", "Learn analytics and reporting tools", "Creative and dynamic work environment", "Mentorship from marketing professionals"],
  },
  {
    id: "customer-success-intern",
    title: "Customer Success Intern",
    category: "Customer Success",
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
    requirements: [],
    perks: ["Develop strong communication and client-facing skills", "Directly impact user satisfaction", "Work in a supportive team environment", "Learn about the SaaS business model"],
  },
  {
    id: "software-engineering-intern-2",
    title: "Software Engineering Intern",
    category: "Engineering",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Work on feature development, bug fixing, and learn modern coding practices alongside the engineering team.",
    rolesAndResponsibilities: [
      "Contribute to web/app development.",
      "Learn modern frameworks while working alongside senior developers."
    ],
    requirements: [],
    perks: ["Mentorship from senior engineers", "Hands-on project experience", "Flexible work hours", "Potential for future employment"],
  },
  {
    id: "ai-ml-research-intern",
    title: "AI/ML Research Intern",
    category: "AI",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Assist in building and testing AI models, perform data analysis, and explore new machine learning techniques.",
    rolesAndResponsibilities: [
      "Assist in building and testing AI models.",
      "Perform data analysis.",
      "Explore new machine learning techniques."
    ],
    requirements: [],
    perks: ["Work with large datasets and cutting-edge models", "Mentorship from data scientists", "Gain practical AI/ML skills", "Academic credit support"],
  },
  {
    id: "product-design-intern",
    title: "Product Design Intern",
    category: "Design",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Collaborate with designers to create intuitive interfaces, work on user research, and contribute to UX/UI projects.",
    rolesAndResponsibilities: [
      "Collaborate with designers to create intuitive interfaces.",
      "Work on user research.",
      "Contribute to UX/UI projects."
    ],
    requirements: [],
    perks: ["Build a professional design portfolio", "Mentorship from experienced designers", "Access to premium design tools", "Creative and collaborative environment"],
  },
  {
    id: "business-analytics-intern",
    title: "Business Analytics Intern",
    category: "Analytics",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Analyze product and business data, build dashboards, and deliver insights that support decision-making.",
    rolesAndResponsibilities: [
      "Analyze product and business data.",
      "Build dashboards.",
      "Deliver insights that support decision-making."
    ],
    requirements: [],
    perks: ["Develop strong analytical skills", "Work with business intelligence tools", "Present findings to leadership", "Data-driven decision making"],
  },
  {
    id: "customer-experience-intern",
    title: "Customer Experience Intern",
    category: "Customer Success",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "Engage with users, prepare documentation, and help in onboarding and troubleshooting customer issues.",
    rolesAndResponsibilities: [
      "Engage with users.",
      "Prepare documentation.",
      "Help in onboarding and troubleshooting customer issues."
    ],
    requirements: [],
    perks: ["Develop strong communication and client-facing skills", "Directly impact user satisfaction", "Work in a supportive team environment", "Learn about the SaaS business model"],
  }
];

export const aboutCompany = "At Branch Edge, we are dedicated to delivering next-generation software and AI solutions with unrivaled speed and quality. Our mission is to empower industries and communities with transformative digital tools that accelerate progress, whether in education, real estate, government, or beyond. By combining cutting-edge technology, agile delivery, and a passion for innovation, we act as a digital catalyst helping organizations thrive in a rapidly changing world. Our commitment to integrity, creativity, and client success positions us as a trusted partner for the future, wherever technology paves the way.";

export function getJobById(id: string) {
    return jobOpenings.find(job => job.id === id);
}
