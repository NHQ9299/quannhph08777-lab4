import { Component, OnInit } from "@angular/core";
import { SService } from "../services/product.service";
import { Product } from "../Product";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: SService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct()
    console.log(this.getProduct)
  }

  getProduct(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }

  removeItem(id) {
    this.products = this.productService.removeProduct(id);
  }
  editItem(id) {
    this.products = this.productService.editProduct(id);
  }
}
