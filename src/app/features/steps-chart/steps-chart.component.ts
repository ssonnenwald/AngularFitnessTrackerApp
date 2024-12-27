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
  selector: 'app-steps-chart',
  imports: [PlotlyModule],
  templateUrl: './steps-chart.component.html',
  styleUrl: './steps-chart.component.scss',
})
export class StepsChartComponent implements OnInit {
  @ViewChild('stepsChart', { static: false })
  public stepsChart!: any;

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
    if (this.stepsChart) {
      this.plotlyService.resize(this.stepsChart.plotlyInstance);
    }
  }

  private renderGraph(): void {
    this.graph.set({
      data: [
        {
          x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [10000, 8000, 15000, 9000, 11000, 19000, 12000],
          type: 'bar',
          marker: {
            color: '#82CAFF',
          },
        },
      ] as Plotly.Data[],
      layout: {
        title: {
          text: 'Daily Steps',
          font: {
            family: 'Roboto, "Helvetica Neue",sans-serif',
            size: 19.2,
            color: '#424242',
            weight: 'bold',
          },
        },
        autosize: true,
        xaxis: {
          title: 'Days',
        },
        yaxis: {
          title: 'Steps',
        },
      },
      config: {
        responsive: true,
        displayModeBar: false,
      } as Partial<Plotly.Config>,
    });
  }
}
