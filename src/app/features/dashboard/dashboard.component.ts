import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WeeklyProgressComponent } from '../weekly-progress/weekly-progress.component';
import { WeeklyMacronutrientsComponent } from '../weekly-macronutrients/weekly-macronutrients.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatToolbarModule,
    MatCardModule,
    WeeklyProgressComponent,
    WeeklyMacronutrientsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public constructor() {}
}
