import React from 'react';
import { ChefHat } from 'lucide-react';

const MenuSection = () => {
  const menuItems = [
    {
      category: "Antipasti",
      items: [
        { name: "Bruschetta Classica", price: "9€", description: "Pain grillé, tomates fraîches, basilic, ail", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Carpaccio di Manzo", price: "14€", description: "Fines tranches de bœuf, roquette, parmesan", image: "https://images.unsplash.com/photo-1598511796432-32663d0875f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Burrata Cremosa", price: "12€", description: "Burrata crémeuse, tomates cerises, huile d'olive", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      category: "Primi Piatti",
      items: [
        { name: "Tagliatelle al Tartufo", price: "24€", description: "Pâtes fraîches, truffe noire, crème", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Risotto ai Funghi", price: "22€", description: "Riz carnaroli, champignons sauvages, parmesan", image: "https://images.unsplash.com/photo-1633964913295-ceb43826a07f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Ravioli al Aragosta", price: "26€", description: "Raviolis maison farcis à la langouste", image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      category: "Secondi Piatti",
      items: [
        { name: "Osso Buco alla Milanese", price: "32€", description: "Jarret de veau braisé, risotto au safran", image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Branzino al Forno", price: "28€", description: "Bar entier au four, légumes de saison", image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Bistecca Fiorentina", price: "45€", description: "T-bone grillé, herbes fraîches", image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ChefHat className="h-12 w-12 mx-auto text-amber-600 mb-4" />
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">La Carte</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Découvrez notre sélection de plats traditionnels italiens, préparés avec les meilleurs ingrédients importés directement d'Italie</p>
        </div>
        
        <div className="space-y-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-3xl font-serif font-bold text-amber-600 mb-8 text-center">{section.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="p-6">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-medium">{item.name}</h4>
                        <span className="text-amber-600 font-semibold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;