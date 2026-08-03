import { motion } from 'framer-motion';
import { Stethoscope, ArrowRight } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

const categories = [
  {
    title: 'Épaule & Coiffe des Rotateurs',
    acts: [
      'Réinsertion ou suture d\'un tendon de la coiffe des rotateurs de l\'épaule, par abord direct',
      'Réinsertion ou suture d\'un tendon de la coiffe des rotateurs de l\'épaule, par arthroscopie',
      'Réinsertion et/ou suture de plusieurs tendons de la coiffe des rotateurs de l\'épaule, par abord direct',
      'Réinsertion et/ou suture de plusieurs tendons de la coiffe des rotateurs de l\'épaule, par arthroscopie',
      'Acromioplastie sans prothèse, par abord direct',
      'Acromioplastie sans prothèse, par arthroscopie',
      'Ténodèse et/ou résection de la portion articulaire du muscle long biceps brachial',
      'Désinsertion ou allongement des muscles épicondyliens latéraux au coude',
      'Libération du nerf ulnaire au coude, par abord direct',
    ],
  },
  {
    title: 'Genou & Arthroscopie',
    acts: [
      'Méniscectomie latérale ou médiale du genou, par arthroscopie',
      'Méniscectomies latérale et médiale du genou, par arthroscopie',
      'Nettoyage de l\'articulation du genou, par arthroscopie',
      'Synovectomie antérieure du genou, par arthroscopie',
      'Reconstruction du ligament croisé antérieur du genou par autogreffe, par arthroscopie',
      'Reconstruction du ligament croisé antérieur du genou par autogreffe, par arthrotomie',
      'Ostéotomie simple de l\'extrémité proximale du tibia',
    ],
  },
  {
    title: 'Main, Poignet & Nerfs',
    acts: [
      'Libération du nerf médian au canal carpien, par abord direct',
      'Libération du nerf médian au canal carpien, par vidéochirurgie',
      'Exérèse de kyste synovial du poignet, par abord direct',
      'Exérèse de kyste synovial ou mucoïde d\'une articulation ou d\'une gaine fibreuse de la main',
      'Exérèse de kyste synovial avec ténosynovectomie des extenseurs au poignet',
      'Ténosynovectomie des muscles extenseurs au poignet, par abord direct',
      'Ténosynovectomie des muscles fléchisseurs au poignet ou à la paume de la main',
      'Fasciectomie (Aponévrectomie) palmodigitale sur un ou plusieurs rayons de la main',
      'Libération des tendons des muscles fléchisseurs des doigts sur un rayon de la main',
      'Suture de plaie d\'un tendon d\'un muscle fléchisseur des doigts sur un rayon de la main',
      'Réparation de plaie de l\'appareil extenseur d\'un doigt par suture',
      'Excision d\'un panaris profond de la pulpe des doigts (phlegmon pulpaire)',
      'Exérèse partielle ou totale de la tablette d\'un ongle',
      'Exérèse de l\'appareil unguéal avec réparation par lambeau pédiculé unguéomatriciel',
    ],
  },
  {
    title: 'Fractures & Ostéosynthèse',
    acts: [
      'Réduction et fixation de fractures',
      'Ostéosynthèse de fracture de l\'extrémité distale d\'un os de l\'avant-bras, à foyer ouvert',
      'Ostéosynthèse de fracture extraarticulaire d\'un os de la main par broche, à foyer fermé',
      'Ostéosynthèse de fracture extracapsulaire du col du fémur',
      'Ostéosynthèse de fracture infratrochantérienne ou trochantérodiaphysaire du fémur',
      'Ostéosynthèse de fracture ou de décollement épiphysaire de l\'extrémité distale d\'un os de l\'avant-bras par broche',
      'Réduction orthopédique de fracture ou de décollement épiphysaire de l\'extrémité distale de l\'avant-bras',
      'Réduction orthopédique d\'une luxation de prothèse de l\'articulation coxofémorale',
      'Ablation de broche d\'ostéosynthèse non enfouie',
      'Ablation de matériel d\'ostéosynthèse des membres, par abord direct',
    ],
  },
  {
    title: 'Prothèses de Hanche & de Genou',
    acts: [
      'Remplacement de l\'articulation coxofémorale par prothèse fémorale cervicocéphalique et cupule mobile',
      'Remplacement de l\'articulation coxofémorale par prothèse totale',
      'Remplacement de l\'articulation coxofémorale par prothèse totale, avec reconstruction acétabulaire ou fémorale par greffe',
      'Remplacement de l\'articulation du genou par prothèse tricompartimentaire',
      'Remplacement de l\'articulation du genou par prothèse unicompartimentaire fémorotibiale ou fémoropatellaire',
    ],
  },
  {
    title: 'Colonne Vertébrale',
    acts: [
      'Exérèse d\'une hernie discale de la colonne vertébrale lombale, par abord postérieur ou postérolatéral',
      'Recalibrage bilatéral de la colonne vertébrale lombale ou lombosacrale, par abord postérieur',
    ],
  },
  {
    title: 'Pied & Cheville',
    acts: [
      'Ostéotomie du premier métatarsien, avec libération mobilisatrice de l\'articulation métatarsophalangienne du premier orteil',
      'Ostéotomie du métatarsien et de la phalange proximale du premier rayon du pied',
      'Ostéotomie d\'un métatarsien latéral ou d\'une phalange d\'orteil',
      'Arthrodèse de la première articulation métatarsophalangienne, par arthrotomie',
      'Arthroplastie par résection de l\'articulation ou arthrodèse interphalangienne d\'un orteil latéral',
      'Synovectomie articulaire de l\'avant-pied',
      'Suture ou reconstruction de l\'appareil capsuloligamentaire de l\'articulation tibiotalienne et/ou talocalcanéenne',
      'Section ou allongement de plusieurs tendons pour correction d\'attitude vicieuse du pied',
      'Ablation de matériel d\'ostéosynthèse du pied, à foyer ouvert',
    ],
  },
  {
    title: 'Tissus Mous & Injections',
    acts: [
      'Exérèse de lésion superficielle de la peau par excision d\'une zone cutanée de moins de 5 cm²',
      'Exérèse de lésion fasciale et/ou sousfasciale des tissus mous',
      'Évacuation de collection profonde de la peau et des tissus mous, par abord direct',
      'Excision de lésion infectieuse diffuse de la peau et des tissus mous sur moins de 50 cm²',
      'Ablation d\'un corps étranger profond des tissus mous du visage ou des mains',
      'Parage et/ou suture de plaie profonde de la peau et des tissus mous de la main',
      'Injection thérapeutique d\'agent pharmacologique dans une articulation ou une bourse séreuse, par voie transcutanée',
      'Injection d\'agent pharmacologique dans l\'appareil capsuloligamentaire d\'une articulation',
      'Injection de produits de comblement',
      'Techniques de liposuccion et de remodelage corporel',
      'Confection d\'appareils rigides d\'immobilisation des membres',
      'Confection de contentions souples d\'articulation',
      'Soins post-traumatiques et prise en charge des plaies',
      'Chirurgie reconstructive après traumatisme',
      'Réparation de perte de substance par lambeau local ou régional',
      'Radiographie de la main ou d\'un doigt',
      'Ostéodensitométrie (Absorptiométrie osseuse) sur 2 sites, par méthode biphotonique',
    ],
  },
];

const Acts = () => {
  return (
    <section id="actes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isBrowser ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Actes & Pathologies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Les actes médicaux <span className="text-blue-600">pratiqués</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Le Dr IFRI réalise un large éventail d'actes de chirurgie orthopédique et de traumatologie,
            de la consultation au traitement chirurgical, dans son cabinet de Seddouk (Béjaïa).
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={isBrowser ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/60 to-white p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
                  <Stethoscope className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {category.acts.map((act) => (
                  <li key={act} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5"></span>
                    {act}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={isBrowser ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Cette liste n'est pas exhaustive. Chaque prise en charge est adaptée à votre situation.
          </p>
          <a
            href="tel:0778603827"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Consulter le Dr IFRI <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Acts;
