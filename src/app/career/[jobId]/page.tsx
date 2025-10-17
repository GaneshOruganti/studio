

import { getJobById, aboutCompany } from "@/lib/jobs";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function JobDetailsPage({ params }: { params: { jobId: string } }) {
  const job = getJobById(params.jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-muted/20">
        <div className="container py-12 md:py-24">
            <div className="max-w-4xl mx-auto w-full max-w-6xl">
                <div className="mb-8 services-anim">
                <Button variant="outline" asChild>
                    <Link href="/career">
                    <ArrowLeft className="mr-2" />
                    Back to Careers
                    </Link>
                </Button>
                </div>

                <div className="space-y-8">
                <Card className="services-card-anim">
                    <CardHeader>
                    <h1 className="text-4xl font-bold font-headline tracking-tighter">{job.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground pt-2">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" /> {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" /> {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" /> {job.salary}
                        </div>
                    </div>
                    </CardHeader>
                    <CardContent>
                    <p className="text-lg text-muted-foreground">{job.description}</p>
                    </CardContent>
                </Card>

                <Card className="services-card-anim" style={{ animationDelay: '100ms' }}>
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl">About Speedopus</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground">{aboutCompany}</p>
                    </CardContent>
                </Card>

                <Card className="services-card-anim" style={{ animationDelay: '200ms' }}>
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl">Roles and Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {job.rolesAndResponsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>

                {job.requirements && job.requirements.length > 0 && (
                  <Card className="services-card-anim" style={{ animationDelay: '300ms' }}>
                      <CardHeader>
                          <CardTitle className="font-headline text-2xl">Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                              {job.requirements.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                      </CardContent>
                  </Card>
                )}

                <Card className="services-card-anim" style={{ animationDelay: '400ms' }}>
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl">Perks & Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
                        {job.perks.map((perk, index) => (
                        <li key={index}>{perk}</li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
                </div>

                <div className="mt-12 text-center services-anim" style={{ animationDelay: '500ms' }}>
                <Button size="lg" asChild>
                    <Link href="/contact">
                    Apply Now <ArrowRight className="ml-2" />
                    </Link>
                </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
