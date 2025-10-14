
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", avatarId: "testimonial-avatar-2", social: { twitter: "#", linkedin: "#" }, contribution: "John leads the company with a vision for innovation and excellence, driving the team to create cutting-edge solutions." },
    { name: "Jane Smith", role: "Chief Technology Officer", avatarId: "testimonial-avatar-1", social: { twitter: "#", linkedin: "#" }, contribution: "Jane architects our technology stack, ensuring our products are scalable, secure, and built on the latest technologies." },
    { name: "Alex Johnson", role: "Lead Developer", avatarId: "testimonial-avatar-3", social: { twitter: "#", linkedin: "#" }, contribution: "Alex guides the development team, turning complex requirements into robust and efficient software solutions." },
    { name: "Emily White", role: "UX/UI Designer", avatarId: "testimonial-avatar-6", social: { twitter: "#", linkedin: "#" }, contribution: "Emily crafts intuitive and beautiful user experiences, making sure our products are a joy to use." },
    { name: "Michael Chen", role: "Cloud Architect", avatarId: "testimonial-avatar-5", social: { twitter: "#", linkedin: "#" }, contribution: "Michael designs and manages our cloud infrastructure, ensuring high availability and performance for all our services." },
    { name: "Sarah Lee", role: "Data Scientist", avatarId: "testimonial-avatar-4", social: { twitter: "#", linkedin: "#" }, contribution: "Sarah turns data into insights, leveraging machine learning to drive product innovation and business strategy." },
];

export default function TeamPage() {
    const [activeIndex, setActiveIndex] = useState(Math.floor(teamMembers.length / 2));

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const getCardStyle = (index: number) => {
        const offset = (index - activeIndex + teamMembers.length) % teamMembers.length - Math.floor(teamMembers.length / 2);
        const scale = 1 - Math.abs(offset) * 0.15;
        const translateX = offset * 40;
        const rotateY = -offset * 15;
        const zIndex = teamMembers.length - Math.abs(offset);

        return {
            transform: `translateX(${translateX}%) perspective(1000px) rotateY(${rotateY}deg) scale(${scale})`,
            zIndex: zIndex,
            transition: 'transform 0.5s ease, opacity 0.5s ease',
            opacity: 1 - Math.abs(offset) * 0.3,
        };
    };

    const activeMember = teamMembers[activeIndex];

    return (
        <div className="container py-12 md:py-24">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                        Meet Our Team
                    </h1>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The passionate individuals behind Branch Edge, driving innovation and excellence.
                    </p>
                </div>

                <div className="relative w-full h-[350px] flex items-center justify-center">
                    {teamMembers.map((member, index) => {
                        const avatar = PlaceHolderImages.find(img => img.id === member.avatarId);
                        return (
                            <div
                                key={member.name}
                                className="absolute w-[200px] h-[250px]"
                                style={getCardStyle(index)}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="w-full h-full p-4 bg-card rounded-lg shadow-lg flex flex-col items-center justify-center text-center cursor-pointer border">
                                    <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                                        {avatar && <AvatarImage src={avatar.imageUrl} alt={member.name} data-ai-hint={avatar.imageHint} />}
                                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="font-bold font-headline text-lg">{member.name}</h3>
                                    <p className="text-sm text-primary">{member.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <div className="relative text-center mt-12 h-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-2xl mx-auto"
                        >
                            <h3 className="text-2xl font-bold font-headline">{activeMember.name}</h3>
                            <p className="text-lg text-primary font-semibold">{activeMember.role}</p>
                            <p className="text-muted-foreground mt-2">{activeMember.contribution}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <Button variant="outline" size="icon" onClick={handlePrev}>
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleNext}>
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
