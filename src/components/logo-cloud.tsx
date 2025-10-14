
"use client";

import Image from 'next/image';

const logos = [
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png", alt: "Company 1" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png", alt: "Company 2" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png", alt: "Company 3" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png", alt: "Company 4" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png", alt: "Company 5" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png", alt: "Company 6" },
  { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png", alt: "Company 7" },
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
              className="object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
