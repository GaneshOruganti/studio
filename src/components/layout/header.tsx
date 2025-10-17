"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "../logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "AI Insights", href: "/insights" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Partner", href: "/partner" },
  // { name: "Our Team", href: "/team" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      <div className="container">
        <div className="w-full max-w-6xl mx-auto">
          <div className="w-full flex items-center justify-between p-1 rounded-full border bg-card/80 shadow-sm hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 px-3">
                <Logo />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/90 rounded-full px-3 py-1 text-sm font-medium",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 px-3">
              <ThemeToggle />

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="pr-0">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                      <Logo />
                    </Link>
                    <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                      <div className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              "transition-colors hover:text-foreground/80",
                              pathname === item.href ? "text-foreground" : "text-foreground/60"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
