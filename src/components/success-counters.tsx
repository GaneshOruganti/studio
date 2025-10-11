"use client";

import { useEffect, useState, useRef } from 'react';

const counters = [
    { label: "Projects Completed", value: 1200, suffix: "+" },
    { label: "Happy Clients", value: 350, suffix: "+" },
    { label: "Years of Experience", value: 10, suffix: "" },
    { label: "Support Tickets Solved", value: 25, suffix: "K" }
];

const Counter = ({ label, value, suffix }: { label: string, value: number, suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = value;
                    if (start === end) return;

                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.ceil(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-4xl md:text-5xl font-bold font-headline text-primary">
                {count}{suffix}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">{label}</p>
        </div>
    );
};

export function SuccessCounters() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map(counter => (
                <Counter key={counter.label} {...counter} />
            ))}
        </div>
    );
}
