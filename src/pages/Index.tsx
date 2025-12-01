import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import CurvedDivider from "@/components/CurvedDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <CurvedDivider className="-mt-1" />
      
      <Services />
      
      <CurvedDivider flip className="-mb-1" />
      
      <BookingForm />
      
      <CurvedDivider className="-mt-1" />
      
      <Footer />
    </div>
  );
};

export default Index;
