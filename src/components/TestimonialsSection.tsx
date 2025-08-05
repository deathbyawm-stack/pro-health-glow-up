import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Patel",
      treatment: "Acne Treatment",
      rating: 5,
      quote: "Dr. Sharma's expertise transformed my skin confidence. After struggling with acne for years, his personalized treatment plan gave me the clear skin I always dreamed of. The results exceeded all my expectations!",
      avatar: "PP"
    },
    {
      name: "Rajesh Kumar",
      treatment: "Anti-Aging Therapy",
      rating: 5,
      quote: "The anti-aging treatments at Pro Health are remarkable. Dr. Sharma's professional approach and the advanced technology made me look 10 years younger. I couldn't be happier with the natural-looking results!",
      avatar: "RK"
    },
    {
      name: "Sarah Johnson",
      treatment: "Laser Hair Removal",
      rating: 5,
      quote: "Professional, caring, and incredibly effective. The laser hair removal treatment was comfortable and the results are exactly what I hoped for. Dr. Sharma and his team made the entire experience wonderful.",
      avatar: "SJ"
    },
    {
      name: "Amit Sharma",
      treatment: "Skin Cancer Screening",
      rating: 5,
      quote: "Dr. Sharma's thorough screening detected an issue early, potentially saving my life. His expertise and caring approach throughout the treatment process gave me complete confidence. Truly grateful for his dedication.",
      avatar: "AS"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-trust/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-foreground mb-6">
            Patient <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Read what our patients say about their transformative experiences with Dr. Rahul Sharma 
            and the Pro Health team.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-muted/30 p-8 lg:p-12 mx-4 rounded-3xl">
                    <div className="text-center">
                      
                      {/* Quote Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Quote className="w-8 h-8 text-primary" />
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-8 font-playfair italic">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Patient Info */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-coral rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                          {testimonial.avatar}
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonial.treatment} Patient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 lg:mt-20 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-6 lg:p-8 shadow-card">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">98%</p>
              <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-trust mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Happy Patients</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;