import { DataService } from './../data.service';
import { Product } from './../product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PRODUCTS } from './../mock-products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products = PRODUCTS;

  selectedProduct: Product;

  @Input() product: Product;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getProducts()
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
