import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../types/Product';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  imports: [CurrencyPipe],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();

  addToCart(product: Product) {
    this.onAddToCart.emit(product);
  }
}
