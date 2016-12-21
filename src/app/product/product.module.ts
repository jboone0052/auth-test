import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent }   from './product.component';
import { AgeFilterComponent } from './age-filter.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ProductFormComponent } from './product-form.component';

import { ProductService } from './product.service';

@NgModule({
  imports: [CommonModule, Ng2PaginationModule, FormsModule],
  exports: [ProductComponent, AgeFilterComponent, Ng2PaginationModule, ProductFormComponent],
  declarations: [ProductComponent, AgeFilterComponent, ProductFormComponent],
  providers: [ProductService],
})
export class ProductModule { }
