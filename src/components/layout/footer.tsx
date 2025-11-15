
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";

const serviceLinks = [
  { name: "Web/App Development", href: "/services" },
  { name: "Cloud Hosting", href: "/services" },
  { name: "Analytics & Big Data", href: "/services" },
  { name: "SEO & Digital Marketing", href: "/services" },
  { name: "Managed IT Services", href: "/services" },
  { name: "Secure User Authentication", href: "/services" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  // { name: "Our Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/career" },
  { name: "Partner With Us", href: "/partner" },
];

const policyLinks = [
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Security", href: "/security" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-12">
            {/* Services Column */}
            <div>
                <h4 className="font-bold font-headline text-lg mb-4">Services</h4>
                <ul className="space-y-2">
                {serviceLinks.map((link) => (
                    <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Company Column */}
            <div>
                <h4 className="font-bold font-headline text-lg mb-4">Company</h4>
                <ul className="space-y-2">
                {companyLinks.map((link) => (
                    <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            
            {/* Consumer Policy Column */}
            <div>
                <h4 className="font-bold font-headline text-lg mb-4">Consumer Policy</h4>
                <ul className="space-y-2">
                    {policyLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Us Column */}
            <div>
                <h4 className="font-bold font-headline text-lg mb-4">Contact Us</h4>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <a href="mailto:contact@speedopus.com" className="hover:text-primary transition-colors text-sm">contact@speedopus.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <a href="tel:+919347655829" className="hover:text-primary transition-colors text-sm">+91 9347655829</a>
                    </div>
                </div>
                <div className="mt-6">
                    <h4 className="font-bold font-headline text-lg mb-4">Follow Us</h4>
                    <div className="flex items-center gap-4">
                    <Link href="https://www.facebook.com/people/Speedopus/61583960395919/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="https://x.com/SpeedopusIndia" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://www.instagram.com/speedopus/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://www.youtube.com/@speedopusindia" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <Youtube className="h-6 w-6" />
                        <span className="sr-only">YouTube</span>
                    </Link>
                    <Link href="https://www.linkedin.com/company/speedopus/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="border-t border-border/40 pt-8">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Logo />
                    </div>
                    <p className="text-sm text-muted-foreground">SR Nagar, Balkampet, Hyderabad, Telangana, 500038</p>
                </div>
                
                <div className="text-center md:text-right text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Speedopus India. All Rights Reserved.</p>
                    <p>Made with ❤️ by Speedopus India</p>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}
