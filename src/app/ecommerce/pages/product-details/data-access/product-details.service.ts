import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';
import { Product } from '../../../types/Product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  private readonly _http: HttpClient = inject(HttpClient);

  /**
   * Fetches product details by product ID.
   *
   * @param {number} productId - The ID of the product to fetch.
   * @returns {Observable<Product>} An observable containing the product details.
   */
  getProductById(productId: number): Observable<Product> {
    return this._http.get<Product>(
      `${environment.API_URL}/${environment.PRODUCT_ENDPOINT}/${productId}`
    );
  }
}
