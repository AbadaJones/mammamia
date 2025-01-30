import React from 'react';
import { Calendar, Wine } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      title: "Soirée Dégustation de Vins",
      date: "25 Mars 2024",
      description: "Une soirée exceptionnelle de dégustation avec notre sommelier. Découvrez une sélection de grands vins italiens accompagnés de tapas raffinés.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "75€ par personne"
    },
    {
      title: "Concert Jazz Live",
      date: "1 Avril 2024",
      description: "Profitez d'une soirée jazz intime avec notre groupe résident. Un menu spécial sera proposé pour l'occasion.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "45€ par personne"
    },
    {
      title: "Masterclass Cuisine Italienne",
      date: "15 Avril 2024",
      description: "Apprenez les secrets de la cuisine italienne avec notre chef. Cours suivi d'un déjeuner avec les plats préparés.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "95€ par personne"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <Wine className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-7xl font-serif mb-6">Événements</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez nos événements exclusifs pour des moments inoubliables
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className="group relative"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center text-amber-500 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-sm tracking-wider uppercase">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-light tracking-wide mb-3">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-500 font-light">{event.price}</span>
                    <button className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-2 text-sm tracking-wider uppercase">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-8">Ne Manquez Aucun Événement</h2>
          <p className="text-xl text-gray-300 mb-12">
            Inscrivez-vous à notre newsletter pour être informé de nos prochains événements
          </p>
          <form className="max-w-xl mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 bg-transparent border border-white/30 px-6 py-4 focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-sm tracking-wider uppercase whitespace-nowrap"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;