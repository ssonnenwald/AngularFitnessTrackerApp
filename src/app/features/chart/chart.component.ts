import {
  Component,
  DestroyRef,
  inject,
  input,
  InputSignal,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { PlotlyModule, PlotlyService } from 'angular-plotly.js';
import { SideMenuService } from '../../core/services/side-menu/side-menu.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChartType } from '../../shared/models/enums/chart-type';
import { ChartService } from '../../shared/services/chart/chart.service';

@Component({
  selector: 'app-chart',
  imports: [PlotlyModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  @ViewChild('chartRef', { static: false }) public chartRef!: any;

  public chartType: InputSignal<ChartType> = input.required<ChartType>();

  private destroyRef: DestroyRef = inject(DestroyRef);
  private sideMenuService: SideMenuService = inject(SideMenuService);
  private plotlyService: PlotlyService = inject(PlotlyService);
  private chartService: ChartService = inject(ChartService);

  public chart: WritableSignal<any> = signal<any>(undefined);

  public ngOnInit(): void {
    this.chart.set(this.chartService.getChartDefinition(this.chartType()));

    this.sideMenuService.toggleState$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.resizePlot());
  }

  private resizePlot(): void {
    if (this.chartRef && this.chartRef.plotEl.nativeElement.checkVisibility()) {
      this.plotlyService.resize(this.chartRef.plotlyInstance);
    }
  }
}
