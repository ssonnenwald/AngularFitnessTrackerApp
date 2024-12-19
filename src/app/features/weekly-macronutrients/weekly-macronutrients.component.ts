import { Component } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'app-weekly-macronutrients',
  imports: [PlotlyModule],
  templateUrl: './weekly-macronutrients.component.html',
  styleUrl: './weekly-macronutrients.component.scss',
})
export class WeeklyMacronutrientsComponent {
  public graph: any = {
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
      autosize: true,
      responsive: true,
      useResizeHandler: true,
      //width: 540,
      height: 300,
      barmode: 'stack',
      xaxis: {
        title: 'Days',
      },
      yaxis: {
        title: 'Macronutrients (grams) ',
        showticklabels: false,
      },
    } as Partial<Plotly.Layout>,
    config: { responsive: true, displayModeBar: false },
  };

  public constructor() {}
}
