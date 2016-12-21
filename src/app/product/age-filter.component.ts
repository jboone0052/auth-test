import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-age-filter',
  templateUrl: 'age-filter.component.html'
})
export class AgeFilterComponent implements OnInit {
  
  ageCounts: any = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten:0
  };

  constructor(private _productService: ProductService) {
      for(let key in this.ageCounts){
        this._productService.getAgeCounts(key).subscribe(counts => {console.log(this.ageCounts[key]);console.log(counts);this.ageCounts[key] = counts.count});
      }
   }

  
  
  ngOnInit() { }

  ageFilter = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  }

  @Output() ageFilterChange: EventEmitter<any> = new EventEmitter<any>();

  onChange(filter: string) {
    this.ageFilter[filter] = !this.ageFilter[filter];
    this.ageFilterChange.emit(this.ageFilter);
  }
}
