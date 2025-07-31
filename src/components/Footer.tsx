import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              FineCut
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Hvor stil møder præcision. Din lokale barbershop i hjertet af Horsens.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/finecuthorsens/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/FineCut/100090299740181/"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt os</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <div>Borgergade 5, st. th.</div>
                  <div>8700 Horsens</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:+4512345678" className="hover:text-primary transition-colors">
                  +45 12 34 56 78
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:info@finecut.dk" className="hover:text-primary transition-colors">
                  info@finecut.dk
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Åbningstider</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Mandag - Fredag:</span>
                <span>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Lørdag:</span>
                <span>9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Søndag:</span>
                <span>Lukket</span>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded text-xs">
                <strong>Bemærk:</strong> Vi anbefaler at booke tid på forhånd for at sikre den bedste service.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
          <div>
            © 2024 Finecut Barbershop. Alle rettigheder forbeholdes.
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privatlivspolitik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
