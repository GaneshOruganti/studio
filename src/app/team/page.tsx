
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", avatarId: "testimonial-avatar-2", social: { twitter: "#", linkedin: "#" }, contribution: "John leads the company with a vision for innovation and excellence, driving the team to create cutting-edge solutions." },
    { name: "Jane Smith", role: "Chief Technology Officer", avatarId: "testimonial-avatar-1", social: { twitter: "#", linkedin: "#" }, contribution: "Jane architects our technology stack, ensuring our products are scalable, secure, and built on the latest technologies." },
    { name: "Alex Johnson", role: "Lead Developer", avatarId: "testimonial-avatar-3", social: { twitter: "#", linkedin: "#" }, contribution: "Alex guides the development team, turning complex requirements into robust and efficient software solutions." },
    { name: "Emily White", role: "UX/UI Designer", avatarId: "testimonial-avatar-6", social: { twitter: "#", linkedin: "#" }, contribution: "Emily crafts intuitive and beautiful user experiences, making sure our products are a joy to use." },
    { name: "Michael Chen", role: "Cloud Architect", avatarId: "testimonial-avatar-5", social: { twitter: "#", linkedin: "#" }, contribution: "Michael designs and manages our cloud infrastructure, ensuring high availability and performance for all our services." },
    { name: "Sarah Lee", role: "Data Scientist", avatarId: "testimonial-avatar-4", social: { twitter: "#", linkedin: "#" }, contribution: "Sarah turns data into insights, leveraging machine learning to drive product innovation and business strategy." },
]

export default function TeamPage() {
    return (
        <div className="container py-12 md:py-24">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                        Meet Our Team
                    </h1>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The passionate individuals behind Branch Edge, driving innovation and excellence.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => {
                        const avatar = PlaceHolderImages.find(img => img.id === member.avatarId);
                        return (
                            <div key={member.name} className="team-card-container">
                                <div className="team-card relative w-full h-full">
                                    <div className="team-card-front w-full h-full">
                                        <Card className="text-center h-full flex flex-col">
                                            <CardHeader className="flex flex-col items-center flex-grow">
                                                <Avatar className="w-24 h-24 mb-4">
                                                    {avatar && <AvatarImage src={avatar.imageUrl} alt={member.name} data-ai-hint={avatar.imageHint} />}
                                                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                                                </Avatar>
                                                <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                                                <p className="text-primary font-semibold">{member.role}</p>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex justify-center gap-4">
                                                    <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                                                        <Twitter className="h-6 w-6" />
                                                    </Link>
                                                    <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                                                        <Linkedin className="h-6 w-6" />
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="team-card-back absolute top-0 left-0 w-full h-full">
                                        <Card className="text-center h-full flex flex-col justify-center bg-primary text-primary-foreground">
                                            <CardContent className="p-6">
                                                <p className="italic">"{member.contribution}"</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
