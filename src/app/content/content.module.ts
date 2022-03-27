import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentRoutingModule } from './content-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgbModule
  ]
})
export class ContentModule { }
