
import { Country, eSIMPlan } from '../types';

export const countries: Country[] = [
  {
    id: 'albania',
    name: 'Albania',
    code: 'AL',
    flag: '🇦🇱',
    region: 'Europe',
    popular: false
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    region: 'North America',
    popular: true
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    region: 'Europe',
    popular: true
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    region: 'Europe',
    popular: true
  },
  {
    id: 'italy',
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    region: 'Europe',
    popular: true
  },
  {
    id: 'spain',
    name: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    region: 'Europe',
    popular: true
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    region: 'Europe',
    popular: true
  },
  {
    id: 'japan',
    name: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    region: 'Asia',
    popular: true
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    region: 'Oceania',
    popular: true
  },
  {
    id: 'turkey',
    name: 'Turkey',
    code: 'TR',
    flag: '🇹🇷',
    region: 'Asia',
    popular: false
  }
];

export const esimPlans: eSIMPlan[] = [
  // USA Plans
  {
    id: 'usa-1gb-7d',
    countryCode: 'US',
    name: '1GB - 7 Days',
    data: '1GB',
    validity: '7 days',
    price: 4.50,
    operator: 'T-Mobile',
    coverage: 'Nationwide',
    features: ['4G/5G Speed', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'usa-5gb-30d',
    countryCode: 'US',
    name: '5GB - 30 Days',
    data: '5GB',
    validity: '30 days',
    price: 18.00,
    operator: 'T-Mobile',
    coverage: 'Nationwide',
    features: ['4G/5G Speed', 'Instant activation', 'Keep your WhatsApp number']
  },
  // France Plans
  {
    id: 'france-1gb-7d',
    countryCode: 'FR',
    name: '1GB - 7 Days',
    data: '1GB',
    validity: '7 days',
    price: 5.00,
    operator: 'Orange',
    coverage: 'France + EU roaming',
    features: ['4G/5G Speed', 'EU roaming included', 'Instant activation']
  },
  {
    id: 'france-3gb-30d',
    countryCode: 'FR',
    name: '3GB - 30 Days',
    data: '3GB',
    validity: '30 days',
    price: 12.00,
    operator: 'Orange',
    coverage: 'France + EU roaming',
    features: ['4G/5G Speed', 'EU roaming included', 'Instant activation']
  },
  // Albania Plans
  {
    id: 'albania-1gb-7d',
    countryCode: 'AL',
    name: '1GB - 7 Days',
    data: '1GB',
    validity: '7 days',
    price: 8.00,
    operator: 'Vodafone',
    coverage: 'Albania',
    features: ['4G Speed', 'Instant activation', 'Local number available']
  },
  {
    id: 'albania-5gb-30d',
    countryCode: 'AL',
    name: '5GB - 30 Days',
    data: '5GB',
    validity: '30 days',
    price: 25.00,
    operator: 'Vodafone',
    coverage: 'Albania',
    features: ['4G Speed', 'Instant activation', 'Local number available']
  }
];
