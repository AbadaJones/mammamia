import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Pizza } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent';
  const textColor = 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBackground} ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Pizza className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-serif text-white">Mamma Mia</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                to="/a-propos" 
                className={`${textColor} text-sm tracking-widest hover:text-amber-500 transition-colors uppercase`}
              >
                À Propos
              </Link>
              <Link 
                to="/menu" 
                className={`${textColor} text-sm tracking-widest hover:text-amber-500 transition-colors uppercase`}
              >
                Menu
              </Link>
              <Link 
                to="/evenements" 
                className={`${textColor} text-sm tracking-widest hover:text-amber-500 transition-colors uppercase`}
              >
                Événements
              </Link>
              <Link
                to="/reservation"
                className="bg-amber-500 text-white hover:bg-amber-600 transition-all duration-300 px-6 py-2 text-sm tracking-widest uppercase rounded-none"
              >
                Réserver
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-8 space-y-6">
              <Link 
                to="/a-propos" 
                className="block text-white text-sm tracking-widest hover:text-amber-500 transition-colors uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link 
                to="/menu" 
                className="block text-white text-sm tracking-widest hover:text-amber-500 transition-colors uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/evenements" 
                className="block text-white text-sm tracking-widest hover:text-amber-500 transition-colors uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Événements
              </Link>
              <Link
                to="/reservation"
                className="inline-block bg-amber-500 text-white hover:bg-amber-600 transition-all duration-300 px-6 py-2 text-sm tracking-widest uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;