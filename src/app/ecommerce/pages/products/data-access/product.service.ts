import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';
import { Product } from '../../../types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _apiUrl = environment.apiUrl;
  private readonly _productsEndpoint = 'products';

  /**
   * Fetches the list of products from the API.
   *
   * @returns {Observable<Product[]>} An observable that emits the list of products.
   */
  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(
      `${this._apiUrl}/${this._productsEndpoint}`
    );
  }
}
