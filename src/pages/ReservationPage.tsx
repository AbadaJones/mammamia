import React, { useState } from 'react';
import { Calendar, Clock, Users, Mail, User } from 'lucide-react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Réservation soumise:', formData);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-7xl font-serif mb-6">Réservation</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Réservez votre table pour une soirée inoubliable
            </p>
          </div>
        </div>
      </div>

      {/* Reservation Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <label className="block text-sm uppercase tracking-wider mb-4">Nom</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-zinc-800 pl-12 pr-4 py-4 focus:border-white transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm uppercase tracking-wider mb-4">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-zinc-800 pl-12 pr-4 py-4 focus:border-white transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider mb-4">Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  required
                  className="w-full bg-transparent border border-zinc-800 pl-12 pr-4 py-4 focus:border-white transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider mb-4">Heure</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  className="w-full bg-transparent border border-zinc-800 pl-12 pr-4 py-4 focus:border-white transition-colors appearance-none"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                >
                  <option value="" className="bg-black">Sélectionnez une heure</option>
                  {['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(time => (
                    <option key={time} value={time} className="bg-black">{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm uppercase tracking-wider mb-4">Nombre de personnes</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  className="w-full bg-transparent border border-zinc-800 pl-12 pr-4 py-4 focus:border-white transition-colors appearance-none"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1,2,3,4,5,6,7,8,10,12].map(num => (
                    <option key={num} value={num} className="bg-black">
                      {num} {num === 1 ? 'personne' : 'personnes'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-12 py-4 text-lg tracking-wider"
            >
              CONFIRMER LA RÉSERVATION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;