
import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" rx="20" fill="hsl(var(--primary))"/>
      <path d="M62 25H42C33.7157 25 27 31.7157 27 40V60C27 68.2843 33.7157 75 42 75H62C70.2843 75 77 68.2843 77 60V40C77 31.7157 70.2843 25 62 25Z" fill="hsl(var(--primary))"/>
      <path d="M50 37.5L55.1769 44.8231L63.5 42.5L57.5 49.5L63.5 56.5L55.1769 54.1769L50 61.5L44.8231 54.1769L36.5 56.5L42.5 49.5L36.5 42.5L44.8231 44.8231L50 37.5Z" fill="white"/>
    </svg>
  ),
};
