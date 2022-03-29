import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BarChartComponent,
    PieChartComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BarChartComponent,
    PieChartComponent
  ]
})
export class ThemeModule { }
