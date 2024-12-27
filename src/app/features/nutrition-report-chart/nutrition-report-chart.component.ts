import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DailyMacronutrientChartComponent } from '../daily-macronutrient-chart/daily-macronutrient-chart.component';
import { CaloricIntakeByMealChartComponent } from '../caloric-intake-by-meal-chart/caloric-intake-by-meal-chart.component';

@Component({
  selector: 'app-nutrition-report-chart',
  imports: [
    MatButtonToggleModule,
    DailyMacronutrientChartComponent,
    CaloricIntakeByMealChartComponent,
  ],
  templateUrl: './nutrition-report-chart.component.html',
  styleUrl: './nutrition-report-chart.component.scss',
})
export class NutritionReportChartComponent {
  public currentChart: 'macronutrients' | 'caloric intake' = 'macronutrients'; // Default chart

  public toggleChart(chartType: 'macronutrients' | 'caloric intake'): void {
    this.currentChart = chartType;
  }
}
