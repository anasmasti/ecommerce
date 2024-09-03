import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../../../types/CartItem';
import { Product } from '../../../types/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly cartItems$ = this._cartItemsSubject.asObservable();
  readonly cartItemCount$ = this.cartItems$.pipe(map(items => items.length));

  /**
   * Adds a product to the cart or updates the quantity if it already exists.
   * Ensures immutability by creating a new cart state.
   *
   * @param {Product} product - The product to add or update in the cart.
   */
  addToCart(product: Product): void {
    const currentCart = this._cartItemsSubject.getValue();
    const existingItemIndex = currentCart.findIndex(
      item => item.product.id === product.id
    );

    const updatedCartItems =
      existingItemIndex !== -1
        ? currentCart.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...currentCart, { product, quantity: 1 }];

    this._cartItemsSubject.next(updatedCartItems);
  }

  /**
   * Increases the quantity of a product in the cart.
   *
   * @param {number} productId - The ID of the product to increase quantity for.
   */
  increaseQuantity(productId: number): void {
    const currentCart = this._cartItemsSubject.getValue();
    const itemIndex = currentCart.findIndex(
      item => item.product.id === productId
    );

    if (itemIndex !== -1) {
      const updatedCartItems = currentCart.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      this._cartItemsSubject.next(updatedCartItems);
    }
  }

  /**
   * Decreases the quantity of a product in the cart.
   * Removes the product from the cart if quantity reaches zero.
   *
   * @param {number} productId - The ID of the product to decrease quantity for.
   */
  decreaseQuantity(productId: number): void {
    const currentCart = this._cartItemsSubject.getValue();
    const itemIndex = currentCart.findIndex(
      item => item.product.id === productId
    );

    if (itemIndex !== -1) {
      const item = currentCart[itemIndex];
      if (item.quantity > 1) {
        const updatedCartItems = currentCart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item
        );
        this._cartItemsSubject.next(updatedCartItems);
      } else {
        this.removeFromCart(productId);
      }
    }
  }

  /**
   * Removes a product from the cart.
   *
   * @param {number} productId - The ID of the product to remove from the cart.
   */
  removeFromCart(productId: number): void {
    const updatedCartItems = this._cartItemsSubject
      .getValue()
      .filter(item => item.product.id !== productId);
    this._cartItemsSubject.next(updatedCartItems);
  }

  /**
   * Clears all items from the cart.
   */
  clearCart(): void {
    this._cartItemsSubject.next([]);
  }

  /**
   * Calculates the total price of items in the cart.
   *
   * @returns {Observable<number>} An observable that emits the total price.
   */
  calculateTotal(): Observable<number> {
    return this.cartItems$.pipe(
      map(items =>
        items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      )
    );
  }
}
