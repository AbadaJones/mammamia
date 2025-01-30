import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Une Cuisine
              <span className="block text-amber-500">Italienne</span>
              Authentique
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Découvrez une expérience culinaire unique dans notre restaurant lounge au cœur de Paris
            </p>
            <div className="flex gap-6">
              <a
                href="#reservation"
                className="group inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Réserver une table
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Notre Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;