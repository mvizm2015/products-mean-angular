import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

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
    constructor(private _dataService: DataService) {

    // Access the Data Service's getProducts() method we defined
    this._dataService.getProducts()
      .subscribe(res => this.products = res);
  }
}