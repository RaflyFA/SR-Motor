import { Button } from "@/components/ui/button";
import { Wrench, Zap } from "lucide-react";
import CurvedDivider from "./CurvedDivider";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById("produk");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-4">
              <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Bengkel Terpercaya
              <span className="block text-2xl sm:text-4xl lg:text-7xl text-primary mt-2">
                Untuk Kendaraan Anda
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Servis profesional dengan teknisi berpengalaman. Kami siap menjaga
              kendaraan Anda tetap prima.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90 shadow-workshop text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-xl transition-all hover:scale-105"
                onClick={scrollToContact}
              >
                <Zap className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-xl transition-all"
                onClick={scrollToProducts}
              >
                Lihat Produk
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Tahun Pengalaman
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  5000+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Kendaraan Terservis
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  90%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Kepuasan Pelanggan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider position="top" color="#16181d" />
    </>
  );
};

export default Hero;
