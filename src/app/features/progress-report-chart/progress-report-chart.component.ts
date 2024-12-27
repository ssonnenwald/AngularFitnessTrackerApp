import { Component } from '@angular/core';
import { WeightBmiChartComponent } from '../weight-bmi-chart/weight-bmi-chart.component';

@Component({
  selector: 'app-progress-report-chart',
  imports: [WeightBmiChartComponent],
  templateUrl: './progress-report-chart.component.html',
  styleUrl: './progress-report-chart.component.scss',
})
export class ProgressReportChartComponent {}
