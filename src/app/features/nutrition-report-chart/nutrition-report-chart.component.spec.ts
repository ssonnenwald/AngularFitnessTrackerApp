import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionReportChartComponent } from './nutrition-report-chart.component';

describe('NutritionReportChartComponent', () => {
  let component: NutritionReportChartComponent;
  let fixture: ComponentFixture<NutritionReportChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionReportChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionReportChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
