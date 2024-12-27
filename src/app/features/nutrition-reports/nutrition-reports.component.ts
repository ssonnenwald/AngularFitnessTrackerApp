import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CaloricIntakeByMealChartComponent } from '../caloric-intake-by-meal-chart/caloric-intake-by-meal-chart.component';
import { MacronutrientsChartComponent } from '../macronutrients-chart/macronutrients-chart.component';

@Component({
  selector: 'app-nutrition-reports',
  imports: [
    MatButtonToggleModule,
    MacronutrientsChartComponent,
    CaloricIntakeByMealChartComponent,
  ],
  templateUrl: './nutrition-reports.component.html',
  styleUrl: './nutrition-reports.component.scss',
})
export class NutritionReportsComponent {
  public currentChart: 'macronutrients' | 'caloric intake' = 'macronutrients'; // Default chart

  public toggleChart(chartType: 'macronutrients' | 'caloric intake'): void {
    this.currentChart = chartType;
  }
}
