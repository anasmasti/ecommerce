import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/types/Product.type';
import { CartService } from '../cart/data-access/cart.service';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  imports: [CurrencyPipe],
})
export class ProductDetailsPageComponent implements OnInit {
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly _cartService: CartService = inject(CartService);

  product!: Product;

  ngOnInit() {
    this.product = this._activatedRoute.snapshot.data['product'];
  }

  addToCart(product: Product) {
    this._cartService.addToCart(product);
  }
}
