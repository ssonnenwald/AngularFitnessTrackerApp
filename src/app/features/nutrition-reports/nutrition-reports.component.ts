import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartType } from '../../shared/models/enums/chart-type';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-nutrition-reports',
  imports: [MatButtonToggleModule, ChartComponent],
  templateUrl: './nutrition-reports.component.html',
  styleUrl: './nutrition-reports.component.scss',
})
export class NutritionReportsComponent {
  public ChartType = ChartType;
  public currentChart: 'macronutrients' | 'caloric intake' = 'macronutrients'; // Default chart

  public toggleChart(chartType: 'macronutrients' | 'caloric intake'): void {
    this.currentChart = chartType;
  }
}
