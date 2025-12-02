import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CurvedDivider from "./CurvedDivider";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Halo, saya lihat di website bengkel, saya ingin bertanya:

Nama: ${formData.name}
No. Telepon: ${formData.phone}
Pertanyaan: ${formData.message}

Terima kasih!`;

    // WhatsApp number (replace with actual number)
    const whatsappNumber = "6289521689687"; // Format: country code + number without +
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Berhasil!",
      description: "Anda akan diarahkan ke WhatsApp...",
    });
  };

  return (
    <>
      <CurvedDivider position="bottom" color="#2b303b" />
      <section id="contact" className="py-10 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 shadow-workshop">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold">
                  Hubungi <span className="text-primary">Kami</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Ada pertanyaan? Isi form di bawah ini dan kami akan segera
                  merespons via WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">No. Telepon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08xx xxxx xxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pertanyaan / Pesan *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-hero hover:opacity-90 shadow-workshop text-lg py-6 rounded-xl"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Kirim via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
