import { DataService } from './../data.service';
import { Product } from './../product';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PRODUCTS } from './../mock-products';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products = PRODUCTS;

  selectedProduct: Product;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
  }

  getProduct(id) {
    this.dataService.get('/product/'+id).subscribe(data => {
      this.product = data;
    })
  }

  updateProduct(id, data) {
    this.dataService.put('/product/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.route.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
