import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyProgressComponent } from './weekly-progress.component';

describe('WeeklyProgressComponent', () => {
  let component: WeeklyProgressComponent;
  let fixture: ComponentFixture<WeeklyProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
