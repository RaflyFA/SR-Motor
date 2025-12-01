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
      
      <CurvedDivider className="-mt-1" />
      
      <About />
      
      <CurvedDivider flip className="-mb-1" />
      
      <Services />
      
      <CurvedDivider className="-mt-1" />
      
      <ContactForm />
      
      <CurvedDivider flip className="-mb-1" />
      
      <Footer />
    </div>
  );
};

export default Index;
