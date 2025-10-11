import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart, Cloud, Code, Shield, TrendingUp, UserCheck } from "lucide-react";
import dynamic from 'next/dynamic';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SuccessCounters } from "@/components/success-counters";

const InteractiveHero = dynamic(() => import('@/components/interactive-hero').then(mod => mod.InteractiveHero), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background/10" />,
});

const services = [
  { name: "Web/App Development", icon: Code, description: "Crafting bespoke digital experiences from scratch." },
  { name: "Cloud Hosting", icon: Cloud, description: "Scalable and secure cloud infrastructure for your applications." },
  { name: "Analytics", icon: BarChart, description: "Actionable insights from your data to drive growth." },
  { name: "SEO", icon: TrendingUp, description: "Boosting your online visibility to reach the right audience." },
  { name: "Managed IT", icon: Shield, description: "Proactive IT management to keep your systems running smoothly." },
  { name: "User Authentication", icon: UserCheck, description: "Secure and seamless user login and management." },
];

const testimonials = [
  { name: "Jane Doe", company: "Innovate Inc.", quote: "Branch Edge transformed our digital presence. Their team is professional, and the results speak for themselves.", avatarId: "testimonial-avatar-1" },
  { name: "John Smith", company: "Solutions Co.", quote: "The best tech partner we've ever worked with. Their insights and execution are top-notch.", avatarId: "testimonial-avatar-2" },
  { name: "Alex Ray", company: "Creative Minds", quote: "Working with Branch Edge was a breeze. They understood our vision and delivered beyond our expectations.", avatarId: "testimonial-avatar-3" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <InteractiveHero />
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
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Built for the Future</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of services to empower your business in the digital age.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {services.map((service) => (
                <Card key={service.name} className="h-full hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
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
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
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
                <div className="w-full max-w-4xl mx-auto">
                    <Carousel opts={{ loop: true }} className="w-full">
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => {
                                const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                                return (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                                                    <Avatar>
                                                        {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />}
                                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                                                    <div className="font-semibold">
                                                        <p>{testimonial.name}</p>
                                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
