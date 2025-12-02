import { Card, CardContent } from "@/components/ui/card";
import {
  Settings,
  Droplets,
  Battery,
  Wind,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import type { SVGProps } from "react";

// Custom tire icon since lucide-react doesn't provide a dedicated wheel export
const TireIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="7" x2="12" y2="17" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </svg>
);

const services = [
  {
    icon: Droplets,
    title: "Pelumas & Cairan (Best Seller):",
    description:
      "Oli Mesin (Matic & Bebek/Sport), Oli Gardan, Air Radiator (Coolant)",
  },
  {
    icon: Settings,
    title: "Sistem Pengereman (Best Seller):",
    description: "Kampas Rem Depan (Discpad), Kampas Rem Belakang (Tromol)",
  },
  {
    icon: TireIcon,
    title: "Kaki-Kaki & Roda:",
    description:
      "Ban Luar (Tubeless & Ban Dalam), Gear Set / Rantai (untuk motor bebek/sport)",
  },
  {
    icon: Battery,
    title: "Kelistrikan:",
    description: "Aki (Accu) Kering & Basah, Busi,  Lampu Utama (Bohlam/LED)",
  },
  {
    icon: Gauge,
    title: "Kategori Lain-Lain (Sparepart Kecil):",
    description:
      "Menyediakan perintilan kecil seperti Baut, Mur, Seal, Bearing, Spion, dan aksesoris lainnya.",
  },
  {
    icon: ShieldCheck,
    title: "General Check Up",
    description: "Pemeriksaan menyeluruh kondisi kendaraan Anda",
  },
];

const Services = () => {
  return (
    <section id="produk" className="py-20 bg-muted/0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Produk Unggulan <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai produk untuk menjaga kendaraan Anda tetap prima
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
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
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
