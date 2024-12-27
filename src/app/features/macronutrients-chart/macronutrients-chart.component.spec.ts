import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacronutrientsChartComponent } from './macronutrients-chart.component';

describe('WeeklyMacronutrientsComponent', () => {
  let component: MacronutrientsChartComponent;
  let fixture: ComponentFixture<MacronutrientsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacronutrientsChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MacronutrientsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
