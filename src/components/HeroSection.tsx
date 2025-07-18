
import React, { useState } from 'react';
import { Search, Globe, Wifi, Shield } from 'lucide-react';
import { countries } from '../data/countries';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Stay Connected
            <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Anywhere in the World
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Get instant mobile data with our global eSIM plans. No physical SIM cards, 
            no roaming fees, no hassle. Connect in 200+ destinations worldwide.
          </p>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for a destination..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Find eSIMs
                </button>
              </div>

              {/* Quick Search Results */}
              {searchTerm && (
                <div className="mt-4 max-h-40 overflow-y-auto">
                  {filteredCountries.slice(0, 5).map((country) => (
                    <button
                      key={country.id}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg flex items-center"
                      onClick={() => {
                        setSelectedCountry(country.id);
                        setSearchTerm(country.name);
                      }}
                    >
                      <span className="text-2xl mr-3">{country.flag}</span>
                      <span>{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Special Offers Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Ofertat e Momentit
            </h2>
            
            <Tabs defaultValue="local" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white shadow-md">
                <TabsTrigger value="local" className="text-lg font-medium">
                  Local eSIM
                </TabsTrigger>
                <TabsTrigger value="regional" className="text-lg font-medium">
                  Regional eSIM
                </TabsTrigger>
                <TabsTrigger value="global" className="text-lg font-medium">
                  Global eSIM
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="local" className="mt-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🇺🇸</span>
                        <h3 className="font-semibold">USA Local</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">5GB - 30 days</p>
                      <p className="text-lg font-bold text-blue-600">$25</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🇬🇧</span>
                        <h3 className="font-semibold">UK Local</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">3GB - 15 days</p>
                      <p className="text-lg font-bold text-blue-600">$18</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🇫🇷</span>
                        <h3 className="font-semibold">France Local</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">2GB - 14 days</p>
                      <p className="text-lg font-bold text-blue-600">$15</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="regional" className="mt-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🇪🇺</span>
                        <h3 className="font-semibold">Europe Regional</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">10GB - 30 days</p>
                      <p className="text-lg font-bold text-blue-600">$45</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🌏</span>
                        <h3 className="font-semibold">Asia Regional</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">5GB - 21 days</p>
                      <p className="text-lg font-bold text-blue-600">$35</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🌎</span>
                        <h3 className="font-semibold">Americas Regional</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">8GB - 28 days</p>
                      <p className="text-lg font-bold text-blue-600">$40</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="global" className="mt-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🌍</span>
                        <h3 className="font-semibold">Global Starter</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">1GB - 7 days</p>
                      <p className="text-lg font-bold text-blue-600">$12</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🌍</span>
                        <h3 className="font-semibold">Global Traveler</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">5GB - 30 days</p>
                      <p className="text-lg font-bold text-blue-600">$55</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🌍</span>
                        <h3 className="font-semibold">Global Pro</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">15GB - 60 days</p>
                      <p className="text-lg font-bold text-blue-600">$99</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">200+ Destinations</h3>
              <p className="text-gray-600">Connect in over 200 countries and regions worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Activation</h3>
              <p className="text-gray-600">Get connected immediately after purchase with QR code</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Premium network operators for reliable connectivity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
