import { Component } from '@angular/core';
import { WeightBmiChartComponent } from '../weight-bmi-chart/weight-bmi-chart.component';

@Component({
  selector: 'app-progress-reports',
  imports: [WeightBmiChartComponent],
  templateUrl: './progress-reports.component.html',
  styleUrl: './progress-reports.component.scss',
})
export class ProgressReportsComponent {}
