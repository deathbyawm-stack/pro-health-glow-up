
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Shield, Phone, Mail, User, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Appointment Request Received!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
    }, 2000);
  };

  return (
    <section className="py-20 lg:py-32 gradient-coral relative overflow-hidden">
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl float-animation" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8 text-white fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold leading-tight">
                Ready to Transform Your <span className="text-white/90">Skin?</span>
              </h2>
              
              <p className="text-xl lg:text-2xl font-medium text-white/90">
                Book your consultation with Dr. Rahul Sharma today
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Take the first step towards healthier, more radiant skin. Our personalized 
                consultation will help determine the best treatment plan for your unique needs.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-white">Secure</p>
                <p className="text-sm text-white/80">Booking</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-white">Same Day</p>
                <p className="text-sm text-white/80">Response</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-white">Flexible</p>
                <p className="text-sm text-white/80">Scheduling</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-elegant">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground mb-2">
                  Book Your Consultation
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-foreground">
                    <User className="w-4 h-4 mr-2 text-primary" />
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Enter your full name"
                    className="h-12 border-2 border-muted focus:border-primary transition-colors rounded-xl"
                  />
                </div>

                {/* Contact Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-foreground">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="h-12 border-2 border-muted focus:border-primary transition-colors rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="h-12 border-2 border-muted focus:border-primary transition-colors rounded-xl"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Service of Interest
                  </label>
                  <Select>
                    <SelectTrigger className="h-12 border-2 border-muted focus:border-primary transition-colors rounded-xl">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acne">Acne Treatment</SelectItem>
                      <SelectItem value="anti-aging">Anti-Aging Therapy</SelectItem>
                      <SelectItem value="screening">Skin Cancer Screening</SelectItem>
                      <SelectItem value="laser-hair">Laser Hair Removal</SelectItem>
                      <SelectItem value="chemical-peel">Chemical Peels</SelectItem>
                      <SelectItem value="cosmetic">Cosmetic Procedures</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    className="h-12 border-2 border-muted focus:border-primary transition-colors rounded-xl"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-foreground">
                    <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                    Message (Optional)
                  </label>
                  <Textarea
                    placeholder="Tell us about your skin concerns or any questions you have..."
                    className="min-h-[100px] border-2 border-muted focus:border-primary transition-colors rounded-xl resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold gradient-coral hover:scale-105 hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    "Book My Appointment"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
