
import React from 'react';
import { ShoppingCart, Download, Smartphone, Wifi } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Choose Your Plan',
      description: 'Browse and select the perfect eSIM plan for your destination',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Download,
      title: 'Download eSIM',
      description: 'Receive your eSIM QR code instantly via email after purchase',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Smartphone,
      title: 'Scan & Install',
      description: 'Scan the QR code with your phone to install the eSIM profile',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Wifi,
      title: 'Get Connected',
      description: 'Activate your plan and enjoy seamless connectivity worldwide',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get connected in just 4 simple steps. It's that easy!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="text-white" size={32} />
                </div>
                
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-400 mb-2">STEP {index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compatible with Most Devices
            </h3>
            <p className="text-gray-600 mb-6">
              Works with iPhone XS/XR and newer, Google Pixel 3 and newer, Samsung Galaxy S20 and newer, and many more eSIM-compatible devices.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Check Device Compatibility
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
