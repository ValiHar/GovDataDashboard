import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Department } from 'src/app/core/models/department';
import { DataService } from 'src/app/core/services/data.service';

import { PieChartComponent } from './pie-chart.component';

class MockDataService {

  public getDepartments(): Observable<Department[]> { return new Observable(); }
}

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let dataService: DataService;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieChartComponent],
      providers: [
        PieChartComponent,
        { provide: DataService, useClass: MockDataService }
      ]
    })
      .compileComponents();

    component = TestBed.inject(PieChartComponent);
    dataService = TestBed.inject(DataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
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
