
import { type Metadata } from "next";
import AboutClientPage from "./about-client-page";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Speedopus India's mission, vision, and the core values that drive our commitment to innovation and client success.",
};

export default function AboutPage() {
  return <AboutClientPage />;
}
