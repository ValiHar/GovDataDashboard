import { Component, Input, OnInit } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { DataPoint } from 'src/app/core/models/dataPoint';
import { Department } from 'src/app/core/models/department';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public options: any;
  public updateOptions: any;
  public departments: Department[] = [];
  public yMax = 3000;
  public dataShadow: number[] = [];

  theme: string | ThemeOption = "dark";


  constructor(public dataservice: DataService) {
    this.dataservice.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
      let nameSet = this.departments.map(a => a.department);
      let dataSet = this.departments.map(a => new DataPoint(a.datasets, a.department));

      for (let i = 0; i < this.departments.length; i++) {
        this.dataShadow.push(this.yMax);
      }

      this.updateOptions = {
        xAxis: {
          data: nameSet
        },
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
        formatter: '{b}: <strong>{c} datasets</strong>',
        extraCssText: "width:25vw; white-space:pre-wrap;",
        
      },
      xAxis: {
        data: [],
        axisLabel: {
          inside: true,
          color: '#fff',
          rotate: 90,
          width: 500,
          overflow: 'truncate'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999'
        }
      },
      dataZoom: [
        {
          type: 'inside',
        }
      ],
      series: [
        {
          type: 'bar',
          showBackground: true,
          data: []
        }
      ]
    };
  }

}
