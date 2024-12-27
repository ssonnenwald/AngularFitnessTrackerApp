import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloricIntakeByMealChartComponent } from './caloric-intake-by-meal-chart.component';

describe('CaloricIntakeByMealChartComponent', () => {
  let component: CaloricIntakeByMealChartComponent;
  let fixture: ComponentFixture<CaloricIntakeByMealChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloricIntakeByMealChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloricIntakeByMealChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
