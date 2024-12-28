import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { PlotlyModule, PlotlyService } from 'angular-plotly.js';
import { SideMenuService } from '../../core/services/side-menu/side-menu.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-caloric-intake-by-meal-chart',
  imports: [PlotlyModule],
  templateUrl: './caloric-intake-by-meal-chart.component.html',
  styleUrl: './caloric-intake-by-meal-chart.component.scss',
})
export class CaloricIntakeByMealChartComponent implements OnInit {
  @ViewChild('caloricIntakeByMealChart', { static: false })
  public caloricIntakeByMealChart!: any;

  private destroyRef: DestroyRef = inject(DestroyRef);
  private sideMenuService: SideMenuService = inject(SideMenuService);
  private plotlyService: PlotlyService = inject(PlotlyService);

  public graph: WritableSignal<any> = signal<any>(undefined);

  public ngOnInit(): void {
    this.renderGraph();

    this.sideMenuService.toggleState$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.resizePlot());
  }

  private resizePlot(): void {
    if (
      this.caloricIntakeByMealChart &&
      this.caloricIntakeByMealChart.plotEl.nativeElement.checkVisibility()
    ) {
      this.plotlyService.resize(this.caloricIntakeByMealChart.plotlyInstance);
    }
  }

  private renderGraph(): void {
    // Line Chart
    // this.graph.set({
    //   data: [
    //     {
    //       x: [
    //         'Monday',
    //         'Tuesday',
    //         'Wednesday',
    //         'Thursday',
    //         'Friday',
    //         'Saturday',
    //         'Sunday',
    //       ],
    //       y: [1800, 1900, 2000, 1700, 2200, 2500, 2400], // Example calorie values
    //       type: 'scatter',
    //       mode: 'lines+markers',
    //       name: 'Calories',
    //       line: { color: '#FFA500', width: 2 },
    //       marker: { color: '#FFA500', size: 8 },
    //     },
    //   ] as Plotly.Data[],
    //   layout: {
    //     title: {
    //       text: 'Daily Caloric Intake',
    //       font: {
    //         family: 'Roboto, "Helvetica Neue",sans-serif',
    //         size: 19.2,
    //         color: '#424242',
    //         weight: 'bold',
    //       },
    //     },
    //     responsive: true,
    //     autosize: true,
    //     xaxis: {
    //       title: 'Days of the Week',
    //     },
    //     yaxis: {
    //       title: 'Calories (kcal)',
    //     },
    //   },
    //   config: {
    //     responsive: true,
    //     displayModeBar: false,
    //   } as Partial<Plotly.Config>,
    // });

    // Bar Chart
    this.graph.set({
      data: [
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [400, 450, 500, 400, 420, 450, 480], // Breakfast calories
          name: 'Breakfast',
          type: 'bar',
          marker: { color: '#FFA07A' },
        },
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [600, 650, 700, 630, 680, 720, 750], // Lunch calories
          name: 'Lunch',
          type: 'bar',
          marker: { color: '#82CAFF' },
        },
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [500, 550, 600, 500, 540, 580, 600], // Dinner calories
          name: 'Dinner',
          type: 'bar',
          marker: { color: '#90EE90' },
        },
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [200, 180, 220, 190, 200, 240, 230], // Snacks calories
          name: 'Snacks',
          type: 'bar',
          marker: { color: '#DDA0DD' },
        },
      ] as Plotly.Data[],
      layout: {
        title: {
          text: 'Caloric Intake by Meals (Weekly)',
          font: {
            family: 'Roboto, "Helvetica Neue",sans-serif',
            size: 19.2,
            color: '#424242',
            weight: 'bold',
          },
        },
        responsive: true,
        autosize: true,
        barmode: 'stack', // Stacked bars
        xaxis: {
          title: 'Days of the Week',
          tickangle: -45,
          automargin: true,
        },
        yaxis: {
          title: 'Calories (kcal)',
        },
      },
      config: {
        responsive: true,
        displayModeBar: false,
      } as Partial<Plotly.Config>,
    });
  }
}
