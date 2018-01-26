import { ProductsComponent } from './products/products.component';
import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Products Store';

  // Define a products property to hold our product data
  products: Array<any>;

  // Create an instance of the DataService through dependency injection
  // constructor(private _dataService: DataService) {

  //   // Access the Data Service's getProducts() method we defined
  //   this._dataService.getProducts()
  //     .subscribe((data) => {
  //       var body = data["_body"];
  //       this.products = body;
  //       log(this.products);
  //     });
  // }
}
