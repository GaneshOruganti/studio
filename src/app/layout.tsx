import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { FirebaseClientProvider } from '@/firebase';
import { open_sans, poppins } from '@/app/fonts';

export const metadata: Metadata = {
  title: {
    default: 'Speedopus India | Driving Innovation with Technology',
    template: '%s | Speedopus India',
  },
  description: 'Driving innovation and modernity with cutting-edge technology services including AI, Cloud, and custom software development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://i.postimg.cc/HWQ6Y1W8/Red-White-Simple-Company-Technology-Logo-1.png" type="image/png" />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background text-foreground', open_sans.variable, poppins.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            <div className="relative flex min-h-dvh flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
