import { Button } from "@/components/ui/button";
import { Wrench, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Wrench className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Bengkel Terpercaya
            <span className="block text-primary mt-2">Untuk Kendaraan Anda</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Servis profesional dengan teknisi berpengalaman. Kami siap menjaga kendaraan Anda tetap prima di jalan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-hero hover:opacity-90 shadow-workshop text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
              onClick={scrollToContact}
            >
              <Zap className="mr-2 h-5 w-5" />
              Hubungi Kami
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-xl transition-all"
              onClick={scrollToServices}
            >
              Lihat Layanan
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground mt-1">Kendaraan Terservis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
