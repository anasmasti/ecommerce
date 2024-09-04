import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../types/Product.type';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  imports: [CurrencyPipe, RouterModule],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();

  addToCart(product: Product) {
    this.onAddToCart.emit(product);
  }
}
