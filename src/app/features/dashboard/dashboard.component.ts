import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartComponent } from '../chart/chart.component';
import { ChartType } from '../../shared/models/enums/chart-type';

@Component({
  selector: 'app-dashboard',
  imports: [MatToolbarModule, MatCardModule, ChartComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public ChartType = ChartType;

  public constructor() {}
}
