import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { SService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css']
})
export class ChiTietComponent implements OnInit {
   product: Product; 
  constructor(
    private productService : SService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
   this.activatedRoute.params.subscribe(param => {
      this.productService.getProduct(param.productID).subscribe(data =>{
      this.product= data;
    })
  });
}
}