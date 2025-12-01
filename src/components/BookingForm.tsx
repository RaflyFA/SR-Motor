import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Halo, saya ingin booking servis bengkel dengan detail berikut:

Nama: ${formData.name}
No. Telepon: ${formData.phone}
Layanan: ${formData.service}
Tanggal: ${formData.date}
${formData.message ? `\nCatatan: ${formData.message}` : ""}

Terima kasih!`;

    // WhatsApp number (replace with actual number)
    const whatsappNumber = "6281234567890"; // Format: country code + number without +
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Berhasil!",
      description: "Anda akan diarahkan ke WhatsApp...",
    });
  };

  return (
    <section id="booking" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 shadow-workshop">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold">
                Booking <span className="text-primary">Sekarang</span>
              </CardTitle>
              <CardDescription className="text-base">
                Isi form di bawah ini dan kami akan segera menghubungi Anda via WhatsApp
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Jenis Layanan *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Pilih layanan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="servis-rutin">Servis Rutin</SelectItem>
                      <SelectItem value="ganti-oli">Ganti Oli & Filter</SelectItem>
                      <SelectItem value="aki-kelistrikan">Aki & Kelistrikan</SelectItem>
                      <SelectItem value="ac-mobil">AC Mobil</SelectItem>
                      <SelectItem value="tune-up">Tune Up</SelectItem>
                      <SelectItem value="general-check">General Check Up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Tanggal Booking *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Catatan Tambahan (Opsional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Jelaskan kondisi kendaraan atau permintaan khusus"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
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
  );
};

export default BookingForm;
