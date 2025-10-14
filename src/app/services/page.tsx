
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, UserCog, Database, Bot, Search, FileText, Megaphone, Briefcase, AppWindow, DatabaseZap, Palette, ShoppingCart } from "lucide-react";

const services = [
  { name: "AI & ML Solutions", icon: BrainCircuit, description: "Artificial intelligence and machine learning solutions to automate and optimize processes." },
  { name: "CRM Development", icon: UserCog, description: "Customer Relationship Management systems to manage and improve customer interactions." },
  { name: "RCM Development", icon: Database, description: "Revenue Cycle Management systems to optimize financial processes and billing." },
  { name: "Answer Engine Optimization", icon: Bot, description: "Optimize content for AI-powered search and voice assistants." },
  { name: "Search Engine Optimization", icon: Search, description: "Improve your website's visibility and ranking on search engines." },
  { name: "Content Creation", icon: FileText, description: "We create content for online branding to enhance your digital presence." },
  { name: "Digital Marketing/Branding", icon: Megaphone, description: "Strategic digital marketing campaigns and brand development to boost your online presence." },
  { name: "Business Software", icon: Briefcase, description: "Custom enterprise software solutions that streamline operations and boost productivity." },
  { name: "Mobile Applications", icon: AppWindow, description: "Native and cross-platform mobile apps for iOS and Android platforms." },
  { name: "Cloud Solutions", icon: DatabaseZap, description: "Scalable and secure cloud hosting and infrastructure management." },
  { name: "UI/UX Design", icon: Palette, description: "Crafting intuitive and engaging user interfaces for a seamless user experience."},
  { name: "E-commerce Solutions", icon: ShoppingCart, description: "Building robust e-commerce platforms to drive online sales and growth." },
];

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A complete suite of technological solutions to build, grow, and scale your business. We are your partners in innovation.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.name} className="relative group services-card-anim" style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
              <Card className="h-full bg-background transition-all duration-200 relative">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-base text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
