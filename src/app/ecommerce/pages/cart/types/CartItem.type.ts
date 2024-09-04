import { Product } from '../../../shared/types/Product.type';

export interface CartItem {
  product: Product;
  quantity: number;
}
