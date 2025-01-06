import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartType } from '../../shared/models/enums/chart-type';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-activity-reports',
  imports: [MatButtonToggleModule, ChartComponent],
  templateUrl: './activity-reports.component.html',
  styleUrl: './activity-reports.component.scss',
})
export class ActivityReportsComponent {
  public ChartType = ChartType;
  public currentChart: 'steps' | 'activity' = 'steps'; // Default chart

  public toggleChart(chartType: 'steps' | 'activity'): void {
    this.currentChart = chartType;
  }
}
