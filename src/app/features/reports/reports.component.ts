import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivityReportChartComponent } from '../activity-report-chart/activity-report-chart.component';
import { NutritionReportChartComponent } from '../nutrition-report-chart/nutrition-report-chart.component';
import { ProgressReportChartComponent } from '../progress-report-chart/progress-report-chart.component';

@Component({
  selector: 'app-reports',
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    ActivityReportChartComponent,
    NutritionReportChartComponent,
    ProgressReportChartComponent,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {}
