
export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: string;
  popular: boolean;
}

export interface eSIMPlan {
  id: string;
  countryCode: string;
  name: string;
  data: string;
  validity: string;
  price: number;
  operator: string;
  coverage: string;
  features: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  planId: string;
  status: 'pending' | 'completed' | 'active' | 'expired';
  purchaseDate: string;
  activationCode?: string;
  qrCode?: string;
}

export interface CartItem {
  planId: string;
  plan: eSIMPlan;
  quantity: number;
}
