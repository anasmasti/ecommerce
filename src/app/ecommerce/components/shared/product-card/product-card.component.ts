import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types/Product';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();

  addToCart(product: Product) {
    this.onAddToCart.emit(product);
  }
}
