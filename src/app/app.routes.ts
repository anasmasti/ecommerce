import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/ecommerce/pages/products/products.component').then(
        model => model.ProductsPageComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('../app/ecommerce/pages/cart/cart.component').then(
        model => model.CartComponent
      ),
  },
];
