
"use client";

import Image from 'next/image';

const logos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.svg", alt: "Meta" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Microsoft_logo_%282012%29.svg", alt: "Microsoft" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Salesforce.com_logo.svg", alt: "Salesforce" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/TATA_Logo.svg/1280px-TATA_Logo.svg.png", alt: "Tata" },
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
