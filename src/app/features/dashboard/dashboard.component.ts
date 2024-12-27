import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MacronutrientsChartComponent } from '../macronutrients-chart/macronutrients-chart.component';
import { StepsChartComponent } from '../steps-chart/steps-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatToolbarModule,
    MatCardModule,
    StepsChartComponent,
    MacronutrientsChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public constructor() {}
}
