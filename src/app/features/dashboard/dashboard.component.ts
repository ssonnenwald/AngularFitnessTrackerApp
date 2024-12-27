import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WeeklyMacronutrientsComponent } from '../weekly-macronutrients/weekly-macronutrients.component';
import { StepsChartComponent } from '../steps-chart/steps-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatToolbarModule,
    MatCardModule,
    StepsChartComponent,
    WeeklyMacronutrientsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public constructor() {}
}
