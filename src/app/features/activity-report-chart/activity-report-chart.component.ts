import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { StepsChartComponent } from '../steps-chart/steps-chart.component';
import { ActivityChartComponent } from '../activity-chart/activity-chart.component';

@Component({
  selector: 'app-activity-report-chart',
  imports: [MatButtonToggleModule, StepsChartComponent, ActivityChartComponent],
  templateUrl: './activity-report-chart.component.html',
  styleUrl: './activity-report-chart.component.scss',
})
export class ActivityReportChartComponent {
  public currentChart: 'steps' | 'activity' = 'steps'; // Default chart

  public toggleChart(chartType: 'steps' | 'activity'): void {
    this.currentChart = chartType;
  }
}
