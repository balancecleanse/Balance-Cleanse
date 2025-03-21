export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  benefits: string[];
  ingredients: string[];
  instructions: string;
  size: string;
  inStock: boolean;
  rating: number;
  reviews: ProductReview[];
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
