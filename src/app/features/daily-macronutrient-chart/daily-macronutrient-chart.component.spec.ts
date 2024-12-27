import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMacronutrientChartComponent } from './daily-macronutrient-chart.component';

describe('DailyMacronutrientChartComponent', () => {
  let component: DailyMacronutrientChartComponent;
  let fixture: ComponentFixture<DailyMacronutrientChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyMacronutrientChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyMacronutrientChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
