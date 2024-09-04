import { Product } from './Product.type';

export interface CartItem {
  product: Product;
  quantity: number;
}
