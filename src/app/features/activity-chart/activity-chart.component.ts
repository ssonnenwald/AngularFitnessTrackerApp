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
  selector: 'app-activity-chart',
  imports: [PlotlyModule],
  templateUrl: './activity-chart.component.html',
  styleUrl: './activity-chart.component.scss',
})
export class ActivityChartComponent implements OnInit {
  @ViewChild('activityChart', { static: false })
  public activityChart!: any;

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
      this.activityChart &&
      this.activityChart.plotEl.nativeElement.checkVisibility()
    ) {
      this.plotlyService.resize(this.activityChart.plotlyInstance);
    }
  }

  private renderGraph(): void {
    // Stacked Bar Chart
    // this.graph.set({
    //   data: [
    //     {
    //       x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    //       y: [10000, 12000, 15000, 8000, 11000, 19000, 14000], // Steps
    //       type: 'bar',
    //       name: 'Steps',
    //       marker: { color: '#82CAFF' },
    //     },
    //     {
    //       x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    //       y: [300, 450, 500, 250, 400, 600, 450], // Calories burned
    //       type: 'bar',
    //       name: 'Calories Burned',
    //       marker: { color: '#FFA07A' },
    //     },
    //     {
    //       x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    //       y: [60, 75, 80, 40, 65, 90, 70], // Active Minutes
    //       type: 'bar',
    //       name: 'Active Minutes',
    //       marker: { color: '#90EE90' },
    //     },
    //   ] as Plotly.Data[],
    //   layout: {
    //     title: {
    //       text: 'Weekly Activity Trends',
    //       font: {
    //         family: 'Roboto, "Helvetica Neue",sans-serif',
    //         size: 19.2,
    //         color: '#424242',
    //         weight: 'bold',
    //       },
    //     },
    //     barmode: 'stack', // Use 'group' for grouped bars or 'stack' for stacked bars
    //     xaxis: {
    //       title: 'Days of the Week',
    //     },
    //     yaxis: {
    //       title: 'Values',
    //     },
    //     responsive: true,
    //     autosize: true,
    //   },
    //   config: {
    //     responsive: true,
    //     displayModeBar: false, // Hides Plotly's toolbar
    //   } as Partial<Plotly.Config>,
    // });

    // Line chart
    this.graph.set({
      data: [
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
          y: [10000, 12000, 15000, 8000, 11000, 19000, 14000], // Steps
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Steps',
          line: { color: '#82CAFF', width: 3 },
          marker: { size: 8 },
        },
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
          y: [300, 450, 500, 250, 400, 600, 450], // Calories burned
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Calories Burned',
          line: { color: '#FFA07A', width: 3 },
          marker: { size: 8 },
        },
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
          y: [60, 75, 80, 40, 65, 90, 70], // Active Minutes
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Active Minutes',
          line: { color: '#90EE90', width: 3 },
          marker: { size: 8 },
        },
      ] as Plotly.Data[],
      layout: {
        title: {
          text: 'Weekly Activity Trends',
          font: {
            family: 'Roboto, "Helvetica Neue", sans-serif',
            size: 19.2,
            color: '#424242',
            weight: 'bold',
          },
        },
        xaxis: {
          title: {
            text: 'Days of the Week',
            font: {
              size: 16,
            },
          },
        },
        yaxis: {
          title: {
            text: 'Values',
            font: {
              size: 16,
            },
          },
        },
        responsive: true,
        autosize: true,
      },
      config: {
        responsive: true,
        displayModeBar: false, // Hides Plotly's toolbar
      } as Partial<Plotly.Config>,
    });
  }
}
