import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../../shared/types/Product.type';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  imports: [CurrencyPipe, RouterLink],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();

  addToCart(product: Product) {
    this.onAddToCart.emit(product);
  }
}
