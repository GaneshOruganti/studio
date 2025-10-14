import { Icons } from "@/components/icons";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">Branch Edge</span>
            </div>
            <h3 className="text-xl font-semibold font-headline">Discover. Develop. Succeed.</h3>
            <p className="text-muted-foreground max-w-md">
              We empower businesses by delivering cutting-edge software solutions that redefine digital experiences, driving growth, and unlocking new opportunities for success.
            </p>
          </div>
          <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold font-headline text-lg">Contact Us</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                <span>123 Innovation Drive, Tech City, 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:contact@branchedge.com" className="hover:text-primary transition-colors">contact@branchedge.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold font-headline text-lg">Follow Us</h4>
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
        <div className="mt-8 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Branch Edge. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ Branch Edge
          </p>
        </div>
      </div>
    </footer>
  );
}
