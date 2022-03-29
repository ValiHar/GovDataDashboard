import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Department } from 'src/app/core/models/department';
import { DataService } from 'src/app/core/services/data.service';

import { DashboardComponent } from './dashboard.component';

class MockDataService {

  public getDepartments(): Observable<Department[]> { return new Observable();}
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let dataService: DataService;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        DashboardComponent,
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();

    component = TestBed.inject(DashboardComponent);
    dataService = TestBed.inject(DataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
