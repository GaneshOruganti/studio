
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Phone, Users, Zap, Award, Target, Rocket, Handshake } from "lucide-react";

const timelineItems = [
  {
    title: "Initial Consultation",
    description: "Understanding your vision and goals.",
    icon: MessageSquare,
    position: { top: "15%", left: "10%" },
  },
  {
    title: "Strategy & Planning",
    description: "Crafting a detailed roadmap for success.",
    icon: Target,
    position: { top: "65%", left: "35%" },
  },
  {
    title: "Development & Execution",
    description: "Bringing the vision to life with precision.",
    icon: Rocket,
    position: { top: "15%", left: "65%" },
  },
  {
    title: "Launch & Support",
    description: "Ensuring a smooth rollout and ongoing success.",
    icon: Handshake,
    position: { top: "65%", left: "90%" },
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
      d="M0,75 C150,0 250,150 400,75 C550,0 650,150 800,75 C950,0 1000,75 1000,75"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeDasharray="8 8"
    />
  </svg>
);

const TimelineNode = ({
  item,
  index,
}: {
  item: (typeof timelineItems)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const x = useTransform(scrollYProgress, [0.3, 0.5], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="absolute flex flex-col items-center text-center"
      style={{
        ...item.position,
        translateX: "-50%",
        translateY: "-50%",
        x,
        opacity,
      }}
    >
      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-lg z-10">
        <item.icon className="w-8 h-8" />
      </div>
      <div className="bg-background/80 backdrop-blur-sm p-2 rounded-md">
          <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
          <p className="text-xs text-muted-foreground hidden sm:block">{item.description}</p>
      </div>
    </motion.div>
  );
};

export function AnimatedTimeline() {
  return (
    <div className="relative w-full h-72 md:h-96 my-16 services-anim timeline-container">
      <WavyPath />
      {timelineItems.map((item, index) => (
        <TimelineNode key={index} item={item} index={index} />
      ))}
    </div>
  );
}
