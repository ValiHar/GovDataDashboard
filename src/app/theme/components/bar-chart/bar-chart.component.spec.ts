import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Department } from 'src/app/core/models/department';
import { DataService } from 'src/app/core/services/data.service';

import { BarChartComponent } from './bar-chart.component';

class MockDataService {

  public getDepartments(): Observable<Department[]> { return new Observable();}
}

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let dataService: DataService;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartComponent ],
      providers: [
        BarChartComponent,
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();

    component = TestBed.inject(BarChartComponent);
    dataService = TestBed.inject(DataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the options property defined', () => {
    expect(component.options).toBeDefined();
  });
});