import { Shield, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Terpercaya",
      description: "Lebih dari 10 tahun pengalaman melayani ribuan pelanggan setia",
    },
    {
      icon: Users,
      title: "Teknisi Ahli",
      description: "Tim mekanik bersertifikat dan berpengalaman di bidangnya",
    },
    {
      icon: Clock,
      title: "Servis Cepat",
      description: "Penanganan cepat tanpa mengurangi kualitas pekerjaan",
    },
    {
      icon: Award,
      title: "Garansi Resmi",
      description: "Semua pekerjaan dilengkapi dengan garansi resmi",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang <span className="text-primary">Bengkel Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bengkel Pro adalah bengkel mobil profesional yang telah melayani masyarakat sejak tahun 2014. 
            Kami berkomitmen memberikan layanan terbaik dengan peralatan modern dan teknisi berpengalaman. 
            Kepuasan dan keamanan kendaraan Anda adalah prioritas utama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-workshop"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Teknisi Ahli</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
