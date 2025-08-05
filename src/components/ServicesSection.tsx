import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award, Star, Clock, Heart } from "lucide-react";
import acneImage from "@/assets/acne-treatment.jpg";
import antiAgingImage from "@/assets/anti-aging.jpg";
import screeningImage from "@/assets/screening.jpg";
import laserHairImage from "@/assets/laser-hair.jpg";
import chemicalPeelImage from "@/assets/chemical-peel.jpg";
import cosmeticImage from "@/assets/cosmetic.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Acne Treatment",
      image: acneImage,
      icon: Zap,
      description: "Advanced acne treatment solutions for clear, healthy skin. Our comprehensive approach includes medical-grade treatments.",
      features: ["Medical-grade treatments", "Personalized care plans", "Long-lasting results"]
    },
    {
      title: "Anti-Aging Therapy",
      image: antiAgingImage,
      icon: Star,
      description: "Turn back time with our cutting-edge anti-aging treatments and laser therapies for youthful, radiant skin.",
      features: ["Laser resurfacing", "Collagen stimulation", "Non-invasive procedures"]
    },
    {
      title: "Skin Cancer Screening",
      image: screeningImage,
      icon: Shield,
      description: "Comprehensive skin cancer screenings with state-of-the-art diagnostic equipment for early detection.",
      features: ["Early detection", "Expert diagnosis", "Preventive care"]
    },
    {
      title: "Laser Hair Removal",
      image: laserHairImage,
      icon: Zap,
      description: "Permanent hair reduction using advanced laser technology. Safe, effective, and suitable for all skin types.",
      features: ["FDA-approved lasers", "All skin types", "Permanent results"]
    },
    {
      title: "Chemical Peels",
      image: chemicalPeelImage,
      icon: Award,
      description: "Professional chemical peels to reveal smoother, brighter skin by removing damaged outer layers.",
      features: ["Multiple depth options", "Customized formulations", "Minimal downtime"]
    },
    {
      title: "Cosmetic Procedures",
      image: cosmeticImage,
      icon: Heart,
      description: "Aesthetic enhancement procedures to help you look and feel your best with natural-looking results.",
      features: ["Natural results", "Minimally invasive", "Expert technique"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-foreground mb-6">
            Our Skincare <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive dermatological treatments tailored to your unique skin needs. 
            Experience the difference that expert care and advanced technology can make.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift transition-all duration-500 group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-playfair font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-4 bg-muted rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-2 text-trust">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Book Today</span>
            </div>
            <div className="hidden lg:block w-px h-8 bg-border"></div>
            <p className="text-foreground font-medium">
              Ready to transform your skin? Schedule a consultation with Dr. Rahul Sharma
            </p>
            <Button variant="coral" size="lg" className="btn-hover">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;