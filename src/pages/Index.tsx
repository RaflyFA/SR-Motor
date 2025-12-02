import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>
      
      <About />
      
      <Services />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Index;
