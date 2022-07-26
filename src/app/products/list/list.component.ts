import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {first} from "rxjs";
import {Product} from "../../models/product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getAll()
      .pipe(first())
      .subscribe((product) => (this.products = product));
  }

  deleteProduct(id: number) {
      this.productsService
      .delete(id)
      .pipe(first())
      .subscribe(() => (this.products = this.products.filter((x) => x.id !== id)));
  }

}
