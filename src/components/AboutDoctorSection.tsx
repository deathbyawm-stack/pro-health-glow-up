import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Stethoscope, Award, Users, Clock } from "lucide-react";
import doctorImage from "@/assets/dr-rahul-sharma.jpg";

const AboutDoctorSection = () => {
  const specializations = [
    "Advanced Acne & Scar Treatment",
    "Anti-Aging & Laser Therapies", 
    "Skin Cancer Detection & Treatment",
    "Cosmetic Dermatology Procedures",
    "Hair Loss Treatment & Restoration",
    "Pediatric & Adult Dermatology"
  ];

  const achievements = [
    {
      icon: Award,
      title: "Board Certified",
      description: "MD Dermatology from AIIMS Delhi"
    },
    {
      icon: Users,
      title: "500+ Patients",
      description: "Successful treatments completed"
    },
    {
      icon: Clock,
      title: "15+ Years",
      description: "Professional experience"
    },
    {
      icon: Stethoscope,
      title: "Advanced Training",
      description: "Latest dermatological techniques"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-trust/20 rounded-full blur-lg float-animation" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main doctor image */}
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={doctorImage}
                  alt="Dr. Rahul Sharma - Lead Dermatologist"
                  className="w-full h-full object-cover hover-scale"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              
              {/* Floating credentials card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-glow p-6 hover-lift">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary mb-1">MD</p>
                  <p className="text-sm text-muted-foreground">Dermatology</p>
                  <p className="text-xs text-trust mt-1">AIIMS Delhi</p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-trust rounded-2xl text-trust-foreground p-4 shadow-card hover-lift">
                <div className="text-center">
                  <p className="text-xl font-bold">15+</p>
                  <p className="text-xs">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2 fade-in">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Meet Our Expert
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-foreground">
                Dr. Rahul <span className="text-primary">Sharma</span>
              </h2>
              
              <div className="space-y-2">
                <p className="text-xl text-trust font-semibold">
                  MD Dermatology • Board Certified Specialist
                </p>
                <p className="text-lg text-muted-foreground font-medium">
                  15+ Years Transforming Lives Through Skincare
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Rahul Sharma is a renowned dermatologist with over 15 years of experience 
                in providing exceptional skincare solutions. Graduating from AIIMS Delhi, 
                he specializes in advanced dermatological treatments and has helped over 500 
                patients achieve their skin health goals.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                His patient-centered approach combines cutting-edge medical technology with 
                compassionate care, ensuring that each treatment is tailored to meet individual 
                skin needs and lifestyle requirements.
              </p>
            </div>

            {/* Specializations */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-semibold text-foreground">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((specialization, index) => (
                  <div 
                    key={specialization}
                    className="flex items-center space-x-3 fade-in-up"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                    <span className="text-muted-foreground">{specialization}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              variant="coral" 
              size="lg" 
              className="btn-hover group"
            >
              Read Full Biography
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 lg:mt-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-card hover-lift fade-in-up"
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-playfair font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;