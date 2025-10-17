
"use client";

import { Clock } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clockColor = isClient && theme === 'dark' ? 'white' : 'black';

  return (
    <div className="flex items-center gap-1 font-bold font-brandmark text-lg">
      <span>Speed</span>
      <div className="flex items-center justify-center">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill={clockColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      </div>
      <span>pus</span>
    </div>
  );
}
