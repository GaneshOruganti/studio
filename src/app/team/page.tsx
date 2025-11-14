
import { type Metadata } from "next";
import { TeamCarousel } from "@/components/team-carousel";

export const metadata: Metadata = {
    title: "Our Team",
};

export default function TeamPage() {
    return (
        <div className="w-full max-w-6xl mx-auto py-12 md:py-24">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 services-anim">
                    <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                        Meet Our Team
                    </h1>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The passionate individuals behind Speedopus India, driving innovation and excellence.
                    </p>
                </div>
                <TeamCarousel />
            </div>
        </div>
    );
}
