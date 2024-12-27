import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReportChartComponent } from './activity-report-chart.component';

describe('ActivityReportChartComponent', () => {
  let component: ActivityReportChartComponent;
  let fixture: ComponentFixture<ActivityReportChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityReportChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityReportChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
