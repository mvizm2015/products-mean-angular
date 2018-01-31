import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { log } from 'util';

@Injectable()
export class DataService {

  result:any;


  constructor(private _http: Http) { }

  getProducts() {
    this.result = this._http.get("http://localhost:3000/api/products")
      // .map(data => {
      //   log("map result")
      //   log(typeof data);
      //   log(data["_body"])
      //   // this.result = result.json().data
      //   this.result = data["_body"];
      //   this.result;
      // });
    return this.result;
  }
}
