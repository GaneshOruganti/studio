
export const jobOpenings = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    category: "Engineering",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "We are seeking an experienced Frontend Developer to build and maintain our user-facing applications. You will work with the latest technologies to create high-performance, scalable, and beautiful web experiences.",
    rolesAndResponsibilities: [
      "Develop and maintain user-facing features using React and Next.js.",
      "Collaborate with product managers and designers to create intuitive UI/UX.",
      "Optimize applications for maximum speed and scalability.",
      "Write clean, maintainable, and well-documented code.",
    ],
    perks: ["Flexible work hours", "Health insurance", "Generous PTO", "Remote work stipend"],
  },
  {
    id: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    category: "Engineering",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "As a Cloud Solutions Architect, you will design and implement robust, scalable, and secure cloud infrastructure. A deep understanding of AWS, Azure, or GCP is essential for this role.",
    rolesAndResponsibilities: [
        "Design and deploy scalable, highly available, and fault-tolerant systems on major cloud platforms.",
        "Define and document best practices and strategies regarding application deployment and infrastructure maintenance.",
        "Provide guidance to development teams on cloud-native architectures.",
        "Manage cloud environments in accordance with company security guidelines."
    ],
    perks: ["401(k) matching", "Professional development budget", "Stock options", "On-site gym"],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    category: "Design",
    location: "Remote",
    type: "Contract",
    salary: "Not Disclosed",
    description: "Join our creative team to design intuitive and engaging user interfaces. You will be responsible for the entire design process, from user research and wireframing to creating pixel-perfect mockups.",
    rolesAndResponsibilities: [
        "Conduct user research and evaluate user feedback.",
        "Create user flows, wireframes, prototypes, and high-fidelity mockups.",
        "Collaborate with the engineering team to ensure designs are implemented as intended.",
        "Maintain and evolve our design system."
    ],
    perks: ["Flexible schedule", "Creative autonomy", "Access to design conferences", "Latest design software"],
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    category: "Engineering",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "We are looking for a talented AI/ML Engineer to develop and deploy machine learning models that solve real-world problems. You'll work on cutting-edge projects that push the boundaries of AI.",
    rolesAndResponsibilities: [
        "Design, build, and train machine learning models.",
        "Deploy models to production and monitor their performance.",
        "Work with large datasets to extract valuable insights.",
        "Stay up-to-date with the latest advancements in AI/ML."
    ],
    perks: ["Access to powerful computing resources", "Innovation-driven culture", "Conference and travel opportunities", "Catered lunches"],
  },
  {
    id: "marketing-specialist",
    title: "Digital Marketing Specialist",
    category: "Marketing",
    location: "Remote",
    type: "Full-Time",
    salary: "Competitive",
    description: "We're looking for a data-driven Digital Marketing Specialist to own our online presence. You will manage SEO, SEM, social media, and email marketing campaigns to drive brand awareness and lead generation.",
     rolesAndResponsibilities: [
        "Develop and execute SEO/SEM strategies.",
        "Manage social media channels and create engaging content.",
        "Design and run email marketing campaigns.",
        "Analyze and report on marketing performance."
    ],
    perks: ["Remote-first culture", "Marketing tech stack", "Team retreats", "Performance bonuses"],
  },
  {
    id: "software-engineer-intern",
    title: "Software Engineer Intern",
    category: "Internship",
    location: "Remote",
    type: "Internship",
    salary: "Paid",
    description: "A fantastic opportunity for students to gain hands-on experience. As a Software Engineer Intern, you will work alongside our development team on real projects, contributing to our codebase and learning from experienced mentors.",
    rolesAndResponsibilities: [
        "Assist in the development of new features.",
        "Write and test code to ensure quality.",
        "Participate in code reviews and team meetings.",
        "Learn and apply new technologies."
    ],
    perks: ["Mentorship program", "Real-world project experience", "Networking events", "Potential for full-time offer"],
  }
];

export const aboutCompany = "At Branch Edge, we are dedicated to delivering next-generation software and AI solutions with unrivaled speed and quality. Our mission is to empower industries and communities with transformative digital tools that accelerate progress, whether in education, real estate, government, or beyond. By combining cutting-edge technology, agile delivery, and a passion for innovation, we act as a digital catalyst—helping organizations thrive in a rapidly changing world. Our commitment to integrity, creativity, and client success positions us as a trusted partner for the future, wherever technology paves the way.";

export function getJobById(id: string) {
    return jobOpenings.find(job => job.id === id);
}
