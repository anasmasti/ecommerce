import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { Product } from '../../types/Product';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [ProductCardComponent],
})
export class ProductListComponent {
  @Input() products!: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();

  /**
   * Emits an event to add a product to the cart by its ID.
   *
   * @param {Product} product - The ID of the product to add to the cart.
   */
  addToCart(product: Product) {
    this.onAddToCart.emit(product);
  }
}
