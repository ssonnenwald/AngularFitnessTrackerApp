import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressReportChartComponent } from './progress-report-chart.component';

describe('ProgressReportChartComponent', () => {
  let component: ProgressReportChartComponent;
  let fixture: ComponentFixture<ProgressReportChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressReportChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressReportChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
