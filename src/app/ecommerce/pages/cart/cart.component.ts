import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './data-access/cart.service';
import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [AsyncPipe, NgIf, CurrencyPipe],
})
export class CartComponent {
  private readonly _cartService: CartService = inject(CartService);

  cartItems$ = this._cartService.cartItems$;
  total$: Observable<number> = this._cartService.calculateTotal();

  increaseQuantity(productId: number): void {
    this._cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number): void {
    this._cartService.decreaseQuantity(productId);
  }

  removeFromCart(productId: number): void {
    this._cartService.removeFromCart(productId);
  }
}
