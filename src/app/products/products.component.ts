import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'Macbook Pro',
    description: 'Brand New!',
    price: 2000,
    rating: '10/10',
    seller: 'Barb',
    warranty: '1 year'
  };

  constructor() { }

  ngOnInit() {
  }

}
