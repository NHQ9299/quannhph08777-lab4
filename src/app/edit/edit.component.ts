import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { SService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product;
  constructor(
    private productService : SService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.editProduct();
  }
  editProduct(){
    this.activatedRoute.params.subscribe(param => {
      this.product = this.productService.getProduct(param.id);
    });
  }
   addProduct(){
    this.productService.addProducts();
  }

}