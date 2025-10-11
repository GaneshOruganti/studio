import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Cloud, Code, Shield, TrendingUp, UserCheck } from "lucide-react";

const services = [
  { name: "Web/App Development", icon: Code, description: "Crafting bespoke digital experiences from scratch. We build scalable, high-performance web and mobile applications tailored to your specific business needs." },
  { name: "Cloud Hosting", icon: Cloud, description: "Scalable and secure cloud infrastructure. Our solutions ensure high availability, performance, and cost-efficiency for your applications." },
  { name: "Analytics & Big Data", icon: BarChart, description: "Turn data into actionable insights. We help you leverage big data to make informed decisions and drive business growth." },
  { name: "SEO & Digital Marketing", icon: TrendingUp, description: "Boosting your online visibility to reach the right audience. Our strategies are designed to increase traffic, leads, and sales." },
  { name: "Managed IT Services", icon: Shield, description: "Proactive IT management to keep your systems running smoothly. We handle your IT so you can focus on your core business." },
  { name: "Secure User Authentication", icon: UserCheck, description: "Implementing robust and seamless user login and management systems, ensuring data privacy and security for your users." },
];

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
          Our Services
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A complete suite of technological solutions to build, grow, and scale your business. We are your partners in innovation.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name} className="flex flex-col h-full bg-card/50 hover:bg-card transition-colors duration-300">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
