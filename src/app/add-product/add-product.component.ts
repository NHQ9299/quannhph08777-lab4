import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { SService } from '../services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
// tạo đối tượng để lưu thông tin
  product: Product = new Product();
  constructor(
    private productService : SService
  ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.product);
  }

}