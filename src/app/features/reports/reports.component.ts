import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivityReportsComponent } from '../activity-reports/activity-reports.component';
import { NutritionReportsComponent } from '../nutrition-reports/nutrition-reports.component';
import { ProgressReportsComponent } from '../progress-reports/progress-reports.component';

@Component({
  selector: 'app-reports',
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    ActivityReportsComponent,
    NutritionReportsComponent,
    ProgressReportsComponent,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {}
