import { PRODUCTS } from './mock-products';
import { Product } from './product';
import { Injectable } from '@angular/core';
import { log } from 'util';


@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

}
