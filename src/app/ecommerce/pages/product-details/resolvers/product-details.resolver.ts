import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductDetailsService } from '../data-access/product-details.service';

/**
 * Resolves the product details before navigating to the product details page.
 *
 * @param {ActivatedRouteSnapshot} route - The current route snapshot.
 * @param {RouterStateSnapshot} state - The state of the router at the time of navigation.
 * @returns {Observable<Object>} An observable containing the product details.
 */
export const productDetailsResolver: ResolveFn<Object> = (route, state) => {
  const productId = +(route.paramMap.get('productId') ?? '');
  return inject(ProductDetailsService).getProductById(productId);
};
