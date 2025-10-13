import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart, Cloud, Code, Shield, TrendingUp, UserCheck, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SuccessCounters } from "@/components/success-counters";
import { InteractiveHeroDynamic } from "@/components/interactive-hero-dynamic";
import { LogoCloud } from "@/components/logo-cloud";

const services = [
  { name: "Web/App Development", icon: Code, description: "Crafting bespoke digital experiences from scratch." },
  { name: "Cloud Hosting", icon: Cloud, description: "Scalable and secure cloud infrastructure for your applications." },
  { name: "Analytics", icon: BarChart, description: "Actionable insights from your data to drive growth." },
  { name: "SEO", icon: TrendingUp, description: "Boosting your online visibility to reach the right audience." },
  { name: "Managed IT", icon: Shield, description: "Proactive IT management to keep your systems running smoothly." },
  { name: "User Authentication", icon: UserCheck, description: "Secure and seamless user login and management." },
];

const testimonials = [
  { name: "Jane Doe", company: "Innovate Inc.", quote: "Branch Edge transformed our digital presence. Their team is professional, and the results speak for themselves.", avatarId: "testimonial-avatar-1", rating: 4.8 },
  { name: "John Smith", company: "Solutions Co.", quote: "The best tech partner we've ever worked with. Their insights and execution are top-notch.", avatarId: "testimonial-avatar-2", rating: 5.0 },
  { name: "Alex Ray", company: "Creative Minds", quote: "Working with Branch Edge was a breeze. They understood our vision and delivered beyond our expectations.", avatarId: "testimonial-avatar-3", rating: 4.9 },
  { name: "Sarah Lee", company: "DataDriven LLC", quote: "The analytics they provided gave us the clarity we needed to scale our operations effectively.", avatarId: "testimonial-avatar-4", rating: 4.7 },
  { name: "Michael Chen", company: "CloudScape", quote: "Their expertise in cloud solutions has been a game-changer for our infrastructure. Highly recommended!", avatarId: "testimonial-avatar-5", rating: 5.0 },
  { name: "Emily White", company: "Growthify", quote: "Our SEO rankings have skyrocketed since we started working with them. Incredible results!", avatarId: "testimonial-avatar-6", rating: 4.9 },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-current" />
      ))}
      {halfStar && <Star key="half" className="w-5 h-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5" />
      ))}
    </div>
  );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <InteractiveHeroDynamic />
          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                Branch Edge
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Driving innovation and modernity with cutting-edge technology services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-bold">
                  <Link href="/insights">Get AI Insights</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 services-anim">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Built for the Future</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of services to empower your business in the digital age.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {services.map((service, i) => (
                <div key={service.name} className="services-card-anim" style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
                  <Card className="h-full hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                         <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials-section" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
            <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Track Record</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Don't just take our word for it. Our results and client feedback showcase our commitment to excellence.
                    </p>
                </div>
                <div className="w-full">
                    <SuccessCounters />
                </div>
                <div id="partners" className="mt-12">
                  <h3 className="text-2xl font-bold font-headline tracking-tighter sm:text-3xl mb-8">
                    Trusted by the World's Best Companies
                  </h3>
                  <LogoCloud />
                </div>
                <div className="w-full max-w-7xl mx-auto pt-12 testimonial-slider overflow-hidden relative">
                    <div className="testimonial-slide-track flex">
                        {duplicatedTestimonials.map((testimonial, index) => {
                            const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                            return (
                                <div key={index} className="testimonial-slide flex-shrink-0 w-[350px] mx-4">
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                                            <Avatar className="w-16 h-16">
                                                {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />}
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                                            <div className="font-semibold">
                                                <p>{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                            </div>
                                            <StarRating rating={testimonial.rating} />
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
