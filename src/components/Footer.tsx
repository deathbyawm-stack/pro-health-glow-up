import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Dr. Sharma", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Book Appointment", href: "#appointment" }
  ];

  const services = [
    "Acne Treatment",
    "Anti-Aging Therapy",
    "Skin Cancer Screening",
    "Laser Hair Removal",
    "Chemical Peels",
    "Cosmetic Procedures"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,138,149,0.1)_25%,transparent_25%,transparent_50%,rgba(255,138,149,0.1)_50%,rgba(255,138,149,0.1)_75%,transparent_75%)] bg-[length:60px_60px] opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-coral rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-sm relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-sm"></div>
                    <div className="absolute top-1 left-1 w-3 h-0.5 bg-primary"></div>
                    <div className="absolute top-2 left-1 w-0.5 h-3 bg-primary"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold">Pro Health</h3>
                  <p className="text-sm text-white/70">Skincare Hospital</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                Your trusted partner in advanced skincare solutions. Led by Dr. Rahul Sharma, 
                we provide personalized dermatological care with cutting-edge technology.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-playfair font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-primary transition-colors duration-300 underline-animate"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-playfair font-semibold">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-playfair font-semibold">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Pro Health Skincare Clinic<br />
                      123 Medical Plaza<br />
                      Health District, Mumbai - 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="space-y-1">
                    <a href="tel:+919876543210" className="text-white/80 text-sm hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                    <p className="text-white/60 text-xs">Emergency: +91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="space-y-1">
                    <a href="mailto:info@prohealthskin.com" className="text-white/80 text-sm hover:text-primary transition-colors">
                      info@prohealthskin.com
                    </a>
                    <a href="mailto:appointments@prohealthskin.com" className="text-white/60 text-xs hover:text-primary transition-colors block">
                      appointments@prohealthskin.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm text-white/80">
                    <p className="mb-1">Mon-Fri: 9:00 AM - 8:00 PM</p>
                    <p className="mb-1">Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                    <p className="text-xs text-white/60 mt-2">(Emergency only)</p>
                  </div>
                </div>
              </div>

              <Button variant="coral" size="sm" className="w-full btn-hover">
                Emergency Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-white/70">
              <p>&copy; {currentYear} Pro Health Skincare Hospital. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Medical Disclaimer</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <span>Designed with</span>
              <div className="w-4 h-4 text-primary">❤️</div>
              <span>for better skin health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;