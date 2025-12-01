import { Card, CardContent } from "@/components/ui/card";
import { Settings, Droplets, Battery, Wind, Gauge, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Servis Rutin",
    description: "Perawatan berkala untuk performa optimal kendaraan Anda",
  },
  {
    icon: Droplets,
    title: "Ganti Oli & Filter",
    description: "Penggantian oli mesin dan filter dengan produk berkualitas",
  },
  {
    icon: Battery,
    title: "Aki & Kelistrikan",
    description: "Perawatan dan penggantian sistem kelistrikan kendaraan",
  },
  {
    icon: Wind,
    title: "AC Mobil",
    description: "Servis dan perbaikan sistem AC untuk kenyamanan berkendara",
  },
  {
    icon: Gauge,
    title: "Tune Up",
    description: "Optimasi performa mesin untuk efisiensi bahan bakar",
  },
  {
    icon: ShieldCheck,
    title: "General Check Up",
    description: "Pemeriksaan menyeluruh kondisi kendaraan Anda",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai layanan profesional untuk menjaga kendaraan Anda tetap prima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-workshop transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
