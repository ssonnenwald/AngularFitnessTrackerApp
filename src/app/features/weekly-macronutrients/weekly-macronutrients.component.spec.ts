import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMacronutrientsComponent } from './weekly-macronutrients.component';

describe('WeeklyMacronutrientsComponent', () => {
  let component: WeeklyMacronutrientsComponent;
  let fixture: ComponentFixture<WeeklyMacronutrientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyMacronutrientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyMacronutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
