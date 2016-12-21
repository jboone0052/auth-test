import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';

import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
 products : IProduct[] = [];
  selectedProduct: IProduct = {
    img:"",
    name: "",
    description: "",
    price: 0,
    isInCart: false,
    age: ""
  };

  ageFilterArray: string[] = [];

  pageSize: number = 12;
  
  constructor(private _prodService: ProductService) {
    this._prodService.getProducts().subscribe(data => this.products = data.products);
   }

   selectProduct(product : IProduct) {
     this.selectedProduct = product;
   }

   onAgeFilterChange(ageFilter: any) {
     this.ageFilterArray = [];
     for (let key in ageFilter) {
       if (ageFilter[key]) {
         this.ageFilterArray.push(key);
       }
     }
     this.filterProduct();
   }
 
   filterProduct() {
     this._prodService.filterProducts(this.ageFilterArray).subscribe(data => this.products = data.products);
   }
  ngOnInit() { }
}
