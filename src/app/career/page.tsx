
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    description: "We are seeking an experienced Frontend Developer to build and maintain our user-facing applications. You will work with the latest technologies to create high-performance, scalable, and beautiful web experiences.",
    jdLink: "#",
    applyLink: "#",
  },
  {
    title: "Cloud Solutions Architect",
    location: "Tech City, USA",
    type: "Full-Time",
    description: "As a Cloud Solutions Architect, you will design and implement robust, scalable, and secure cloud infrastructure. A deep understanding of AWS, Azure, or GCP is essential for this role.",
    jdLink: "#",
    applyLink: "#",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Join our creative team to design intuitive and engaging user interfaces. You will be responsible for the entire design process, from user research and wireframing to creating pixel-perfect mockups.",
    jdLink: "#",
    applyLink: "#",
  },
  {
    title: "AI/ML Engineer",
    location: "Tech City, USA",
    type: "Full-Time",
    description: "We are looking for a talented AI/ML Engineer to develop and deploy machine learning models that solve real-world problems. You'll work on cutting-edge projects that push the boundaries of AI.",
    jdLink: "#",
    applyLink: "#",
  },
];

export default function CareerPage() {
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
      <div className="grid gap-8 max-w-4xl mx-auto">
        {jobOpenings.map((job, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <CardTitle className="font-headline text-2xl">{job.title}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {job.location}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" /> {job.type}
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
                <Link href={job.jdLink}>
                  View Full JD
                  <ExternalLink className="ml-2" />
                </Link>
              </Button>
              <Button asChild>
                <Link href={job.applyLink}>
                  Apply Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
