import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';
import { Product } from '../../../shared/types/Product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _http: HttpClient = inject(HttpClient);

  /**
   * Fetches the list of products from the API.
   *
   * @returns {Observable<Product[]>} An observable that emits the list of products.
   */
  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(
      `${environment.API_URL}/${environment.PRODUCT_ENDPOINT}`
    );
  }
}
