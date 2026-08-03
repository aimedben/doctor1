import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, CalendarDays } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#a-propos', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#actes', label: 'Actes' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#avis', label: 'Avis' },
    { href: '#localisation', label: 'Localisation' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-700 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">IF</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-blue-900 font-bold text-lg leading-tight">Dr IFRI</p>
              <p className="text-blue-600 text-xs leading-tight">Chirurgien Orthopédiste</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/rendez-vous"
              className="inline-flex items-center gap-2 border border-blue-200 text-blue-700 font-semibold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-all"
            >
              <CalendarDays size={18} />
              <span>RDV en ligne</span>
            </Link>
            <a
              href="tel:0778603827"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              <span>Appeler</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/rendez-vous"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 border border-blue-200 text-blue-700 font-semibold px-5 py-3 rounded-full mt-2"
              >
                <CalendarDays size={18} />
                <span>Prendre RDV en ligne</span>
              </Link>
              <a
                href="tel:0778603827"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full transition-all mt-2"
              >
                <Phone size={18} />
                <span>Appeler pour un rendez-vous</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
