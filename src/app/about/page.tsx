
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <div className="container py-12 md:py-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[500px] w-full">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover rounded-3xl"
              />
            )}
          </div>
          <div className="space-y-6">
            <p className="font-semibold text-primary">Who We Are?</p>
            <h1 className="text-4xl font-bold font-headline tracking-tighter text-primary sm:text-5xl">
              About Us
            </h1>
            <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                    At Branch Edge, innovation drives everything we do. We specialize in delivering cutting-edge technology solutions including custom websites, e-commerce, AI-powered products, analytics, SEO, and cloud hosting with unmatched speed and quality.
                </p>
                <p>
                    Our mission is to empower businesses across education, real estate, government, and more through agile, secure, and scalable digital solutions tailored to their unique needs. We go beyond technology by partnering with clients to accelerate growth, improve experiences, and unlock new potential.
                </p>
                <p>
                    With a team rooted in creativity, integrity, and deep technical expertise, we continuously explore emerging technologies to shape the future of digital transformation. Join us on a journey of innovation, where your success is our priority.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
