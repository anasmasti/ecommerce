import { Component, inject, OnInit } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Observable } from 'rxjs';
import { ProductService } from './data-access/product.service';
import { AsyncPipe } from '@angular/common';
import { Product } from '../../types/Product.type';
import { LoadingComponent } from '../../components/shared/loading/loading.component';
import { CartService } from '../cart/data-access/cart.service';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [ProductListComponent, AsyncPipe, LoadingComponent],
})
export class ProductsPageComponent implements OnInit {
  private readonly _productService: ProductService = inject(ProductService);
  private readonly _cartService: CartService = inject(CartService);

  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.getProducts();
  }

  addToCart(product: Product) {
    this._cartService.addToCart(product);
  }

  private getProducts() {
    return this._productService.getProducts();
  }
}
