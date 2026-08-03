import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

const schedule = [
  { day: 'Lundi', hours: '08h00 – 16h30', open: true },
  { day: 'Mardi', hours: '08h00 – 16h30', open: true },
  { day: 'Mercredi', hours: 'Fermé', open: false },
  { day: 'Jeudi', hours: '08h00 – 16h30', open: true },
  { day: 'Vendredi', hours: '08h00 – 16h30', open: true },
  { day: 'Samedi', hours: '08h00 – 16h30', open: true },
  { day: 'Dimanche', hours: 'Fermé', open: false },
];

const Location = () => {
  return (
    <section id="localisation" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={isBrowser ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Localisation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nous trouver à <span className="text-blue-600">Seddouk</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Notre cabinet est facilement accessible, situé en face de la gare routière 
            de Seddouk, dans la wilaya de Béjaïa.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map - Takes more space */}
          <motion.div
            initial={isBrowser ? { opacity: 0, x: -30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]"
          >
            {/* OpenStreetMap Embed - Centered on Seddouk, Béjaïa */}
            <iframe
              title="Localisation du cabinet Dr IFRI à Seddouk, Béjaïa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.88%2C36.36%2C4.95%2C36.40&layer=mapnik&marker=36.3833%2C4.9167"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            
            {/* Overlay card on map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white rounded-xl p-4 shadow-xl max-w-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Adresse</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Rond-point en face de la gare routière<br />
                    Seddouk, Wilaya de Béjaïa, Algérie
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Seddouk+Bejaia+Algerie+Gare+routiere"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                <Navigation size={14} />
                Ouvrir dans Google Maps
              </a>
            </div>
          </motion.div>

          {/* Schedule & Info */}
          <motion.div
            initial={isBrowser ? { opacity: 0, x: 30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Horaires d'ouverture</h3>
                  <p className="text-sm text-gray-500">Prenez rendez-vous par téléphone</p>
                </div>
              </div>

              {/* Today indicator */}
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-700 text-sm font-medium">
                  Cabinet ouvert aujourd'hui (si jour ouvré)
                </span>
              </div>

              {/* Schedule Table */}
              <div className="space-y-2">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      item.open 
                        ? 'bg-gray-50 hover:bg-blue-50' 
                        : 'bg-red-50/50'
                    }`}
                  >
                    <span className={`font-medium ${item.open ? 'text-gray-700' : 'text-red-400'}`}>
                      {item.day}
                    </span>
                    <span className={`text-sm ${item.open ? 'text-gray-600' : 'text-red-400'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Besoin d'un rendez-vous ?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Appelez-nous directement pour prendre rendez-vous. 
                Nous sommes disponibles pendant les heures d'ouverture.
              </p>
              
              <div className="space-y-3">
                <a
                  href="tel:0778603827"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <Phone size={18} />
                  <div>
                    <p className="text-xs text-blue-200">Téléphone principal</p>
                    <p className="font-semibold">0778 60 38 27</p>
                  </div>
                </a>
                <a
                  href="tel:0555448925"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <Phone size={18} />
                  <div>
                    <p className="text-xs text-blue-200">Téléphone secondaire</p>
                    <p className="font-semibold">0555 44 89 25</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
