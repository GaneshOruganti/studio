
import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <circle cx="50" cy="50" r="50" fill="#EF4444"/>
      <path d="M62.5 37.5C62.5 30.5964 56.9036 25 50 25C43.0964 25 37.5 30.5964 37.5 37.5V43.75C37.5 47.2018 34.7018 50 31.25 50H25" stroke="white" strokeWidth="10" strokeLinecap="round"/>
      <path d="M37.5 62.5C37.5 69.4036 43.0964 75 50 75C56.9036 75 62.5 69.4036 62.5 62.5V56.25C62.5 52.7982 65.2982 50 68.75 50H75" stroke="white" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  ),
};
