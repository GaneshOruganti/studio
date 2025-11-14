"use client";

export function Logo() {
  const logoSrc = "https://i.postimg.cc/pLk4JhpS/Red-White-Simple-Company-Technology-Logo-5.png";

  return (
    <img 
      src={logoSrc} 
      alt="Speedopus Logo" 
      width={160} 
      height={40} 
      className="h-8 w-auto"
    />
  );
}
