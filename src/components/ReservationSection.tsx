import React, { useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User } from 'lucide-react';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Le nom est requis' : '';
      case 'phone':
        return !/^\+?[0-9]{8,}$/.test(value) ? 'Numéro de téléphone invalide' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email invalide' : '';
      case 'date':
        return !value ? 'La date est requise' : '';
      case 'time':
        return !value ? "L'heure est requise" : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Réservation soumise:', formData);
  };

  return (
    <section id="reservation" className="relative py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-lg mb-4 block tracking-wider">RÉSERVATION</span>
          <h2 className="text-5xl font-serif text-white mb-6">Réservez Votre Table</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pour une expérience gastronomique inoubliable dans un cadre exceptionnel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-sm p-12 rounded-lg border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nom */}
              <div className="space-y-2">
                <label className="block text-sm text-white/80 uppercase tracking-wider">Nom</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white pl-12 pr-4 py-4 focus:outline-none focus:border-amber-500 transition-colors rounded-none`}
                    placeholder="Votre nom"
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                </div>
              </div>

              {/* Téléphone */}
              <div className="space-y-2">
                <label className="block text-sm text-white/80 uppercase tracking-wider">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-white/20'} text-white pl-12 pr-4 py-4 focus:outline-none focus:border-amber-500 transition-colors rounded-none`}
                    placeholder="Votre numéro"
                  />
                  {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm text-white/80 uppercase tracking-wider">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white pl-12 pr-4 py-4 focus:outline-none focus:border-amber-500 transition-colors rounded-none`}
                    placeholder="Votre email"
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="block text-sm text-white/80 uppercase tracking-wider">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.date ? 'border-red-500' : 'border-white/20'} text-white pl-12 pr-4 py-4 focus:outline-none focus:border-amber-500 transition-colors rounded-none`}
                  />
                  {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
                </div>
              </div>

              {/* Heure */}
              <div className="space-y-2">
                <label className="block text-sm text-white/80 uppercase tracking-wider">Heure</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.time ? 'border-red-500' : 'border-white/20'} text-white pl-12 pr-4 py-4 focus:outline-none focus:border-amber-500 transition-colors rounded-none appearance-none`}
                  >
                    <option value="">Sélectionnez une heure</option>
                    {['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.time && <p className="mt-1 text-red-500 text-sm">{errors.time}</p>}
                </div>
              </div>

              {/* Nombre de personnes */}
              <div className="space-y-2">
                <label className="block text-sm text-white/80 uppercase tracking-wider">Nombre de personnes</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-amber-500 transition-colors rounded-none appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8,10,12].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'personne' : 'personnes'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                type="submit"
                className="bg-amber-600 text-white px-12 py-4 text-lg font-medium hover:bg-amber-700 transition-colors inline-flex items-center gap-2"
              >
                Réserver maintenant
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;