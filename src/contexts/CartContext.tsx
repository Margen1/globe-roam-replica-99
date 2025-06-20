
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, eSIMPlan } from '../types';
import { esimPlans } from '../data/countries';

interface CartContextType {
  items: CartItem[];
  addItem: (planId: string) => void;
  removeItem: (planId: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (planId: string) => {
    const plan = esimPlans.find(p => p.id === planId);
    if (!plan) return;

    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.planId === planId);
      if (existingItem) {
        return currentItems.map(item =>
          item.planId === planId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { planId, plan, quantity: 1 }];
    });
  };

  const removeItem = (planId: string) => {
    setItems(currentItems => currentItems.filter(item => item.planId !== planId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + (item.plan.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};
