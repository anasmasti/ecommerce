import { Component, Input } from '@angular/core';
import { Product } from '../../../types/Product';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
