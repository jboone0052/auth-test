import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() { 
    this.dashboardService.getDashboard().subscribe(data => {
         console.log(data);
        }, errorMsg => {
          console.log(errorMsg);
        });
  }
}
