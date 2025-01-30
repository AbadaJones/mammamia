import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Clock, MapPin, Award, Star, Users } from 'lucide-react';
import ReservationSection from '../components/ReservationSection';

const HomePage = () => {
  const menuCategories = [
    {
      title: "ENTRÉES",
      description: "Antipasti et entrées traditionnelles",
      image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "ENTRÉES"
    },
    {
      title: "PASTA",
      description: "Pâtes fraîches maison",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "PASTA"
    },
    {
      title: "PIZZAS",
      description: "Pizzas napolitaines authentiques",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "PIZZAS"
    },
    {
      title: "VIANDES",
      description: "Sélection de viandes grillées",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "VIANDES"
    },
    {
      title: "MARDOUMA",
      description: "Spécialités grillées",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "MARDOUMA"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-amber-500 text-lg mb-6 block tracking-wider">BIENVENUE CHEZ MAMMA MIA</span>
              <h1 className="text-7xl font-serif mb-8 leading-tight">
                Une Expérience
                <span className="block">Gastronomique</span>
                <span className="text-amber-500">Méditerranéenne</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed mx-auto max-w-2xl">
                Découvrez une cuisine méditerranéenne authentique dans un cadre élégant et chaleureux
              </p>
              <div className="flex justify-center gap-6">
                <Link
                  to="/reservation"
                  className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-sm flex items-center gap-2"
                >
                  Réserver une table
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/menu"
                  className="group border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-medium rounded-sm"
                >
                  Découvrir le Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Cuisine Authentique */}
            <div className="text-center">
              <ChefHat className="h-12 w-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Cuisine Authentique</h3>
              <p className="text-gray-400">
                Nos chefs perpétuent la tradition culinaire méditerranéenne avec des recettes authentiques et des ingrédients soigneusement sélectionnés.
              </p>
            </div>

            {/* Excellence Culinaire */}
            <div className="text-center">
              <Award className="h-12 w-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Excellence Culinaire</h3>
              <p className="text-gray-400">
                Une équipe passionnée qui s'engage à offrir une expérience gastronomique exceptionnelle à chaque service.
              </p>
            </div>

            {/* Emplacement Idéal */}
            <div className="text-center">
              <MapPin className="h-12 w-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Emplacement Idéal</h3>
              <p className="text-gray-400">
                Situé au cœur de la Zone 4, notre restaurant vous accueille dans un cadre élégant et chaleureux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-lg mb-4 block">NOTRE MENU</span>
            <h2 className="text-5xl font-serif mb-6">Nos Spécialités</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Une sélection de nos meilleurs plats préparés avec des ingrédients authentiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories.map((category) => (
              <Link
                key={category.title}
                to={`/menu?category=${category.category}`}
                className="group relative h-[400px] overflow-hidden rounded-sm"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-end p-8 text-center">
                  <h3 className="text-2xl font-serif mb-2">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <span className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    DÉCOUVRIR
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <ReservationSection />
    </div>
  );
};

export default HomePage;