
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Briefcase, Calendar, Star, Smile } from "lucide-react";

const timelineItems = [
  {
    title: "120+",
    description: "Projects Completed",
    icon: Briefcase,
    position: { top: "50%", left: "10%" },
  },
  {
    title: "35+",
    description: "Happy Clients",
    icon: Smile,
    position: { top: "15%", left: "30%" },
  },
  {
    title: "4",
    description: "Years of Experience",
    icon: Calendar,
    position: { top: "85%", left: "50%" },
  },
  {
    title: "5K",
    description: "Support Tickets Solved",
    icon: Award,
    position: { top: "15%", left: "70%" },
  },
  {
    title: "4.9/5.0",
    description: "Customer Reviews",
    icon: Star,
    position: { top: "50%", left: "90%" },
  },
];

const WavyPath = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1000 150"
    preserveAspectRatio="none"
    className="absolute inset-0"
  >
    <path
      d="M0,75 C150,150 250,0 400,75 C550,150 650,0 800,75 C950,150 1000,75 1000,75"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeDasharray="5 5"
    />
  </svg>
);

const TimelineNode = ({
  item,
}: {
  item: (typeof timelineItems)[0];
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.3, 0.35], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="absolute flex flex-col items-center text-center"
      style={{
        ...item.position,
        translateX: "-50%",
        translateY: "-50%",
        y,
        opacity,
      }}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-lg z-10 flex-col">
        <item.icon className="w-6 h-6 md:w-8 md:h-8 mb-1" />
        <span className="text-lg md:text-xl font-bold font-headline">{item.title}</span>
      </div>
      <div className="bg-background/80 backdrop-blur-sm p-2 rounded-md">
          <h4 className="text-sm md:text-base text-muted-foreground">{item.description}</h4>
      </div>
    </motion.div>
  );
};

export function SuccessTimeline() {
  return (
    <div className="relative w-full h-72 md:h-96 my-16 services-anim timeline-container">
      <WavyPath />
      {timelineItems.map((item, index) => (
        <TimelineNode key={index} item={item} />
      ))}
    </div>
  );
}
