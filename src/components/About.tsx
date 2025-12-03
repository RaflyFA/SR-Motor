import { Shield, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "@/img/img1.jpg";
import img2 from "@/img/img2.jpg";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Terpercaya",
      description:
        "Lebih dari 20 tahun pengalaman melayani ribuan pelanggan setia",
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tentang <span className="text-primary">Bengkel Kami</span>
          </h2>
          <p className="text-muted-foreground text- lg:text-lg leading-relaxed">
            SR Motor adalah bengkel Motor profesional yang telah melayani
            masyarakat sejak tahun 2000. Kami mempunyai Visi "Menjadi mitra
            pemeliharaan kendaraan roda dua yang terpercaya dan diandalkan oleh
            masyarakat setempat melalui mengutamakan kualitas barang, hasil
            servis terbaik, dan kepuasan pelanggan." Kepuasan dan keamanan
            kendaraan Anda adalah prioritas utama kami.
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[img1, img2].map((src, index) => (
            <div
              key={index}
              className="group rounded-2xl border-4 border-[#f9611f] shadow-[0_20px_35px_rgba(249,97,31,0.25)] overflow-hidden"
            >
              <img
                src={src}
                alt={`Galeri bengkel ${index + 1}`}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent-dark rounded-2xl px-3 py-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-5xl font-bold text-primary mb-2">
                20+
              </div>
              <div className="text-white/70 text-1xl">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-2xl md:text-5xl font-bold text-primary mb-2">
                5000+
              </div>
              <div className="text-white/70 text-1xl">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-2xl md:text-5xl font-bold text-primary mb-2">
                1
              </div>
              <div className="text-white/70 text-1xl">Teknisi Ahli</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
