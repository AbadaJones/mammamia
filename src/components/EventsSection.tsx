import React from 'react';
import { Wine, Calendar } from 'lucide-react';

const EventsSection = () => {
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
    <section id="events" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Wine className="h-12 w-12 mx-auto text-amber-600 mb-4" />
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Événements Spéciaux</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Découvrez nos événements exclusifs pour des moments inoubliables</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center text-amber-600 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">{event.price}</span>
                  <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;