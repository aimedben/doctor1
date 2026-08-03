import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const isBrowser = typeof window !== 'undefined';

const videos = [
  {
    id: 'v161068269893642',
    url: 'https://www.facebook.com/watch/?v=161068269893642',
    aspect: 'aspect-video',
    label: 'Avis patient',
  },
  {
    id: 'r1697670608064741',
    url: 'https://www.facebook.com/reel/1697670608064741',
    aspect: 'aspect-[9/16]',
    label: 'Avis patient',
  },
  {
    id: 'r351655957470381',
    url: 'https://www.facebook.com/reel/351655957470381',
    aspect: 'aspect-[9/16]',
    label: 'Avis patient',
  },
  {
    id: 'r698895122139021',
    url: 'https://www.facebook.com/reel/698895122139021',
    aspect: 'aspect-[9/16]',
    label: 'Avis patient',
  },
  {
    id: 'r231698296392262',
    url: 'https://www.facebook.com/reel/231698296392262',
    aspect: 'aspect-[9/16]',
    label: 'Avis patient',
  },
  {
    id: 'r2884576078398698',
    url: 'https://www.facebook.com/reel/2884576078398698',
    aspect: 'aspect-[9/16]',
    label: 'Avis patient',
  },
];

const embedSrc = (url: string) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&t=0`;

const VideoReviews = () => {
  return (
    <section id="avis-videos" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isBrowser ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Avis en vidéo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ils témoignent <span className="text-blue-600">en vidéo</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Des patients partagent leur expérience après avoir été pris en charge au cabinet
            du Dr IFRI à Seddouk.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={isBrowser ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl border border-blue-100 p-4 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`${video.aspect} relative rounded-2xl overflow-hidden bg-gray-900`}>
                <iframe
                  src={embedSrc(video.url)}
                  title={`Avis en vidéo d'un patient du Dr IFRI`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex items-center justify-between mt-3 px-1">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <Play size={14} className="text-blue-600" /> {video.label}
                </span>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  Voir sur Facebook <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={isBrowser ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          Si une vidéo ne s'affiche pas, elle est peut-être en cours de chargement ou non publique.
          Cliquez sur « Voir sur Facebook » pour la regarder directement.
        </motion.p>
      </div>
    </section>
  );
};

export default VideoReviews;
