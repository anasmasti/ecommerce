import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../pages/cart/data-access/cart.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  imports: [RouterModule, AsyncPipe],
})
export class MainLayoutComponent {
  private readonly _cartService: CartService = inject(CartService);

  cartItemCount$ = this._cartService.cartItemCount$;
}
