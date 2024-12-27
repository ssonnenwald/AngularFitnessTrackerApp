import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionReportsComponent } from './nutrition-reports.component';

describe('NutritionReportChartComponent', () => {
  let component: NutritionReportsComponent;
  let fixture: ComponentFixture<NutritionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionReportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
