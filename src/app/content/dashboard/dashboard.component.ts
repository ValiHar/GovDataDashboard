import { Component } from '@angular/core';
import { Department } from 'src/app/core/models/department';
import { DataService } from 'src/app/core/services/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public departments: Department[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
    })
  }
}
