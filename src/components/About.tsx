import { motion } from 'framer-motion';
import { Award, Heart, Users, Stethoscope } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

const About = () => {
  const stats = [
    { icon: Users, value: '+1000', label: 'Patients pris en charge' },
    { icon: Award, value: '+10', label: "Années d'expérience" },
    { icon: Stethoscope, value: '4', label: 'Spécialités médicales' },
    { icon: Heart, value: '100%', label: 'Dedication patient' },
  ];

  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-white">
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
            À propos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Découvrez le <span className="text-blue-600">Dr IFRI</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual Side */}
          <motion.div
            initial={isBrowser ? { opacity: 0, x: -30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Stethoscope className="text-blue-600" size={48} />
                  </div>
                  <p className="text-blue-800 font-display text-2xl font-bold">Dr IFRI</p>
                  <p className="text-blue-600 mt-2">Chirurgien Orthopédiste</p>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold">+18</p>
                <p className="text-blue-100 text-sm">Ans d'expérience</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={isBrowser ? { opacity: 0, x: 30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Un chirurgien orthopédiste dévoué à votre bien-être à Seddouk et Béjaïa
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Le <strong>Dr IFRI</strong> est un chirurgien orthopédiste traumatologue installé à 
                <strong> Seddouk, dans la wilaya de Béjaïa</strong>. Fort d'une solide formation médicale 
                et de nombreuses années d'expérience clinique, il accompagne ses patients avec 
                professionnalisme et humanité dans leur parcours de soins.
              </p>
              <p>
                Spécialisé en <strong>chirurgie orthopédique</strong>, le Dr IFRI prend en charge les 
                affections de l'appareil locomoteur (os, articulations, ligaments, muscles, tendons). 
                Son cabinet est équipé pour réaliser des <strong>radiographies numériques</strong> sur place, 
                permettant un diagnostic rapide et précis.
              </p>
              <p>
                Le Dr IFRI pratique également la <strong>chirurgie des kystes</strong> ainsi que la 
                <strong> circoncision</strong>, avec toute l'attention et le soin requis pour ces interventions.
              </p>
              <p>
                Son cabinet est <strong>conventionné CNAS et CASNOS</strong>, garantissant un accès aux soins 
                pour le plus grand nombre de patients de la région de Béjaïa.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={isBrowser ? { opacity: 0, y: 20 } : false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors"
                >
                  <stat.icon className="text-blue-600 mx-auto mb-2" size={24} />
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
