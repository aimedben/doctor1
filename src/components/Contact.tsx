import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, CheckCircle, Star, Send } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

const Contact = () => {
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerContent, setReviewerContent] = useState('');
  const [reviewerRating, setReviewerRating] = useState(5);
  const [reviewStatus, setReviewStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = () => {
    if (!reviewerName.trim() || !reviewerContent.trim()) return;
    setReviewStatus('success');
    setTimeout(() => {
      setReviewStatus('idle');
      setReviewerName('');
      setReviewerContent('');
      setReviewerRating(5);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isBrowser ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contactez <span className="text-blue-600">le cabinet</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Pour prendre rendez-vous ou obtenir plus d'informations, n'hésitez pas à nous contacter.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={isBrowser ? { opacity: 0, x: -30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a href="tel:0778603827" className="block group bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">Appeler maintenant</h3>
                  <p className="text-blue-100">0778 60 38 27</p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">Clic-to-call →</span>
                </div>
              </div>
            </a>

            <a href="https://wa.me/213778603827?text=Bonjour%20Dr%20IFRI%2C%20je%20souhaite%20prendre%20rendez-vous." target="_blank" rel="noopener noreferrer" className="block group bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Envoyer un message WhatsApp</h3>
                  <p className="text-green-100 text-sm">Réponse rapide garantie</p>
                </div>
              </div>
            </a>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <MapPin className="text-blue-600 mb-3" size={22} />
                <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Rond-point en face de la gare routière<br />Seddouk<br />Wilaya de Béjaïa, Algérie
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <Clock className="text-blue-600 mb-3" size={22} />
                <h4 className="font-semibold text-gray-900 mb-2">Horaires</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lundi – Samedi : 08h – 16h30<br />
                  <span className="text-red-400">Mercredi & Dimanche : Fermé</span>
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <Phone className="text-blue-600 mb-3" size={22} />
                <h4 className="font-semibold text-gray-900 mb-2">Téléphone secondaire</h4>
                <a href="tel:0555448925" className="text-sm text-blue-600 hover:text-blue-700 font-medium">0555 44 89 25</a>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div className="w-6 h-6 bg-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-700 text-xs font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Conventionné</h4>
                <p className="text-sm text-gray-600">CNAS • CASNOS</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={isBrowser ? { opacity: 0, x: 30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Donnez votre avis</h3>
              <p className="text-gray-500 text-sm mb-6">
                Vous avez consulté le Dr IFRI ? Partagez votre expérience pour aider d'autres patients.
              </p>

              {reviewStatus === 'success' ? (
                <motion.div initial={isBrowser ? { opacity: 0, scale: 0.9 } : false} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 rounded-xl p-8 text-center">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-bold text-green-800 mb-2">Merci pour votre avis !</h4>
                  <p className="text-green-600 text-sm">Il sera visible après validation.</p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Note</label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map(n => (
                        <button key={n} type="button" onClick={() => setReviewerRating(n)} className={`p-1 rounded transition ${n <= reviewerRating ? 'text-amber-400' : 'text-slate-200'}`}>
                          <Star size={26} fill={n <= reviewerRating ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="rev-name" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input id="rev-name" type="text" value={reviewerName} onChange={e => setReviewerName(e.target.value)} placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="rev-content" className="block text-sm font-medium text-gray-700 mb-2">Votre avis</label>
                    <textarea id="rev-content" rows={4} value={reviewerContent} onChange={e => setReviewerContent(e.target.value)} placeholder="Partagez votre expérience..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button onClick={handleSubmit} disabled={!reviewerName.trim() || !reviewerContent.trim()} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-40">
                    <Send size={18} /> Envoyer mon avis
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
