import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressReportsComponent } from './progress-reports.component';

describe('ProgressReportChartComponent', () => {
  let component: ProgressReportsComponent;
  let fixture: ComponentFixture<ProgressReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressReportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
