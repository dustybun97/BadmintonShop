export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image_url: string;
  stock: number;
  created_at: string;
  category_id: number;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  specifications?: Record<string, string>;
};
