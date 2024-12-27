import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReportsComponent } from './activity-reports.component';

describe('ActivityReportChartComponent', () => {
  let component: ActivityReportsComponent;
  let fixture: ComponentFixture<ActivityReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityReportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
