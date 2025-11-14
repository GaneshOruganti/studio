
"use client";

import Image from "next/image";
import { Handshake, Heart, Lightbulb, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SuccessTimeline } from "@/components/success-timeline";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Speedopus India's mission, vision, and the core values that drive our commitment to innovation and client success.",
};

const coreValues = [
    {
        title: "Innovation & Creativity",
        icon: Lightbulb,
        description: "We champion a culture of relentless innovation and creativity, constantly pushing the boundaries of technology to deliver groundbreaking solutions."
    },
    {
        title: "Client Partnership",
        icon: Handshake,
        description: "We build lasting partnerships with our clients, rooted in trust and collaboration, ensuring their success is at the core of everything we do."
    },
    {
        title: "Technology Leadership",
        icon: Rocket,
        description: "We strive to be at the forefront of technological advancements, delivering cutting-edge solutions that set industry standards and drive digital excellence."
    },
    {
        title: "Integrity & Trust",
        icon: ShieldCheck,
        description: "We operate with unwavering integrity and transparency, building trust with our clients and partners through every interaction."
    },
    {
        title: "Customer-Centric Approach",
        icon: Heart,
        description: "We prioritize customer satisfaction by offering exceptional service, from initial consultation to after-sales support and beyond."
    }
]

export default function AboutPage() {
  const texts = [
      "At Speedopus India, innovation drives everything we do. We specialize in delivering cutting-edge technology solutions including custom websites, e-commerce, AI-powered products, analytics, SEO, and cloud hosting with unmatched speed and quality.",
      "Our mission is to empower businesses by delivering agile, secure, and scalable digital solutions tailored to their unique needs. We go beyond technology by partnering with clients to accelerate growth, improve experiences, and unlock new potential.",
      "With a team rooted in creativity, integrity, and deep technical expertise, we continuously explore emerging technologies to shape the future of digital transformation. Join us on a journey of innovation where your success is our priority."
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
        <div className="container py-12 md:py-24">
            <div className="text-center">
                <div className="space-y-6 services-anim">
                    <p className="font-semibold text-primary">Who We Are?</p>
                    <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                    About Us
                    </h1>
                    <div className="space-y-4 text-muted-foreground text-lg max-w-3xl mx-auto">
                        {texts.map((text, i) => (
                            <p key={i} className="services-card-anim" style={{ animationDelay: `${i * 150}ms` }}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="py-12 md:py-24 bg-muted/20">
            <div className="container">
                <div className="text-center mb-16 services-anim">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Vision</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">To be a global leader in digital transformation, shaping the future of industries through relentless innovation and technological excellence.</p>
                </div>

                <div className="text-center mb-24 services-anim">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Mission</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">To accelerate our clients' success by delivering cutting-edge, agile, and scalable digital solutions with unmatched speed and quality.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {coreValues.slice(0, 3).map((value, i) => (
                        <div key={value.title} className="services-card-anim" style={{ animationDelay: `${i * 150}ms` }}>
                           <Card className="h-full bg-background/50">
                             <CardHeader className="flex flex-row items-center gap-4">
                               <div className="p-3 bg-primary/10 rounded-full">
                                 <value.icon className="w-6 h-6 text-primary" />
                               </div>
                               <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                             </CardHeader>
                             <CardContent>
                               <p className="text-muted-foreground">{value.description}</p>
                             </CardContent>
                           </Card>
                        </div>
                    ))}
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center lg:w-2/3 lg:mx-auto">
                     {coreValues.slice(3).map((value, i) => (
                        <div key={value.title} className="services-card-anim" style={{ animationDelay: `${(i + 3) * 150}ms` }}>
                           <Card className="h-full bg-background/50">
                             <CardHeader className="flex flex-row items-center gap-4">
                               <div className="p-3 bg-primary/10 rounded-full">
                                 <value.icon className="w-6 h-6 text-primary" />
                               </div>
                               <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                             </CardHeader>
                             <CardContent>
                               <p className="text-muted-foreground">{value.description}</p>
                             </CardContent>
                           </Card>
                        </div>
                    ))}
                </div>
                
                <div className="mt-24">
                    <div className="text-center mb-12 services-anim">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Track Record</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">A proven history of delivering excellence and driving success.</p>
                    </div>
                    <SuccessTimeline />
                </div>

            </div>
        </div>
    </div>
  );
}
