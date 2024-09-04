import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CART_EVENTS } from '../../enums/CartEvents.enum';
import { CartEventPayload } from '../../types/CartEvent.type';
import { CartItem } from '../../types/CartItem.type';

@Component({
  standalone: true,
  selector: 'app-cart-item-card',
  templateUrl: './card.component.html',
  imports: [CurrencyPipe],
})
export class CartItemCardComponent {
  @Input() cartItem!: CartItem;
  @Output() onClick: EventEmitter<CartEventPayload> = new EventEmitter();

  increaseQuantity(productId: number): void {
    this.onClick.emit({ event: CART_EVENTS.INCREASE, productId });
  }

  decreaseQuantity(productId: number): void {
    this.onClick.emit({ event: CART_EVENTS.DECREASE, productId });
  }

  removeFromCart(productId: number): void {
    this.onClick.emit({ event: CART_EVENTS.REMOVE, productId });
  }
}
