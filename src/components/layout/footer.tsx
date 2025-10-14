
import { Icons } from "@/components/icons";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

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
  { name: "Our Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/career" },
  { name: "Partner With Us", href: "/partner" },
];

const policyLinks = [
    { name: "Terms of Use", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Security", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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
                  <a href="mailto:contact@branchedge.com" className="hover:text-primary transition-colors text-sm">contact@branchedge.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors text-sm">(123) 456-7890</a>
                </div>
            </div>
            <div className="mt-6">
                <h4 className="font-bold font-headline text-lg mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Icons.logo className="h-8 w-8 text-primary" />
                    <p className="font-bold font-headline text-lg">Branch Edge</p>
                </div>
                <p className="text-sm text-muted-foreground">SR Nagar, Balkampet, Hyderabad, Telangana, 500038</p>
            </div>
            
            <div className="text-center md:text-right text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Branch Edge. All Rights Reserved.</p>
                <p>Made with ❤️ by Branch Edge</p>
            </div>
        </div>

      </div>
    </footer>
  );
}
