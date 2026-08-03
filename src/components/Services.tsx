import { motion } from 'framer-motion';
import { Phone, Bone, Droplets, Scissors, Scan } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: Bone,
    title: 'Chirurgie Orthopédique',
    description: 'Prise en charge complète des pathologies de l\'appareil locomoteur (os, articulations, ligaments, muscles et tendons). Le Dr IFRI diagnostique et traite les affections orthopédiques courantes avec expertise et précision.',
    details: ['Diagnostic des douleurs articulaires', 'Traitement des fractures et entorses', 'Suivi post-opératoire', 'Conseils en rééducation']
  },
  {
    icon: Droplets,
    title: 'Traitement des Kystes',
    description: 'Chirurgie spécialisée pour le traitement des kystes de différentes natures (kystes synoviaux, kystes sébacés, etc.). Intervention rapide et efficace pour éliminer ces formations bénignes.',
    details: ['Consultation et diagnostic', 'Chirurgie ambulatoire', 'Suivi post-opératoire', 'Soins de la plaie']
  },
  {
    icon: Scissors,
    title: 'Circoncision',
    description: 'Réalisation de circoncisions dans des conditions d\'hygiène et de sécurité optimales. Le Dr IFRI effectue cette intervention avec délicatesse et professionnalisme, adaptée à chaque patient.',
    details: ['Circoncision médicale', 'Conditions stériles', 'Suivi personnalisé', 'Conseils post-opératoires']
  },
  {
    icon: Scan,
    title: 'Radiologie Numérique',
    description: 'Équipement de radiographie numérique de dernière génération au cabinet. Obtenez vos radiographies rapidement sans avoir à vous déplacer vers un autre centre de diagnostic.',
    details: ['Radiographies numériques', 'Résultats rapides', 'Images haute définition', 'Sur place au cabinet']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
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
            Nos Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Actes & Pathologies <span className="text-blue-600">traités</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Le cabinet du Dr IFRI à Seddouk propose une gamme complète de soins orthopédiques 
            et de services médicaux pour répondre à vos besoins de santé.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={isBrowser ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                  <service.icon className="text-white" size={26} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Insurance Banner */}
        <motion.div
          initial={isBrowser ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <p className="text-blue-100 font-medium mb-2">Conventionnement</p>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Cabinet conventionné CNAS & CASNOS</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Le cabinet du Dr IFRI accepte les patients affiliés à la CNAS (Caisse Nationale 
            d'Assurances Sociales) et à la CASNOS (Caisse d'Assurance Sociale des Non Salariés).
          </p>
          <a
            href="tel:0778603827"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg"
          >
            <Phone size={20} />
            Prendre rendez-vous
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
