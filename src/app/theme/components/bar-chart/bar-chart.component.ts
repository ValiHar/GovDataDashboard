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

  /**
   * The options object defines how the displayed chart should look like
   */
  public options: any;

  /**
   * Needed for dynamically updating the chart
   */
  public updateOptions: any;

  /**
   * The data fetched via the api
   */
  public departments: Department[] = [];

  /**
   * A threshold for the bar chart height
   */
  public yMax = 3000;

  /**
   * The gray areas behind the bars
   */
  public dataShadow: number[] = [];

  /**
   * The chart theme based on the echarts themes
   */
  theme: string | ThemeOption = "dark";

  /**
   * The constructor updates teh chart with the most recent data from the API
   * 
   * @param dataservice Inject the dataservice to be able to fetch the department data
   */

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
