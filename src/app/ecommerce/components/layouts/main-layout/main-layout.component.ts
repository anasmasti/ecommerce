import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../pages/cart/data-access/cart.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  imports: [RouterLink, AsyncPipe],
})
export class MainLayoutComponent {
  private readonly _cartService: CartService = inject(CartService);

  cartItemCount$ = this._cartService.cartItemCount$;
}
