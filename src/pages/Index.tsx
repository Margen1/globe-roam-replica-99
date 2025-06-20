
import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PopularDestinations from '../components/PopularDestinations';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <HeroSection />
            <PopularDestinations />
            <HowItWorks />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default Index;
