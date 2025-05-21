export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  featured: boolean;
  stock: number;
  rating: number;
  reviewCount: number;
  specifications: Record<string, string>;
};