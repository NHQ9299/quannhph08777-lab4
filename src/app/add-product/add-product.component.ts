import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { SService } from '../services/product.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
// tạo đối tượng để lưu thông tin
  product: Product = new Product();
  constructor(
    private productService : SService,
    private router : Router
      ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl('home');
    });
  }

}