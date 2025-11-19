export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  steps: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'car-keys' | 'remote' | 'housing' | 'accessory';
  price: number;
  image: string;
  popularity: number;
  description: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: object;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}