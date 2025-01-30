import React from 'react';
import { ChefHat, Award, Clock, MapPin, Users, Utensils, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: "Clients satisfaits", value: "50K+" },
    { icon: ChefHat, label: "Chefs expérimentés", value: "12" },
    { icon: Award, label: "Prix d'excellence", value: "15" },
    { icon: Utensils, label: "Plats signatures", value: "45+" }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-7xl font-serif mb-6">Notre Histoire</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Une tradition culinaire italienne depuis 1970
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8">Notre Passion pour la Cuisine Italienne</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Fondé en 1970 par la famille Rossi, Mamma Mia est né d'une passion profonde pour la cuisine traditionnelle italienne. Notre histoire commence dans les collines toscanes, où nos recettes ont été transmises de génération en génération.
                </p>
                <p>
                  Chaque plat que nous servons raconte une histoire, celle de nos origines, de notre amour pour les ingrédients authentiques et de notre engagement envers l'excellence culinaire.
                </p>
                <p>
                  Aujourd'hui, nous continuons à honorer cet héritage tout en innovant pour créer des expériences gastronomiques mémorables pour nos clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Restaurant Interior"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-600 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="h-10 w-10 mx-auto mb-4 text-amber-500" />
                <div className="text-4xl font-bold mb-2">{value}</div>
                <div className="text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Notre Équipe</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Des passionnés de la gastronomie italienne qui s'efforcent de vous offrir une expérience unique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Marco Rossi",
                role: "Chef Exécutif",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sofia Conti",
                role: "Chef Pâtissière",
                image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Luca Romano",
                role: "Sommelier",
                image: "https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8">Nous Trouver</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-amber-500" />
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p className="text-gray-400">Rue Paul Langevin, Zone 4, Marcory</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-amber-500" />
                  <div>
                    <h3 className="font-medium mb-1">Téléphone</h3>
                    <p className="text-gray-400">+225 0554545450</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-amber-500" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-400">contact@mammamia.ci</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-amber-500" />
                  <div>
                    <h3 className="font-medium mb-1">Horaires</h3>
                    <p className="text-gray-400">
                      Mar-Dim: 19h00-23h00<br />
                      Fermé le lundi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Restaurant Ambiance"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;