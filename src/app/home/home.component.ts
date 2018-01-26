import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.getProducts();

  }

  getProducts(): void {
    this.dataService.getProducts()
    .subscribe(products => this.products =
    products.slice(1,5))
  }

}
