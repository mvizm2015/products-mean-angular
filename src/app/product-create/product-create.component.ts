import { PRODUCTS } from './../mock-products';
import { Product } from './../product';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  products = PRODUCTS;

  selectedProduct: Product;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  saveProduct() {
    this.dataService.post('/product', this.product)
    .subscribes(res => {
      let id = res['_id'];
      this.route.navigate(['/product-detail', id]);
    }, (err) => {
      console.log(err);
    }
    );
  }

}
