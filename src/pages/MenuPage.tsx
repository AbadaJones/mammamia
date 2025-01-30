import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("ENTRÉES");
  const location = useLocation();

  useEffect(() => {
    // Get category from URL query parameter
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && menuItems.some(item => item.category === category)) {
      setActiveTab(category);
    }
  }, [location]);
  
  const menuItems = [
    {
      category: "ENTRÉES",
      subcategories: [
        {
          name: "Entrées Froides",
          items: [
            { 
              id: "entree-froide-1", 
              name: "Bressaola de Thon", 
              price: "7 500 FCFA",
              description: "Carpaccio de thon assaisonné sur un lit de fines rondelles de tomate"
            },
            { 
              id: "entree-froide-2", 
              name: "Salade Cesan", 
              price: "9 000 FCFA",
              description: "Salade verte, blanc de poulet grillé, parmesan, crouton de pain"
            },
            { 
              id: "entree-froide-3", 
              name: "Carpaccio de Poulpe", 
              price: "6 000 FCFA"
            },
            { 
              id: "entree-froide-4", 
              name: "Salade Grecque", 
              price: "8 000 FCFA",
              description: "Salade verte, tomate, concombre, olives noires, feta, oignons"
            },
            { 
              id: "entree-froide-5", 
              name: "Bressaola de Bœuf", 
              price: "10 000 FCFA",
              description: "Fines tranches de bœuf assaisonnées, mozzarella fraîche & avocat"
            },
            { 
              id: "entree-froide-6", 
              name: "Carpaccio de Menou aux Baies de Roses", 
              price: "7 500 FCFA"
            },
            { 
              id: "entree-froide-7", 
              name: "Carpaccio de Bœuf", 
              price: "7 000 FCFA",
              description: "Rocquette et parmesan"
            },
            { 
              id: "entree-froide-8", 
              name: "Salade de Poulpe à l'Italienne", 
              price: "6 000 FCFA",
              description: "Aux pommes vapeur"
            },
            { 
              id: "entree-froide-9", 
              name: "Salade de Fruits de Mer", 
              price: "Prix sur demande"
            },
            { 
              id: "entree-froide-10", 
              name: "Salade d'Avocats & Crevettes", 
              price: "Prix sur demande"
            },
            { 
              id: "entree-froide-11", 
              name: "Salade Caprese", 
              price: "Prix sur demande",
              description: "Mozzarella fraîche, tomates, basilic et pesto"
            },
            { 
              id: "entree-froide-12", 
              name: "Poisson à la Tahitienne", 
              price: "Prix sur demande",
              description: "Thon rouge, lait de coco, carotte, concombre, ciboulette, oignon"
            },
            { 
              id: "entree-froide-13", 
              name: "Antipasto Italien", 
              price: "Prix sur demande",
              description: "Assiette composée de charcuteries & fromages italiens"
            }
          ]
        },
        {
          name: "Entrées Chaudes",
          items: [
            { 
              id: "entree-chaude-1", 
              name: "Mozzarella Dorée", 
              price: "8 000 FCFA",
              description: "Rondelles de mozzarella fraîche panées & frites"
            },
            { 
              id: "entree-chaude-2", 
              name: "Sèche en Persillade", 
              price: "7 000 FCFA"
            },
            { 
              id: "entree-chaude-3", 
              name: "Bricks de Viande", 
              price: "6 500 FCFA",
              description: "Feuilletés frits farcis à la viande hachée & fromage"
            },
            { 
              id: "entree-chaude-4", 
              name: "Bricks au Poulet", 
              price: "6 500 FCFA",
              description: "Feuilletés frits farcis au poulet & fromage"
            },
            { 
              id: "entree-chaude-5", 
              name: "Ailes de Poulet", 
              price: "6 000 FCFA"
            },
            { 
              id: "entree-chaude-6", 
              name: "Gambas Croustillants", 
              price: "11 000 FCFA"
            }
          ]
        }
      ]
    },
    {
      category: "PASTA",
      items: [
        {
          id: "pasta-1",
          name: "Tagliatelles à la Sauce Tomate",
          price: "7 000 FCFA",
          description: "Sauce tomate, parmesan"
        },
        {
          id: "pasta-2",
          name: "Spaghetti à la Sauce Bolognaise",
          price: "8 000 FCFA",
          description: "Sauce tomate, viande hachée, parmesan"
        },
        {
          id: "pasta-3",
          name: "Penne all'Arrabbiata",
          price: "7 000 FCFA",
          description: "Sauce tomate, piment, persil, ail, pecorino"
        },
        {
          id: "pasta-4",
          name: "Tagliatelle à la Crème Champignon et Poulet",
          price: "9 500 FCFA"
        },
        {
          id: "pasta-5",
          name: "Tagliatelle au Saumon et Poire",
          price: "12 000 FCFA",
          description: "Crème fraîche, saumon fumé, poire"
        },
        {
          id: "pasta-6",
          name: "Tagliatelle à la Langouste et aux Tomates Cerises",
          price: "14 000 FCFA"
        },
        {
          id: "pasta-7",
          name: "Linguine à la Sauce Pesto",
          price: "9 000 FCFA"
        },
        {
          id: "pasta-8",
          name: "Linguine aux Fruits de Mer",
          price: "11 000 FCFA"
        },
        {
          id: "pasta-9",
          name: "Spaghetti à la Carbonara",
          price: "8 500 FCFA"
        },
        {
          id: "pasta-10",
          name: "Lasagne Bolognaise au Four (45 min)",
          price: "9 500 FCFA"
        },
        {
          id: "pasta-11",
          name: "Gnocchi de Pomme de Terre",
          price: "9 000 FCFA",
          description: "Au pesto ou sauté avec du beurre et de la sauge, ou aux fromages, ou à la sauce tomate"
        },
        {
          id: "pasta-12",
          name: "Ravioli Farci à la Ricotta et aux Épinards",
          price: "11 000 FCFA",
          description: "Servis soit avec une sauce tomate, soit sautés avec du beurre et de la sauge"
        }
      ]
    },
    {
      category: "PIZZAS",
      subcategories: [
        {
          name: "Base Tomate",
          items: [
            {
              id: "pizza-tomate-1",
              name: "Margherita",
              price: "6 500 FCFA",
              description: "Tomate, mozzarella, basilic"
            },
            {
              id: "pizza-tomate-2",
              name: "Napoletana",
              price: "7 500 FCFA",
              description: "Tomate, mozzarella, anchois, origan"
            },
            {
              id: "pizza-tomate-3",
              name: "Ortolana",
              price: "8 000 FCFA",
              description: "Tomate, aubergine, courgette, poivrons, mozzarella"
            },
            {
              id: "pizza-tomate-4",
              name: "Gambeni",
              price: "8 000 FCFA",
              description: "Sauce tomate, laitue, roquette, avocat, crevettes"
            },
            {
              id: "pizza-tomate-5",
              name: "Pollo",
              price: "8 500 FCFA",
              description: "Sauce tomate, mozzarella, poulet fumé, poivron"
            },
            {
              id: "pizza-tomate-6",
              name: "Parmigiana",
              price: "8 500 FCFA",
              description: "Sauce tomate, aubergine grillée, mozzarella, parmesan"
            },
            {
              id: "pizza-tomate-7",
              name: "Diavola",
              price: "8 500 FCFA",
              description: "Sauce tomate, mozzarella, salami piquant (porc), piment"
            },
            {
              id: "pizza-tomate-8",
              name: "Menguèz",
              price: "8 000 FCFA",
              description: "Sauce tomate, mozzarella, merguez de bœuf"
            },
            {
              id: "pizza-tomate-9",
              name: "Frutti di Mare",
              price: "9 500 FCFA",
              description: "Sauce tomate, mozzarella, fruits de mer"
            },
            {
              id: "pizza-tomate-10",
              name: "Amarliciana",
              price: "9 000 FCFA",
              description: "Sauce tomate, mozzarella, lardons (porc), oignon, pecorino, piment"
            },
            {
              id: "pizza-tomate-11",
              name: "Pesante",
              price: "8 500 FCFA",
              description: "Sauce tomate, mozzarella, poivrons, viande hachée, oignons"
            },
            {
              id: "pizza-tomate-12",
              name: "Caprese",
              price: "10 000 FCFA",
              description: "Tomate cerise, mozzarella fraîche, basilic"
            },
            {
              id: "pizza-tomate-13",
              name: "Asalumi",
              price: "10 000 FCFA",
              description: "Sauce tomate, mozzarella, saucisson, saucisson de Strasbourg, jambon, salami piquant"
            },
            {
              id: "pizza-tomate-14",
              name: "Capnicciosa",
              price: "9 500 FCFA",
              description: "Mozzarella, champignon, jambon (bœuf ou porc), olives noires, artichaut (cœur à la demande)"
            },
            {
              id: "pizza-tomate-15",
              name: "Champignons",
              price: "8 500 FCFA",
              description: "Sauce tomate, mozzarella, champignons sautés à l'ail"
            },
            {
              id: "pizza-tomate-16",
              name: "Regina",
              price: "9 000 FCFA",
              description: "Sauce tomate, mozzarella, champignon, jambon (porc ou bœuf)"
            },
            {
              id: "pizza-tomate-17",
              name: "Tonno",
              price: "8 000 FCFA",
              description: "Sauce tomate, thon, oignons, olives noires"
            },
            {
              id: "pizza-tomate-18",
              name: "Montagnarde",
              price: "8 500 FCFA",
              description: "Sauce tomate, mozzarella, champignons, saucisson (porc)"
            },
            {
              id: "pizza-tomate-19",
              name: "Proschuitto",
              price: "10 000 FCFA",
              description: "Sauce tomate, mozzarella, jambon de parme, roquette"
            }
          ]
        },
        {
          name: "Base Crème / Purée de Pommes de Terre",
          items: [
            {
              id: "pizza-creme-1",
              name: "Merguez",
              price: "7 500 FCFA",
              description: "Purée, mozzarella, merguez"
            },
            {
              id: "pizza-creme-2",
              name: "Salsiccia",
              price: "8 000 FCFA",
              description: "Purée de pommes de terre, mozzarella, brocolis, saucisson"
            },
            {
              id: "pizza-creme-3",
              name: "Zucchini",
              price: "8 000 FCFA",
              description: "Purée de pommes de terre, courgettes, tomates cerises, mozzarella"
            },
            {
              id: "pizza-creme-4",
              name: "Courgettes et Anchois",
              price: "7 500 FCFA",
              description: "Purée de pommes de terre, courgettes, anchois, mozzarella"
            },
            {
              id: "pizza-creme-5",
              name: "Courgettes et Crevettes",
              price: "9 500 FCFA",
              description: "Purée de pommes de terre, courgettes, crevettes, mozzarella"
            },
            {
              id: "pizza-creme-6",
              name: "4 Formaggi",
              price: "9 500 FCFA",
              description: "Mozzarella, fontina, gorgonzola, autre fromage italien"
            },
            {
              id: "pizza-creme-7",
              name: "Pesto",
              price: "8 500 FCFA",
              description: "Purée de pommes de terre, mozzarella, pesto, tomates cerises"
            },
            {
              id: "pizza-creme-8",
              name: "Salmone",
              price: "10 000 FCFA",
              description: "Mozzarella, crème fraîche, saumon, roquette (à la demande)"
            },
            {
              id: "pizza-creme-9",
              name: "Carbonana",
              price: "9 000 FCFA",
              description: "Mozzarella, crème fraîche, lardons (porc), œuf, pecorino, parmesan"
            },
            {
              id: "pizza-creme-10",
              name: "Vegetariana",
              price: "8 000 FCFA",
              description: "Mozzarella, purée de pommes de terre, champignons, aubergine, courgette, tomate cerise"
            },
            {
              id: "pizza-creme-11",
              name: "Parme",
              price: "10 000 FCFA",
              description: "Mozzarella, jambon de Parme, roquette"
            },
            {
              id: "pizza-creme-12",
              name: "Tantufo",
              price: "10 000 FCFA",
              description: "Crème fraîche, mozzarella, champignons sautés à l'ail, huile de truffes, roquette"
            },
            {
              id: "pizza-creme-13",
              name: "Golosa",
              price: "9 500 FCFA",
              description: "Mozzarella, crème fraîche, jambon (porc ou bœuf), roquette"
            }
          ]
        }
      ]
    },
    {
      category: "VIANDES",
      items: [
        {
          id: "viande-1",
          name: "Filet de Bœuf Local (200/250g)",
          price: "13 000 FCFA",
          description: "Steak de viande assaisonné et grillé à la plancha, servi avec une sauce au choix"
        },
        {
          id: "viande-2",
          name: "Filet de Bœuf Importé (200/250g)",
          price: "16 000 FCFA",
          description: "Steak de viande assaisonné et grillé à la plancha, servi avec une sauce au choix"
        },
        {
          id: "viande-3",
          name: "Entrecôte de Bœuf Importée (250/300g)",
          price: "18 000 FCFA",
          description: "Entrecôte grillée à la plancha servie avec des oignons confits et sauce à la moutarde"
        },
        {
          id: "viande-4",
          name: "Grillade Mixte de Viande",
          price: "15 000 FCFA",
          description: "Assiette composée (Filet de bœuf, cuisse de poulet, côtelette d'agneau et merguez)"
        },
        {
          id: "viande-5",
          name: "Souris d'Agneau",
          price: "18 000 FCFA",
          description: "Bas de gigot aromatisé au vin blanc et romarin, rôti au four à basse température"
        },
        {
          id: "viande-6",
          name: "Osso Buco à la Milanaise",
          price: "13 000 FCFA",
          description: "Ragout de tronçons de jarrets de veau braisés au vin blanc sec, agrémenté de légumes"
        },
        {
          id: "viande-7",
          name: "Brochette de Bœuf",
          price: "13 000 FCFA",
          description: "Une brochette de viande composée de morceaux de viande, agrémentée d'échalote, poivrons et tomates cerises"
        },
        {
          id: "viande-8",
          name: "Travers de Porc Importé",
          price: "15 000 FCFA",
          description: "Des ribs de porc marinés et grillés au four"
        },
        {
          id: "viande-9",
          name: "Émincé de Bœuf aux Légumes",
          price: "13 000 FCFA",
          description: "Filets de bœuf en lanières sautés aux légumes (oignons, carottes, poivron vert, courgette, haricots verts, ail, tomate, champignons) parfumés à la coriandre"
        },
        {
          id: "viande-10",
          name: "Involtini di Vitello",
          price: "15 000 FCFA",
          description: "Roulé d'escalope de veau farci aux champignons et mozzarella, servi avec une sauce crémeuse"
        },
        {
          id: "viande-11",
          name: "Côte d'Agneau",
          price: "16 000 FCFA",
          description: "Côtelettes d'agneau grillées à la plancha, servies avec une sauce à l'ail et au basilic"
        },
        {
          id: "viande-12",
          name: "Saltimbocca à la Romaine",
          price: "14 500 FCFA",
          description: "Ragout de tronçons de jarrets de veau braisés au vin blanc sec, agrémenté de légumes"
        }
      ]
    },
    {
      category: "MARDOUMA",
      items: [
        {
          id: "mardouma-1",
          name: "Mardouma Mixte",
          price: "18 000 FCFA",
          description: "Assortiment de viandes grillées (mélange de différentes viandes)"
        },
        {
          id: "mardouma-2",
          name: "Gigot d'Agneau",
          price: "15 000 FCFA",
          description: "Gigot d'agneau rôti"
        },
        {
          id: "mardouma-3",
          name: "Côte d'Agneau",
          price: "15 000 FCFA",
          description: "Côtelette d'agneau grillée"
        },
        {
          id: "mardouma-4",
          name: "Côte d'Agneau Farcie",
          price: "16 000 FCFA",
          description: "Côtelette d'agneau farcie (aux herbes ou autres garnitures)"
        },
        {
          id: "mardouma-5",
          name: "Mardouma Poulet",
          price: "10 000 FCFA",
          description: "Poulet mariné et grillé"
        },
        {
          id: "mardouma-6",
          name: "Côte de Bœuf",
          price: "13 000 FCFA",
          description: "Entrecôte de bœuf grillée"
        },
        {
          id: "mardouma-7",
          name: "Travers de Porc",
          price: "12 000 FCFA",
          description: "Ribs de porc grillés"
        },
        {
          id: "mardouma-8",
          name: "Jarret de Porc",
          price: "12 000 FCFA",
          description: "Jarret de porc braisé ou rôti"
        },
        {
          id: "mardouma-9",
          name: "Mardouma Poulet Complet",
          price: "15 000 FCFA",
          description: "Portion complète de poulet mariné et grillé"
        },
        {
          id: "mardouma-10",
          name: "Gigot d'Agneau Complet",
          price: "50 000 FCFA",
          description: "Gigot d'agneau entier rôti"
        },
        {
          id: "mardouma-11",
          name: "Côte d'Agneau Farcie Complète",
          price: "55 000 FCFA",
          description: "Côtelette d'agneau farcie en portion entière"
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <ChefHat className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-5xl font-serif mb-4">La Carte</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Une sélection de plats traditionnels italiens, préparés avec les meilleurs ingrédients
            </p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-zinc-800 p-1">
            {menuItems.map((section) => (
              <button
                key={section.category}
                onClick={() => setActiveTab(section.category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === section.category
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {menuItems.map((section) => (
            <div
              key={section.category}
              className={`transition-opacity duration-300 ${
                activeTab === section.category ? 'block' : 'hidden'
              }`}
            >
              {section.subcategories ? (
                section.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="mb-16 last:mb-0">
                    <h3 className="text-2xl font-serif text-amber-500 mb-8">{subcategory.name}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {subcategory.items.map((item) => (
                        <div 
                          key={item.id} 
                          className="group p-4 border border-zinc-800 hover:border-white transition-colors rounded-lg"
                        >
                          <div className="flex justify-between items-start gap-6">
                            <div className="flex-1">
                              <div className="flex items-baseline justify-between mb-1">
                                <h3 className="text-base font-medium tracking-wide group-hover:text-amber-500 transition-colors">
                                  {item.name}
                                </h3>
                                <span className="text-sm font-light whitespace-nowrap text-amber-500">
                                  {item.price}
                                </span>
                              </div>
                              {item.description && (
                                <p className="text-xs text-gray-400 mt-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item) => (
                    <div 
                      key={item.id} 
                      className="group p-4 border border-zinc-800 hover:border-white transition-colors rounded-lg"
                    >
                      <div className="flex justify-between items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between mb-1">
                            <h3 className="text-base font-medium tracking-wide group-hover:text-amber-500 transition-colors">
                              {item.name}
                            </h3>
                            <span className="text-sm font-light whitespace-nowrap text-amber-500">
                              {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-400 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;