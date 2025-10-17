
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles, Star, Quote } from "lucide-react";

const videoTestimonials = [
  { id: "VIDEO_ID_1", title: "Transformative Results with Speedopus", speaker: "Jane Doe, CEO of Innovate Inc." },
  { id: "VIDEO_ID_2", title: "A Partnership That Drives Growth", speaker: "John Smith, CTO of Solutions Co." },
  { id: "VIDEO_ID_3", title: "Exceeding Expectations Every Time", speaker: "Alex Ray, Director at Creative Minds" },
  { id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up", speaker: "Rick Astley" },
];

const duplicatedVideoTestimonials = [...videoTestimonials, ...videoTestimonials];

const writtenTestimonials = [
  { name: "Priya Sharma", company: "Google", quote: "Speedopus's AI solutions have revolutionized our data analytics. Their team's expertise is unmatched.", avatarId: "testimonial-avatar-1", rating: 5.0 },
  { name: "Amit Singh", company: "Meta", quote: "The cloud infrastructure they built for us is robust and scalable. A fantastic partner for growth.", avatarId: "testimonial-avatar-2", rating: 4.9 },
  { name: "Sunita Patel", company: "Amazon", quote: "Their e-commerce solutions have significantly boosted our online sales. Highly recommend their services.", avatarId: "testimonial-avatar-4", rating: 4.8 },
  { name: "Rajesh Kumar", company: "Microsoft", quote: "The custom software they developed has streamlined our operations and improved productivity. Exceptional work!", avatarId: "testimonial-avatar-5", rating: 5.0 },
  { name: "Jane Doe", company: "Innovate Inc.", quote: "Speedopus transformed our digital presence. Their team is professional, and the results speak for themselves.", avatarId: "testimonial-avatar-1", rating: 4.8 },
  { name: "John Smith", company: "Solutions Co.", quote: "The best tech partner we've ever worked with. Their insights and execution are top-notch.", avatarId: "testimonial-avatar-2", rating: 5.0 },
  { name: "Alex Ray", company: "Creative Minds", quote: "Working with Speedopus was a breeze. They understood our vision and delivered beyond our expectations.", avatarId: "testimonial-avatar-3", rating: 4.9 },
  { name: "Sarah Lee", company: "DataDriven LLC", quote: "The analytics they provided gave us the clarity we needed to scale our operations effectively.", avatarId: "testimonial-avatar-4", rating: 4.7 },
  { name: "Michael Chen", company: "CloudScape", quote: "Their expertise in cloud solutions has been a game-changer for our infrastructure. Highly recommended!", avatarId: "testimonial-avatar-5", rating: 5.0 },
  { name: "Emily White", company: "Growthify", quote: "Our SEO rankings have skyrocketed since we started working with them. Incredible results!", avatarId: "testimonial-avatar-6", rating: 4.9 },
  { name: "Chris Green", company: "NextGen Edu", quote: "The mobile app they developed for us has received overwhelmingly positive feedback from our students.", avatarId: "testimonial-avatar-2", rating: 5.0 },
  { name: "Jessica Brown", company: "Realty Pros", quote: "Their CRM solution has streamlined our entire sales process. It's been a fantastic investment.", avatarId: "testimonial-avatar-1", rating: 4.8 },
];

const duplicatedWrittenTestimonials = [...writtenTestimonials, ...writtenTestimonials];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-current" />
      ))}
      {halfStar && <Star key="half" className="w-5 h-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5" />
      ))}
    </div>
  );
};


export default function TestimonialsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 services-anim">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            Hear From Our Clients
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Watch our valued clients share their success stories and experiences working with Speedopus.
          </p>
        </div>
        
        <div className="w-full max-w-full mx-auto pt-12 video-testimonial-slider services-anim">
            <div className="video-testimonial-slide-track flex">
              {duplicatedVideoTestimonials.map((testimonial, i) => (
                <div key={`${testimonial.id}-${i}`} className="flex-shrink-0 w-[500px] mx-4">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${testimonial.id}`}
                          title={testimonial.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </CardContent>
                    <div className="p-6">
                      <div className="flex gap-4">
                        <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-headline text-xl mb-1 font-bold">{testimonial.title}</h3>
                          <p className="text-muted-foreground font-medium">{testimonial.speaker}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center my-24 services-anim">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Read reviews from businesses who have transformed with our help.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto testimonial-slider bg-muted/20 py-12 rounded-lg services-anim">
            <div className="testimonial-slide-track flex">
                {duplicatedWrittenTestimonials.map((testimonial, index) => {
                    return (
                        <div key={index} className="testimonial-slide flex-shrink-0 w-[350px] mx-4">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                                    <div className="p-3 bg-background rounded-full border shadow-sm">
                                      <Sparkles className="h-6 w-6 text-primary" />
                                    </div>
                                    <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                                    <div className="font-semibold">
                                        <p>{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                    <StarRating rating={testimonial.rating} />
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
}
