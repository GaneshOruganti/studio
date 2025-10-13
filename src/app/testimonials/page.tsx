
const testimonials = [
  { id: "VIDEO_ID_1", title: "Transformative Results with Branch Edge", speaker: "Jane Doe, CEO of Innovate Inc." },
  { id: "VIDEO_ID_2", title: "A Partnership That Drives Growth", speaker: "John Smith, CTO of Solutions Co." },
  { id: "VIDEO_ID_3", title: "Exceeding Expectations Every Time", speaker: "Alex Ray, Director at Creative Minds" },
  { id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up", speaker: "Rick Astley" },
];

export default function TestimonialsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
          Hear From Our Clients
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Watch our valued clients share their success stories and experiences working with Branch Edge.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="aspect-video overflow-hidden rounded-lg border">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${testimonial.id}`}
                title={testimonial.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold font-headline">{testimonial.title}</h3>
              <p className="text-muted-foreground">{testimonial.speaker}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
