import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter, Pizza } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-8">
                <Pizza className="h-8 w-8 text-amber-500" />
                <span className="text-2xl font-serif text-white">Mamma Mia</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Une expérience culinaire méditerranéenne authentique. Des saveurs traditionnelles servies dans une ambiance contemporaine.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-serif mb-8">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Rue Paul Langevin, Zone 4, Marcory</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+225 0554545450</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contact@mammamia.ci</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Mar-Dim: 19h00-23h00</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-serif mb-8">Navigation</h4>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À Propos
                </Link>
                <Link to="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
                <Link to="/evenements" className="text-gray-400 hover:text-white transition-colors">
                  Événements
                </Link>
                <Link to="/reservation" className="text-gray-400 hover:text-white transition-colors">
                  Réserver
                </Link>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  Mon Compte
                </Link>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-serif mb-8">Horaires d'Ouverture</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-400">
                  <span>Lundi</span>
                  <span>Fermé</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Mardi - Vendredi</span>
                  <span>19:00 - 23:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Samedi - Dimanche</span>
                  <span>19:00 - 23:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zinc-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Mamma Mia. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;