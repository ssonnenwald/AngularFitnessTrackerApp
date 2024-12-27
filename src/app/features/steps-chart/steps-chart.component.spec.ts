import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsChartComponent } from './steps-chart.component';

describe('StepsChartComponent', () => {
  let component: StepsChartComponent;
  let fixture: ComponentFixture<StepsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
