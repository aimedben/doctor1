import { motion } from 'framer-motion';
import { Image as ImageIcon, Building2, ShieldCheck, HeartPulse } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

const galleryItems = [
  {
    id: 1,
    title: 'Accueil du Cabinet',
    description: 'Espace d\'accueil chaleureux et professionnel',
    icon: Building2,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Salle de Consultation',
    description: 'Consultation dans un environnement confortable',
    icon: HeartPulse,
    color: 'from-green-400 to-green-600'
  },
  {
    id: 3,
    title: 'Équipement de Radiologie',
    description: 'Radiographie numérique de dernière génération',
    icon: ShieldCheck,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 4,
    title: 'Espace d\'Attente',
    description: 'Zone d\'attente confortable pour les patients',
    icon: ImageIcon,
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 5,
    title: 'Bloc Opératoire',
    description: 'Conditions stériles et sécurisées pour les interventions',
    icon: ShieldCheck,
    color: 'from-red-400 to-red-600'
  },
  {
    id: 6,
    title: 'Extérieur du Cabinet',
    description: 'Localisation facile à Seddouk, face à la gare routière',
    icon: Building2,
    color: 'from-teal-400 to-teal-600'
  }
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-20 lg:py-28 bg-white">
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
            Galerie
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Découvrez notre <span className="text-blue-600">cabinet</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Un espace moderne, propre et équipé pour vous offrir les meilleurs soins 
            orthopédiques à Seddouk.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={isBrowser ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Placeholder Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
                
                {/* Visite indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                    Venez nous rendre visite
                  </span>
                </div>
              </div>

              {/* Image placeholder - can be replaced with real images later */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <ImageIcon size={40} className="text-white/60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about gallery */}
        <motion.p
          initial={isBrowser ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8 italic"
        >
          Venez découvrir notre cabinet en personne — Situé au rond-point face à la gare routière de Seddouk
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;
