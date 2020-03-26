import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { SService } from '../services/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: SService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }
  
}