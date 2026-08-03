import { Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IF</span>
              </div>
              <div>
                <p className="text-white font-bold text-xl">Dr IFRI</p>
                <p className="text-blue-400 text-sm">Chirurgien Orthopédiste Traumatologue</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Cabinet médical spécialisé en chirurgie orthopédie, traitement des kystes, 
              circoncision et radiologie numérique. Au service de votre santé à Seddouk, 
              Béjaïa depuis plus de 10 ans.
            </p>
            
            {/* Quick CTA */}
            <a
              href="tel:0778603827"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              <Phone size={18} />
              0778 60 38 27
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Chirurgie Orthopédique
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Traitement des Kystes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Circoncision
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Radiologie Numérique
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contact & Localisation</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-sm">
                  Rond-point face à la gare routière<br />
                  Seddouk, Béjaïa, Algérie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <div className="text-sm">
                  <a href="tel:0778603827" className="hover:text-blue-400 transition-colors block">0778 60 38 27</a>
                  <a href="tel:0555448925" className="hover:text-blue-400 transition-colors block">0555 44 89 25</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              © {currentYear} Dr IFRI. Tous droits réservés.
              <a href="/privacy" className="text-gray-500 hover:text-blue-400 transition-colors ml-1">
                Politique de confidentialité
              </a>
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Fait avec <Heart className="text-red-500 inline" size={14} /> à Seddouk, Béjaïa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
