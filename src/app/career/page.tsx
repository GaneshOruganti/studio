
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Briefcase, ExternalLink, DollarSign } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
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
    location: "Tech City, USA",
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
    location: "Tech City, USA",
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
    location: "Tech City, USA",
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

export const aboutCompany = "Branch Edge is a leader in innovative technology solutions, committed to driving success for our clients. We foster a collaborative and inclusive environment where creativity and growth are encouraged. Join us to be a part of a team that's shaping the future of technology.";


export default function CareerPage() {
  const [filter, setFilter] = useState("All");

  const jobCategories = ["All", ...Array.from(new Set(jobOpenings.map(job => job.category)))];
  
  const filteredJobs = filter === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === filter);

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
          Join Our Team
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          We are always looking for passionate and talented individuals to join
          our mission. Explore our open positions below.
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        <Select onValueChange={setFilter} defaultValue="All">
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {jobCategories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                  <CardTitle className="font-headline text-2xl">{job.title}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-shrink-0">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> {job.type}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" /> {job.salary}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {job.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button variant="outline" asChild>
                  <Link href={`/career/${job.id}`}>
                    View Full JD
                    <ExternalLink className="ml-2" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">
                    Apply Now <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center text-muted-foreground">No open positions in this category.</p>
        )}
      </div>
    </div>
  );
}

// Store job data in a way that can be imported by the dynamic page
export function getJobById(id: string) {
  return jobOpenings.find(job => job.id === id);
}
