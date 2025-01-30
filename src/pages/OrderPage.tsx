import React, { useState } from 'react';
import { ShoppingBag, Clock, MapPin, ChefHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderPage = () => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');

  const deliveryZones = [
    { zone: "Zone 1 (0-3km)", price: "Gratuit", time: "30-45 min" },
    { zone: "Zone 2 (3-5km)", price: "1500 FCFA", time: "45-60 min" },
    { zone: "Zone 3 (5-7km)", price: "2500 FCFA", time: "60-75 min" }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-7xl font-serif mb-6">Commander</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Savourez l'Italie chez vous
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Type Selection */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className={`relative p-8 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                deliveryType === 'delivery' 
                  ? 'border-amber-600 bg-zinc-900' 
                  : 'border-zinc-800 hover:border-white'
              }`}
              onClick={() => setDeliveryType('delivery')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className={`h-8 w-8 ${deliveryType === 'delivery' ? 'text-amber-500' : 'text-gray-400'}`} />
                <h3 className="text-2xl font-serif">Livraison à domicile</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Faites-vous livrer vos plats préférés directement chez vous. Livraison gratuite dans un rayon de 3km.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                Commander maintenant <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div 
              className={`relative p-8 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                deliveryType === 'pickup' 
                  ? 'border-amber-600 bg-zinc-900' 
                  : 'border-zinc-800 hover:border-white'
              }`}
              onClick={() => setDeliveryType('pickup')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <ChefHat className={`h-8 w-8 ${deliveryType === 'pickup' ? 'text-amber-500' : 'text-gray-400'}`} />
                <h3 className="text-2xl font-serif">À emporter</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Retirez votre commande au restaurant et bénéficiez d'une réduction de 10% sur l'addition.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                Commander maintenant <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Zones de Livraison</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Consultez nos zones de livraison et les délais estimés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryZones.map((zone) => (
              <div key={zone.zone} className="bg-black p-8 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-medium mb-4">{zone.zone}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300">Frais de livraison: {zone.price}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300">Délai estimé: {zone.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Comment Commander</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Suivez ces étapes simples pour passer votre commande
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Choisissez vos plats",
                description: "Parcourez notre menu et sélectionnez vos plats préférés"
              },
              {
                step: "2",
                title: "Mode de livraison",
                description: "Choisissez entre la livraison à domicile ou le retrait au restaurant"
              },
              {
                step: "3",
                title: "Paiement sécurisé",
                description: "Réglez votre commande en toute sécurité et attendez la confirmation"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-black transition-all duration-300 px-12 py-4 text-lg tracking-wider"
            >
              VOIR LE MENU
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;