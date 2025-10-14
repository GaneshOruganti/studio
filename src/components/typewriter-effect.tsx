
"use client";

import { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
}

export function TypewriterEffect({ text, speed = 50 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);
          let i = 0;
          const intervalId = setInterval(() => {
            if (i < text.length) {
              setDisplayedText(text.substring(0, i + 1));
              i++;
            } else {
              clearInterval(intervalId);
            }
          }, speed);

          return () => clearInterval(intervalId);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [text, speed, isAnimating]);

  return <p ref={elementRef} className="min-h-[1em]">{displayedText}</p>;
}
