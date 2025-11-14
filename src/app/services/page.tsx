
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { AnimatedTimeline } from "@/components/animated-timeline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type Metadata } from "next";
import { services } from "@/lib/services";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our comprehensive suite of technology services, including AI & ML, web development, cloud solutions, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <div className="w-full max-w-6xl mx-auto">
        <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 services-anim">
            <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A complete suite of technological solutions to build, grow, and scale your business. We are your partners in innovation.
            </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
                <div key={service.name} className="relative group services-card-anim" style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                <Card className="h-full bg-background transition-all duration-200 relative">
                    <CardHeader className="flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                            <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-lg">{service.name}</CardTitle>
                    </div>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                    <p className="text-xs text-muted-foreground">
                        {service.description}
                    </p>
                    </CardContent>
                </Card>
                </div>
            ))}
            </div>

            <div className="mt-12 text-center services-anim">
                <Button asChild size="lg" className="font-bold">
                    <Link href="/contact">
                        Book a Free Consulting Session
                        <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>

            <div className="mt-24">
                <div className="text-center mb-12 services-anim">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Process</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">A glimpse into how we bring your ideas to life.</p>
                </div>
                <AnimatedTimeline />
            </div>
        </div>
    </div>
  );
}
