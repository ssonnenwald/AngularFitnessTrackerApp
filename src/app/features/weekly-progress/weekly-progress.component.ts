import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  ViewChild,
} from '@angular/core';
import { PlotlyModule, PlotlyService } from 'angular-plotly.js';
import { SideMenuService } from '../../core/services/side-menu/side-menu.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-weekly-progress',
  imports: [PlotlyModule],
  templateUrl: './weekly-progress.component.html',
  styleUrl: './weekly-progress.component.scss',
})
export class WeeklyProgressComponent implements AfterViewInit {
  @ViewChild('plotWeeklyProgress', { static: false })
  public plotWeeklyProgress!: any;

  private destroyRef: DestroyRef = inject(DestroyRef);
  private sideMenuService: SideMenuService = inject(SideMenuService);
  private plotlyService: PlotlyService = inject(PlotlyService);

  public graph: any = undefined;

  public constructor() {}

  public ngOnInit(): void {
    this.sideMenuService.toggleState$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.resizePlot());
  }

  public ngAfterViewInit(): void {
    this.renderGraph();
  }

  private resizePlot(): void {
    if (this.plotWeeklyProgress) {
      this.plotlyService.resize(this.plotWeeklyProgress.plotlyInstance);
    }
  }

  private renderGraph(): void {
    setTimeout(() => {
      this.graph = {
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
          autosize: true,
          xaxis: {
            title: 'Days',
          },
          yaxis: {
            title: 'Steps',
          },
        } as Partial<Plotly.Layout>,
        config: {
          responsive: true,
          displayModeBar: false,
        } as Partial<Plotly.Config>,
      };
    });
  }
}
