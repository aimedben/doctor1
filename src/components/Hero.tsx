import { Phone, MapPin, Clock, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const isBrowser = typeof window !== 'undefined';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={isBrowser ? { opacity: 0, y: 30 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-blue-100 text-sm font-medium">Cabinet ouvert — Prenez rendez-vous</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Dr <span className="text-blue-300">IFRI</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-light mt-2 block text-blue-100">
                Chirurgien Orthopédiste Traumatologue
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
              Cabinet médical à <strong className="text-white">Seddouk, Béjaïa</strong>. 
              Votre santé entre de bonnes mains. Chirurgie orthopédique, traitement des kystes, 
              circoncision et radiologie numérique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:0778603827"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                <Phone size={22} strokeWidth={2.5} />
                Appeler pour un rendez-vous
              </a>
              <Link
                to="/rendez-vous"
                className="inline-flex items-center justify-center gap-3 bg-blue-500 text-white font-bold px-6 py-4 rounded-full text-lg hover:bg-blue-600 transition-all shadow-lg"
              >
                <CalendarDays size={22} />
                Prendre RDV en ligne
              </Link>
              <a
                href="https://wa.me/213778603827?text=Bonjour%20Dr%20IFRI%2C%20je%20souhaite%20prendre%20rendez-vous."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-6 py-4 rounded-full text-lg hover:bg-green-600 transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
            
            {/* Quick Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <MapPin className="text-blue-300 flex-shrink-0" size={20} />
                <span className="text-blue-100 text-sm">Seddouk, Béjaïa</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Clock className="text-blue-300 flex-shrink-0" size={20} />
                <span className="text-blue-100 text-sm">Lun-Sam : 8h – 16h30</span>
              </div>
            </div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div
            initial={isBrowser ? { opacity: 0, scale: 0.9 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full"></div>
              
              {/* Photo */}
              <img
                src="/os.jpg"
                alt="Dr IFRI — Chirurgien Orthopédiste Traumatologue"
                className="relative w-full h-full object-cover rounded-full border-8 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
