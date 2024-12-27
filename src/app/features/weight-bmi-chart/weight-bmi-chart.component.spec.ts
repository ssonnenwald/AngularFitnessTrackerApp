import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightBmiChartComponent } from './weight-bmi-chart.component';

describe('WeightBmiChartComponent', () => {
  let component: WeightBmiChartComponent;
  let fixture: ComponentFixture<WeightBmiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightBmiChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightBmiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
