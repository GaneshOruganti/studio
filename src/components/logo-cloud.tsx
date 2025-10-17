
"use client";

import Image from 'next/image';

const logos = [
  { src: "https://picsum.photos/seed/logo1/150/100", alt: "Tech Corp" },
  { src: "https://picsum.photos/seed/logo2/150/100", alt: "Innovate Co" },
  { src: "https://picsum.photos/seed/logo3/150/100", alt: "Solutions Inc" },
  { src: "https://picsum.photos/seed/logo4/150/100", alt: "Data Systems" },
  { src: "https://picsum.photos/seed/logo5/150/100", alt: "Future Tech" },
  { src: "https://picsum.photos/seed/logo6/150/100", alt: "Cloud Works" },
  { src: "https://picsum.photos/seed/logo7/150/100", alt: "Quantum Leap" },
];

const duplicatedLogos = [...logos, ...logos];

export function LogoCloud() {
  return (
    <div className="logo-slider">
      <div className="logo-slide-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <Image 
              src={logo.src} 
              height="100" 
              width="150" 
              alt={logo.alt}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
