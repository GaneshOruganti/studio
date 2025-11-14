
"use client";

import { Award, Briefcase, Calendar, Star, Smile, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
    {
        icon: Briefcase,
        value: "120+",
        label: "Projects Completed",
    },
    {
        icon: Smile,
        value: "35+",
        label: "Happy Clients",
    },
    {
        icon: Calendar,
        value: "4",
        label: "Years of Experience",
    },
    {
        icon: Award,
        value: "5K",
        label: "Support Tickets Solved",
    },
    {
        icon: Star,
        value: "4.9/5.0",
        label: "Customer Reviews",
    },
    {
        icon: TrendingUp,
        value: "100%",
        label: "Success Rate",
    },
];

export function TrackRecord() {
    return (
        <div className="mx-auto grid max-w-7xl justify-center gap-8 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
                <div key={index} className="relative group services-card-anim" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <Card className="h-full bg-background transition-all duration-200 relative">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-muted">
                                    <stat.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-lg">{stat.value}</h3>
                                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}
