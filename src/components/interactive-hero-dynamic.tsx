"use client";

import dynamic from 'next/dynamic';

export const InteractiveHeroDynamic = dynamic(() => import('@/components/interactive-hero').then(mod => mod.InteractiveHero), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background/10" />,
});
