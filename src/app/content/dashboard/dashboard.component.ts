import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/models/department';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public departments: Department[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
      console.log(departments);
      
    })
   }

  ngOnInit(): void {
  }

}
