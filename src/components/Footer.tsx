import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Tentang Kami</h3>
            <p className="text-muted-foreground">
              Bengkel terpercaya dengan teknisi berpengalaman, siap melayani perawatan dan perbaikan kendaraan Anda dengan profesional.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Jl. Raya Servis No. 123, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@bengkel.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Jam Operasional</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Senin - Jumat: 08.00 - 17.00</p>
              <p>Sabtu: 08.00 - 15.00</p>
              <p>Minggu: Tutup</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bengkel Terpercaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
