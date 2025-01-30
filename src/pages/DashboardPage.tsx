import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  MessageCircle, 
  User, 
  LogOut,
  Home,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

// Dashboard Components
const Profile = () => {
  const [profile, setProfile] = useState<any>(null);
  const { user } = useAuth();

  useEffect(() => {
    const getProfile = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        toast.error('Erreur lors du chargement du profil');
        return;
      }

      setProfile(data);
    };

    getProfile();
  }, [user]);

  if (!profile) return <div>Chargement...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif">Mon Profil</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
            <p className="mt-1 text-gray-900">{profile.full_name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-gray-900">{profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const getOrders = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        toast.error('Erreur lors du chargement des commandes');
        return;
      }

      setOrders(data || []);
    };

    getOrders();
  }, [user]);

  const reorderItems = async (items: any[]) => {
    // Implementation for reordering items
    toast.success('Commande ajoutée au panier');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif">Mes Commandes</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">
                  Commande du {new Date(order.created_at).toLocaleDateString()}
                </p>
                <p className="font-medium">{order.total_amount} FCFA</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'completed' ? 'bg-green-100 text-green-800' :
                order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {order.status}
              </span>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Articles</h4>
              <ul className="space-y-2">
                {order.order_items.map((item: any) => (
                  <li key={item.id} className="flex justify-between text-sm">
                    <span>{item.item_name} x{item.quantity}</span>
                    <span>{item.price} FCFA</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => reorderItems(order.order_items)}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium"
              >
                Commander à nouveau
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Complaints = () => {
  const [complaints, setComplaints] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const getComplaints = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('complaints')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        toast.error('Erreur lors du chargement des réclamations');
        return;
      }

      setComplaints(data || []);
    };

    getComplaints();
  }, [user]);

  const [newComplaint, setNewComplaint] = useState({
    subject: '',
    description: '',
    order_id: ''
  });

  const submitComplaint = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const { error } = await supabase
      .from('complaints')
      .insert([
        {
          ...newComplaint,
          user_id: user.id
        }
      ]);

    if (error) {
      toast.error('Erreur lors de la création de la réclamation');
      return;
    }

    toast.success('Réclamation envoyée avec succès');
    setNewComplaint({ subject: '', description: '', order_id: '' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif">Mes Réclamations</h2>
      
      {/* New Complaint Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Nouvelle Réclamation</h3>
        <form onSubmit={submitComplaint} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sujet</label>
            <input
              type="text"
              value={newComplaint.subject}
              onChange={(e) => setNewComplaint({ ...newComplaint, subject: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={newComplaint.description}
              onChange={(e) => setNewComplaint({ ...newComplaint, description: e.target.value })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-medium">{complaint.subject}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(complaint.created_at).toLocaleDateString()}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                complaint.status === 'resolved' ? 'bg-green-100 text-green-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {complaint.status}
              </span>
            </div>
            <p className="text-gray-700">{complaint.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const location = useLocation();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/ login');
      toast.success('Déconnexion réussie');
    } catch (error) {
      toast.error('Erreur lors de la déconnexion');
    }
  };

  const navigation = [
    { name: 'Tableau de bord', path: '/dashboard', icon: Home },
    { name: 'Commandes', path: '/dashboard/orders', icon: ShoppingBag },
    { name: 'Réclamations', path: '/dashboard/complaints', icon: MessageCircle },
    { name: 'Profil', path: '/dashboard/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen shadow-sm">
          <div className="p-6">
            <h1 className="text-2xl font-serif">Mon Compte</h1>
          </div>
          <nav className="mt-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-600 border-r-4 border-amber-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Déconnexion
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <ShoppingBag className="h-8 w-8 text-amber-600" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Commandes</p>
                      <h3 className="text-xl font-medium">Voir l'historique</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-amber-600" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">En cours</p>
                      <h3 className="text-xl font-medium">Suivi commande</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <AlertCircle className="h-8 w-8 text-amber-600" />
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Support</p>
                      <h3 className="text-xl font-medium">Réclamations</h3>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/orders" element={<Orders />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;