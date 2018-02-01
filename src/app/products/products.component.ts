import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from './../mock-products';
import { DataService } from '../data.service';
import { log } from 'util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  selectedProduct: Product;

  // constructor() { }

  ngOnInit() {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  constructor(private _dataService: DataService) {

    // Access the Data Service's getProducts() method defined
    this._dataService.getProducts()
      .subscribe((data) => {
        var body = data["_body"];
        this.products = JSON.parse(body);
      });
  }
}
