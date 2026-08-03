import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

const reviews = [
  { id: 1, patient_name: 'Karim B.', content: 'Excellent chirurgien, très à l\'écoute. L\'opération du kyste s\'est très bien passée, merci Docteur.', rating: 5 },
  { id: 2, patient_name: 'Samira M.', content: 'Un médecin qui prend le temps d\'expliquer. La consultation était claire et rassurante. Je recommande vivement.', rating: 5 },
  { id: 3, patient_name: 'Rachid H.', content: 'Très professionnel. La circoncision de mon fils a été faite dans les meilleures conditions. Merci pour votre accompagnement.', rating: 5 },
  { id: 4, patient_name: 'Nadia K.', content: 'Cabinet bien équipé avec la radiologie numérique. Le Dr IFRI m\'a reçue rapidement et m\'a bien orientée pour mon traitement.', rating: 5 },
  { id: 5, patient_name: 'Mohamed A.', content: 'Je suis venu de Béjaïa sur recommandation. Très satisfait de la prise en charge et des explications fournies.', rating: 4 },
];

const Reviews = () => {
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <section id="avis" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isBrowser ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Avis des patients
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent <span className="text-blue-600">nos patients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Les témoignages ci-dessous sont partagés par des patients ayant consulté le Dr IFRI à Seddouk.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {reviews.length > 0 && (
          <motion.div
            initial={isBrowser ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 p-8 text-center sm:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">Note globale</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-5xl font-extrabold text-gray-900">{avg.toFixed(1)}</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-6 h-6 ${i < Math.round(avg) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600">Basée sur {reviews.length} avis</p>
            <div className="mt-5 mx-auto max-w-xs space-y-1.5">
              {[5, 4, 3, 2, 1].map(star => {
                const count = reviews.filter(r => r.rating === star).length;
                const pct = Math.round((count / reviews.length) * 100);
                return (
                  <div key={star} className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-slate-700 w-4 text-right">{star}</span>
                    <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 h-2.5 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-slate-500 w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={isBrowser ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-blue-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className={i < review.rating ? 'text-amber-400' : 'text-slate-200'} fill={i < review.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="text-base leading-7 text-slate-700 italic">"{review.content}"</p>
              <p className="mt-4 font-bold text-gray-900">— {review.patient_name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
