import { Component } from '@angular/core';
import { ChartType } from '../../shared/models/enums/chart-type';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-progress-reports',
  imports: [ChartComponent],
  templateUrl: './progress-reports.component.html',
  styleUrl: './progress-reports.component.scss',
})
export class ProgressReportsComponent {
  public ChartType = ChartType;
}
