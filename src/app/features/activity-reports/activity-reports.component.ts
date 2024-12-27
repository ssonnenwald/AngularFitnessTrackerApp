import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { StepsChartComponent } from '../steps-chart/steps-chart.component';
import { ActivityChartComponent } from '../activity-chart/activity-chart.component';

@Component({
  selector: 'app-activity-reports',
  imports: [MatButtonToggleModule, StepsChartComponent, ActivityChartComponent],
  templateUrl: './activity-reports.component.html',
  styleUrl: './activity-reports.component.scss',
})
export class ActivityReportsComponent {
  public currentChart: 'steps' | 'activity' = 'steps'; // Default chart

  public toggleChart(chartType: 'steps' | 'activity'): void {
    this.currentChart = chartType;
  }
}
