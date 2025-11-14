
"use client";

import { Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
    {
        icon: Award,
        value: "50+",
        label: "Successful Projects Delivered",
    },
    {
        icon: Users,
        value: "97%",
        label: "Client Satisfaction Rate",
    },
    {
        icon: TrendingUp,
        value: "100%",
        label: "Project Success Rate",
    },
];

export function TrackRecord() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
                <div key={index} className="services-card-anim" style={{ animationDelay: `${index * 100}ms` }}>
                    <Card className="bg-background/50 hover:bg-card">
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
    );
}
