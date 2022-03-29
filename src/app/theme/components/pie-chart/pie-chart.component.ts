import { Component, Input, OnInit } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { DataPoint } from 'src/app/core/models/dataPoint';
import { Department } from 'src/app/core/models/department';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  departments: Department[] = [];

  theme: string | ThemeOption = "dark";
  options: any;
  updateOptions: any;


  constructor(private dataService: DataService) {
    this.dataService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
      let nameSet = this.departments.map(a => a.department);
      let dataSet = this.departments.map(a => new DataPoint(a.datasets, a.department));
      
      this.updateOptions = {
        series: [{
          data: dataSet
        }]
      };
    });
   }

  ngOnInit(): void {
    
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: <strong>{c} datasets ({d}%)</strong>'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        bottom: '-5%',
        selector: true,
        height: 100,
        textStyle: {
          width: '110',
          overflow: 'break'
        },
        
      },
      calculable: true,
      series: [
        {
          name: 'area',
          type: 'pie',
          radius: [90, 160],
          top: '-10%',
          roseType: 'area',
          data: [],
          label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20
          },
        }
      ]
    };
  }
}
