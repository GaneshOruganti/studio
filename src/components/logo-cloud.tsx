
"use client";

import Image from 'next/image';

const logos = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];

const duplicatedLogos = [...logos, ...logos];

export function LogoCloud() {
  return (
    <div className="logo-slider">
      <div className="logo-slide-track">
        {duplicatedLogos.map((logoSrc, index) => (
          <div key={index} className="logo-slide">
            <Image 
              src={logoSrc} 
              height="80" 
              width="200" 
              alt={`Client Logo ${index + 1}`}
              className="object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
