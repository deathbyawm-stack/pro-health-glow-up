import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutDoctorSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
