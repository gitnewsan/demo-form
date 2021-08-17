import { Component, OnInit } from "@angular/core";

import { FormControl } from "@angular/forms";

class IProduct {
  name: string;
  category: string;
  id: number;
  url: string;
  price: number;
}

@Component({
  selector: "app-tform",
  templateUrl: "./tform.component.html",
  styleUrls: ["./tform.component.css"]
})
export class TForm implements OnInit {
  product: IProduct;

  newproduct: IProduct;

  constructor() {
    this.product = new IProduct();
    this.newproduct = new IProduct();
  }

  get jsonProduct() {
    return JSON.stringify(this.newproduct);
  }

  addProduct(p: IProduct) {
    console.log("New Product:" + this.jsonProduct);
  }
}
