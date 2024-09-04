import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './data-access/cart.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CartEventPayload } from './types/CartEvent.type';
import { CART_EVENTS } from './enums/CartEvents.enum';
import { CartItemCardComponent } from './components/card/card.component';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [AsyncPipe, CurrencyPipe, CartItemCardComponent],
})
export class CartPageComponent {
  private readonly _cartService: CartService = inject(CartService);

  readonly cartItems$ = this._cartService.cartItems$;
  readonly total$: Observable<number> = this._cartService.calculateTotal();
  readonly CART_EVENTS = CART_EVENTS;

  /**
   * Handles various cart events such as adding, removing, or updating the quantity of a product.
   *
   * @param {CartEventPayload} event - The event payload containing product ID and event type.
   * @throws {Error} If productId is not provided for operations other than clearing the cart.
   */
  handleCartEvents(event: CartEventPayload): void {
    this._cartService.handleCartEvents(event);
  }
}
