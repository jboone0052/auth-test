import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: 'product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  constructor(private _productService: ProductService) { }

  ngOnInit() { }

  error: boolean = false;
  success: boolean = false;
  errorMessage: string = "";

  newProduct: IProduct = {
    img: "",
    name: "",
    price: 0,
    description: "",
    age: "",
    isInCart: false
  }

  submit(form) {
    this._productService.addProduct(this.newProduct).subscribe(data => {
        console.log (data);
          if (data.success){
            this.success = true;
          }
        }, errorMsg => {
          this.error = true;
          this.errorMessage = errorMsg;
        });
  }
}
