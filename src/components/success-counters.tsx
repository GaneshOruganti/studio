
"use client";

import { useEffect, useState, useRef } from 'react';

const counters = [
    { label: "Projects Completed", value: 120, suffix: "+" },
    { label: "Happy Clients", value: 35, suffix: "+" },
    { label: "Years of Experience", value: 4, suffix: "" },
    { label: "Support Tickets Solved", value: 5, suffix: "K" },
    { label: "Customer Reviews", value: 4.9, suffix: "/5.0", isRating: true },
];

const Counter = ({ label, value, suffix, isRating }: { label: string, value: number, suffix: string, isRating?: boolean }) => {
    const [count, setCount] = useState(isRating ? 0.0 : 0);
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
                            if (isRating) {
                                setCount(parseFloat(start.toFixed(1)));
                            } else {
                                setCount(Math.ceil(start));
                            }
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
    }, [value, isRating]);
    
    const displayValue = isRating ? count.toFixed(1) : count;

    return (
        <div ref={ref} className="text-center flex-shrink-0 w-36 sm:w-44">
            <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">
                {displayValue}{suffix}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground whitespace-normal">
                {label}
            </p>
        </div>
    );
};

export function SuccessCounters() {
    return (
        <div className="flex gap-4 overflow-x-auto pb-4 justify-start lg:justify-center">
            {counters.map(counter => (
                <Counter key={counter.label} {...counter} />
            ))}
        </div>
    );
}
