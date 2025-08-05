import { Stethoscope, Zap, Heart, Shield, Award, Clock } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "Expert Care",
      description: "Board-certified dermatologist with 15+ years of experience providing personalized treatment plans.",
      highlights: ["Board-certified specialist", "15+ years experience", "Personalized care plans"]
    },
    {
      icon: Zap,
      title: "Advanced Technology", 
      description: "State-of-the-art equipment and latest treatment methods ensure the best possible outcomes.",
      highlights: ["State-of-the-art equipment", "Latest treatment methods", "FDA-approved procedures"]
    },
    {
      icon: Heart,
      title: "Patient Satisfaction",
      description: "Over 500 successful treatments with 98% patient satisfaction and comprehensive aftercare support.",
      highlights: ["500+ successful treatments", "98% patient satisfaction", "Comprehensive aftercare"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-trust/10 rounded-full blur-2xl float-animation" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Pro Health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in delivering exceptional dermatological care 
            with a commitment to excellence and patient satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-card hover-lift transition-all duration-500 group fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-coral rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <li 
                        key={highlightIndex}
                        className="flex items-center text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative element */}
                <div className="mt-8 h-1 bg-gradient-coral rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { number: "500+", label: "Happy Patients", icon: Heart },
            { number: "98%", label: "Satisfaction Rate", icon: Award },
            { number: "15+", label: "Years Experience", icon: Clock },
            { number: "24/7", label: "Emergency Support", icon: Shield }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;