import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { SService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product;
  constructor(
    private productService : SService,
    private activatedRoute : ActivatedRoute,
    private router :Router
  ) { }

  ngOnInit() {
    this.editProduct();
  }
  editProduct(){
 this.activatedRoute.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data =>{
      this.product= data;
    })
  });
}
 updateProduct(){
    this.productService.updateProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl('home');
    });
  }
}