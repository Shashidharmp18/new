import React, { useState } from 'react';
import { Watch, Mail, Calendar, User } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    watchBrand: '',
    watchModel: '',
    fullName: '',
    email: '',
    watchCount: '',
    deliveryDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <a href="#" className="hover:text-gray-300">home</a>
              <a href="#" className="hover:text-gray-300">about</a>
              <a href="#" className="hover:text-gray-300">contact</a>
              <a href="#" className="hover:text-gray-300">Services</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Watch Shopping Experience</h1>
          
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-[150px_1fr] items-center">
              <label className="text-gray-700">Select Watch Brand</label>
              <select 
                className="form-select rounded-md border-gray-300 shadow-sm"
                value={formData.watchBrand}
                onChange={(e) => setFormData({...formData, watchBrand: e.target.value})}
              >
                <option value="">Select Brand</option>
                <option value="Casio">Casio</option>
                <option value="Seiko">Seiko</option>
                <option value="Citizen">Citizen</option>
              </select>
            </div>

            <div className="grid grid-cols-[150px_1fr] items-center">
              <label className="text-gray-700">Select Watch</label>
              <select 
                className="form-select rounded-md border-gray-300 shadow-sm"
                value={formData.watchModel}
                onChange={(e) => setFormData({...formData, watchModel: e.target.value})}
              >
                <option value="">Select Model</option>
                <option value="WT-1202">Casio WT-1202</option>
                <option value="WT-1203">Casio WT-1203</option>
              </select>
            </div>

            <div className="grid grid-cols-[150px_1fr] items-center">
              <label className="text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  className="form-input pl-10 w-full rounded-md border-gray-300 shadow-sm"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-[150px_1fr] items-center">
              <label className="text-gray-700">User Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  className="form-input pl-10 w-full rounded-md border-gray-300 shadow-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-[150px_1fr] items-center">
              <label className="text-gray-700">Watch Count</label>
              <div className="relative">
                <Watch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  className="form-input pl-10 w-full rounded-md border-gray-300 shadow-sm"
                  value={formData.watchCount}
                  onChange={(e) => setFormData({...formData, watchCount: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-[150px_1fr] items-center">
              <label className="text-gray-700">Delivery Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  className="form-input pl-10 w-full rounded-md border-gray-300 shadow-sm"
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Footer Content */}
        <div className="mt-10 grid grid-cols-3 gap-8 pb-10">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">About Us!</h2>
            <p className="text-gray-600">
              We are leading watch delivery service provider, we also provide all kind of services
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Contact Us!</h2>
            <p className="text-gray-600">
              #09 Full Address<br />
              of our office
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">We Also provide</h2>
            <p className="text-gray-600">
              Watch Shopping<br />
              Watch Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;