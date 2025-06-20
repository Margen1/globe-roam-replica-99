
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { countries, esimPlans } from '../data/countries';
import { useCart } from '../contexts/CartContext';

const PopularDestinations = () => {
  const { addItem } = useCart();
  const popularCountries = countries.filter(country => country.popular);

  const getCountryPlans = (countryCode: string) => {
    return esimPlans.filter(plan => plan.countryCode === countryCode);
  };

  const getStartingPrice = (countryCode: string) => {
    const plans = getCountryPlans(countryCode);
    return plans.length > 0 ? Math.min(...plans.map(plan => plan.price)) : 0;
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular eSIM plans for travelers around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCountries.map((country) => {
            const plans = getCountryPlans(country.code);
            const startingPrice = getStartingPrice(country.code);
            
            return (
              <div
                key={country.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-4xl mr-3">{country.flag}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                        <p className="text-sm text-gray-500">{country.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm text-gray-600 ml-1">Popular</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plans.slice(0, 2).map((plan) => (
                      <div key={plan.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{plan.data}</p>
                          <p className="text-sm text-gray-600">{plan.validity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">${plan.price}</p>
                          <button
                            onClick={() => addItem(plan.id)}
                            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600">${startingPrice}</p>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                      View all plans
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 font-medium text-lg">
            Browse All Destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
