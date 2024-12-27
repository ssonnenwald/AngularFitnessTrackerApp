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
  selector: 'app-macronutrients-chart',
  imports: [PlotlyModule],
  templateUrl: './macronutrients-chart.component.html',
  styleUrl: './macronutrients-chart.component.scss',
})
export class MacronutrientsChartComponent implements OnInit {
  @ViewChild('plotWeeklyMacronutrients', { static: false })
  public plotWeeklyMacronutrients!: any;

  private destroyRef: DestroyRef = inject(DestroyRef);
  private sideMenuService: SideMenuService = inject(SideMenuService);
  private plotlyService: PlotlyService = inject(PlotlyService);

  public graph: WritableSignal<any> = signal<any>(undefined);

  public constructor() {}

  public ngOnInit(): void {
    this.renderGraph();

    this.sideMenuService.toggleState$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.resizePlot());
  }

  private resizePlot(): void {
    if (this.plotWeeklyMacronutrients) {
      this.plotlyService.resize(this.plotWeeklyMacronutrients.plotlyInstance);
    }
  }

  private renderGraph(): void {
    this.graph.set({
      data: [
        {
          name: 'Protein',
          x: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [200, 190, 240, 190, 220, 200, 210],
          type: 'bar',
          marker: {
            color: '#03D7BC',
          },
        },
        {
          name: 'Carbs',
          x: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [100, 123, 150, 130, 125, 150, 102],
          type: 'bar',
          marker: {
            color: '#41C2EF',
          },
        },
        {
          name: 'Fat',
          x: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          y: [40, 50, 70, 45, 50, 30, 45],
          type: 'bar',
          marker: {
            color: '#FF4E66',
          },
        },
      ] as Plotly.Data[],
      layout: {
        title: {
          text: 'Daily Macronutrients',
          font: {
            family: 'Roboto, "Helvetica Neue",sans-serif',
            size: 19.2,
            color: '#424242',
            weight: 'bold',
          },
        },
        autosize: true,
        barmode: 'stack',
        xaxis: {
          title: 'Days',
        },
        yaxis: {
          title: 'Macronutrients (grams) ',
          showticklabels: false,
        },
      },
      config: {
        responsive: true,
        displayModeBar: false,
      } as Partial<Plotly.Config>,
    });
  }
}
