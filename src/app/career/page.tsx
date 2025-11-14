import { type Metadata } from "next";
import CareerPageClient from "./client-page";

export const metadata: Metadata = {
    title: "Careers",
    description: "Explore exciting career opportunities at Speedopus India and be part of a team that's shaping the future of technology.",
};

export default function CareerPage() {
    return <CareerPageClient />;
}
