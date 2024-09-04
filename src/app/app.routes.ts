import { Routes } from '@angular/router';
import { productDetailsResolver } from './ecommerce/pages/product-details/resolvers/product-details.resolver';

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
        model => model.CartPageComponent
      ),
  },
  {
    path: ':productId',
    loadComponent: () =>
      import(
        '../app/ecommerce/pages/product-details/product-details.component'
      ).then(model => model.ProductDetailsPageComponent),
    resolve: {
      product: productDetailsResolver,
    },
  },
];
