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
  selector: 'app-weight-bmi-chart',
  imports: [PlotlyModule],
  templateUrl: './weight-bmi-chart.component.html',
  styleUrl: './weight-bmi-chart.component.scss',
})
export class WeightBmiChartComponent implements OnInit {
  @ViewChild('weightBmiChart', { static: false })
  public weightBmiChart!: any;

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
      this.weightBmiChart &&
      this.weightBmiChart.plotEl.nativeElement.checkVisibility()
    ) {
      this.plotlyService.resize(this.weightBmiChart.plotlyInstance);
    }
  }

  private renderGraph(): void {
    // Bar Chart
    this.graph.set({
      data: [
        {
          x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Months
          y: [70, 69, 68, 67, 67, 66, 65], // Weight in kg
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Weight (kg)',
          line: { color: '#82CAFF', width: 3 },
        },
        {
          x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          y: [22, 21.8, 21.5, 21.3, 21.2, 21, 20.9], // BMI
          type: 'scatter',
          mode: 'lines+markers',
          name: 'BMI',
          line: { color: '#FFA07A', dash: 'dot', width: 3 },
        },
        {
          x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          y: [18, 17.5, 17.2, 17, 16.8, 16.5, 16.3], // Body Fat %
          type: 'bar',
          name: 'Body Fat (%)',
          marker: { color: '#90EE90' },
        },
      ] as Plotly.Data[],
      layout: {
        title: {
          text: 'Tracked Metrics Over Time',
          font: {
            family: 'Roboto, "Helvetica Neue",sans-serif',
            size: 19.2,
            color: '#424242',
            weight: 'bold',
          },
        },
        responsive: true,
        autosize: true,
        xaxis: {
          title: 'Month',
        },
        yaxis: {
          title: 'Values',
        },
        legend: {
          orientation: 'h',
          x: 0.5, // Center horizontally
          xanchor: 'center', // Anchor to the center of the x-axis
          y: -0.2, // Position below the chart
        },
      },
      config: {
        responsive: true,
        displayModeBar: false,
      } as Partial<Plotly.Config>,
    });
  }
}
