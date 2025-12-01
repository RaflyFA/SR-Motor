import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import CurvedDivider from "@/components/CurvedDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>
      
      <CurvedDivider />
      
      <About />
      
      <CurvedDivider flip />
      
      <Services />
      
      <CurvedDivider />
      
      <ContactForm />
      
      <CurvedDivider flip />
      
      <Footer />
    </div>
  );
};

export default Index;
