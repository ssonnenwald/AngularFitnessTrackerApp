import { Component } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-weekly-progress',
  imports: [PlotlyModule],
  templateUrl: './weekly-progress.component.html',
  styleUrl: './weekly-progress.component.scss',
})
export class WeeklyProgressComponent {
  public graph: any = {
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
      responsive: true,
      useResizeHandler: true,
      //width: 540,
      height: 300,
      xaxis: {
        title: 'Days',
      },
      yaxis: {
        title: 'Steps',
      },
    } as Partial<Plotly.Layout>,
    config: { responsive: true, displayModeBar: false },
  };

  public constructor() {}
}
