
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart, Cloud, Code, Shield, TrendingUp, UserCheck, Star, AppWindow, GanttChartSquare, BrainCircuit, DatabaseZap, FileText, Megaphone, Palette, Layers, UserCog, Database, Search, Bot, PieChart, Briefcase, ShoppingCart, Globe, FolderKanban } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SuccessCounters } from "@/components/success-counters";
import { InteractiveHeroDynamic } from "@/components/interactive-hero-dynamic";
import { LogoCloud } from "@/components/logo-cloud";

const services = [
  { name: "AI & ML Solutions", icon: BrainCircuit, description: "Artificial intelligence and machine learning solutions to automate and optimize processes." },
  { name: "Website Development", icon: Globe, description: "Creating stunning, high-performance websites tailored to your business needs." },
  { name: "CRM Development", icon: UserCog, description: "Customer Relationship Management systems to manage and improve customer interactions." },
  { name: "Portfolio Management", icon: FolderKanban, description: "Strategic management of your project and investment portfolios to maximize returns." },
  { name: "RCM Development", icon: Database, description: "Revenue Cycle Management systems to optimize financial processes and billing." },
  { name: "Answer Engine Optimization", icon: Bot, description: "Optimize content for AI-powered search and voice assistants." },
  { name: "Search Engine Optimization", icon: Search, description: "Improve your website's visibility and ranking on search engines." },
  { name: "Content Creation", icon: FileText, description: "We create content for online branding to enhance your digital presence." },
  { name: "Digital Marketing", icon: Megaphone, description: "Strategic digital marketing campaigns to boost your online presence." },
  { name: "Logo & Brand Design", icon: Palette, description: "Crafting memorable logos and brand identities that tell your story." },
  { name: "Business Software", icon: Briefcase, description: "Custom enterprise software solutions that streamline operations and boost productivity." },
  { name: "Mobile Applications", icon: AppWindow, description: "Native and cross-platform mobile apps for iOS and Android platforms." },
  { name: "Cloud Solutions", icon: DatabaseZap, description: "Scalable and secure cloud hosting and infrastructure management." },
  { name: "UI/UX Design", icon: Palette, description: "Crafting intuitive and engaging user interfaces for a seamless user experience."},
  { name: "E-commerce Solutions", icon: ShoppingCart, description: "Building robust e-commerce platforms to drive online sales and growth." },
];

const whatWeDo = [
  {
    name: "Custom Software & Apps",
    icon: GanttChartSquare,
    description: "Enterprise software and mobile applications to streamline operations and boost productivity.",
  },
  {
    name: "AI & Data Analytics",
    icon: BrainCircuit,
    description: "Leverage AI and data to gain actionable insights, automate processes, and drive business growth.",
  },
  {
    name: "Cloud & DevOps",
    icon: DatabaseZap,
    description: "Scalable cloud infrastructure and CI/CD pipelines for high availability and performance.",
  },
  {
    name: "Branding & Marketing",
    icon: Megaphone,
    description: "Strategic digital marketing, SEO, and brand design to grow your audience and captivate customers.",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <InteractiveHeroDynamic />
          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                Speedopus India
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

        <section id="what-we-do" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 services-anim">
                  <div className="inline-block rounded-full bg-muted px-4 py-2 text-sm font-semibold text-primary">Our Expertise</div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">What We Do</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We build the innovative digital solutions that help businesses like yours succeed. From smart software to standout branding, we're here to help you grow.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-7xl items-start gap-8 py-12 lg:grid-cols-4 md:grid-cols-2">
                {whatWeDo.map((item, i) => (
                  <div key={item.name} className="services-card-anim" style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
                    <Card className="h-full text-center transition-all duration-300 bg-transparent border-0 shadow-none hover:bg-card hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                      <CardContent className="p-6 flex flex-col items-center gap-4">
                        <div className="p-4 rounded-lg mb-4 bg-card">
                           <item.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-headline text-xl font-bold">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 services-anim">
                  <div className="inline-block rounded-full bg-background px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                    <Star className="inline-block h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                    Complete Solutions
                  </div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Our Services</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Comprehensive technology solutions to meet all your business needs and drive digital transformation.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-7xl justify-center gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
                {services.slice(0, 6).map((service, i) => (
                  <div key={service.name} className="relative group services-card-anim" style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
                     <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <Card className="h-full bg-background transition-all duration-200 relative">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-muted">
                             <service.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-bold text-lg">{service.name}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center services-anim">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/services">
                    Explore All Our Services
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials-section" className="w-full pt-12 pb-12 md:pb-24 lg:pb-32 bg-background">
            <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
              <div className="w-full max-w-6xl mx-auto">
                  <div className="space-y-3 services-anim">
                      <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Track Record</h2>
                      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          Don't just take our word for it. Our results and client feedback showcase our commitment to excellence.
                      </p>
                  </div>
                  <div className="w-full mt-8 services-anim">
                      <SuccessCounters />
                  </div>
                  <div className="my-6 services-anim">
                    <Button asChild>
                      <Link href="/testimonials">View Our Testimonials</Link>
                    </Button>
                  </div>
                  <div className="mt-24 text-center services-anim">
                    <h2 className="text-2xl font-bold font-headline tracking-tighter sm:text-3xl mb-6">Trusted by the World's Best Companies</h2>
                    <div className="mt-8">
                        <LogoCloud />
                    </div>
                  </div>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
