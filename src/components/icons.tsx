import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" rx="12" fill="#2563EB" />
      <path
        d="M20 20C20 14.4772 24.4772 10 30 10H80V90H30C24.4772 90 20 85.5228 20 80V20Z"
        fill="white"
      />
      <path
        d="M80 20C80 14.4772 75.5228 10 70 10H20V90H70C75.5228 90 80 85.5228 80 80V20Z"
        fill="white"
        transform="rotate(180 50 50)"
      />
      <path
        d="M50 30L55.8779 44.1221L70 50L55.8779 55.8779L50 70L44.1221 55.8779L30 50L44.1221 44.1221L50 30Z"
        fill="#2563EB"
        transform="rotate(20 50 50)"
      />
    </svg>
  ),
};
