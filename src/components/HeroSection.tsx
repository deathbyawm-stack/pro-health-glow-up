import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-treatment.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-trust/20 rounded-full blur-lg float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 lg:px-6 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-playfair font-bold text-foreground leading-tight">
                Advanced{" "}
                <span className="text-primary">Skincare</span>{" "}
                Solutions with{" "}
                <span className="text-primary">Dr. Rahul Sharma</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-trust font-semibold">
                15+ Years of Excellence in Dermatological Care
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Experience personalized skincare treatments with state-of-the-art 
                technology and compassionate care at Pro Health. Your journey to 
                radiant, healthy skin starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="btn-hover group"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-hover"
              >
                View Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/20">
              <div className="text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-trust/10 rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-trust" />
                </div>
                <p className="font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              
              <div className="text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-trust/10 rounded-full mx-auto mb-2">
                  <Shield className="w-6 h-6 text-trust" />
                </div>
                <p className="font-semibold text-foreground">Board</p>
                <p className="text-sm text-muted-foreground">Certified</p>
              </div>
              
              <div className="text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-trust/10 rounded-full mx-auto mb-2">
                  <Award className="w-6 h-6 text-trust" />
                </div>
                <p className="font-semibold text-foreground">Award</p>
                <p className="text-sm text-muted-foreground">Winning</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Main circular image */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-elegant border-8 border-white">
                <img
                  src={heroImage}
                  alt="Professional skincare treatment at Pro Health"
                  className="w-full h-full object-cover hover-scale"
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-card flex items-center justify-center hover-lift">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-32 h-20 bg-white rounded-2xl shadow-card flex items-center justify-center hover-lift">
                <div className="text-center">
                  <p className="text-lg font-bold text-trust">98%</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;