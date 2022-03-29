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

  /**
   * The data fetched via the api
   */
  departments: Department[] = [];

  /**
   * The chart theme based on the echarts themes
   */
  theme: string | ThemeOption = "dark";

  /**
   * The options object defines how the displayed chart should look like
   */
  options: any;

  /**
   * Needed for dynamically updating the chart
   */
  updateOptions: any;

  /**
   * The constructor updates teh chart with the most recent data from the API
   * 
   * @param dataservice Inject the dataservice to be able to fetch the department data
   */

  constructor(private dataService: DataService) {
    this.dataService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
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
