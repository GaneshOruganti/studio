
"use client";

import { Award, Users, TrendingUp, Briefcase, Star, Smile, Calendar } from "lucide-react";
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
];

export function TrackRecord() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.slice(0,3).map((stat, index) => (
                <div key={index} className="services-card-anim" style={{ animationDelay: `${index * 100}ms` }}>
                    <Card className="bg-muted/20 hover:bg-card">
                        <CardContent className="p-6 flex items-center gap-6">
                            <stat.icon className="w-10 h-10 text-primary flex-shrink-0" />
                            <div>
                                <p className="text-3xl font-bold font-headline text-primary">{stat.value}</p>
                                <p className="text-muted-foreground">{stat.label}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
            <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 md:mx-auto">
                    {stats.slice(3).map((stat, index) => (
                        <div key={index} className="services-card-anim" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                            <Card className="bg-muted/20 hover:bg-card">
                                <CardContent className="p-6 flex items-center gap-6">
                                    <stat.icon className="w-10 h-10 text-primary flex-shrink-0" />
                                    <div>
                                        <p className="text-3xl font-bold font-headline text-primary">{stat.value}</p>
                                        <p className="text-muted-foreground">{stat.label}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
