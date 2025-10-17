"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Logo() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const darkThemeLogo = "https://i.postimg.cc/pLk4JhpS/Red-White-Simple-Company-Technology-Logo-5.png";
  const lightThemeLogo = "https://i.postimg.cc/3RksR8rV/Red-White-Simple-Company-Technology-Logo-6.png";

  const logoSrc = isClient && theme === 'dark' ? darkThemeLogo : lightThemeLogo;

  return (
    <Image 
      src={logoSrc} 
      alt="Speedopus Logo" 
      width={160} 
      height={40} 
      unoptimized
      className="h-8 w-auto"
    />
  );
}
