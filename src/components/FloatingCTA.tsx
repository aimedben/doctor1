import { useState, useEffect } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          {/* Main CTA Bar */}
          <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 safe-area-inset-bottom">
            <div className="flex items-center gap-3 max-w-lg mx-auto">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/213778603827?text=Bonjour%20Dr%20IFRI%2C%20je%20souhaite%20prendre%20rendez-vous."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="Contacter par WhatsApp"
              >
                <MessageCircle className="text-white" size={24} />
              </a>

              {/* Main Call Button */}
              <a
                href="tel:0778603827"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full shadow-xl transition-all active:scale-95"
              >
                <Phone size={20} />
                <span>Appeler le Dr IFRI</span>
              </a>

              {/* Close Button (optional) */}
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            {/* Subtle hint text */}
            <p className="text-center text-xs text-gray-400 mt-2">
              Cabinet ouvert Lun-Sam de 8h à 16h30
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
