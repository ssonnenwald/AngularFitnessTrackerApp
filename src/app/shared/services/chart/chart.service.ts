import { Injectable } from '@angular/core';
import { ChartType } from '../../models/enums/chart-type';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  getChartDefinition(chartType: ChartType): any {
    switch (chartType) {
      case ChartType.ACTIVITY:
        return this.getActivityChartDefinition();
      case ChartType.CALORIC_INTAKE_BY_MEAL:
        return this.getCaloricIntakeByMealChartDefinition();
      case ChartType.MACRONUTRIENTS:
        return this.getMacronutrientsChartDefinition();
      case ChartType.STEPS:
        return this.getStepsChartDefinition();
      case ChartType.WEIGHT_BMI:
        return this.getWeightBmiChartDefinition();
      default:
        throw new Error(`Unknown chart type: ${chartType}`);
    }
  }

  private getActivityChartDefinition(): any {
    // Stacked Bar Chart
    // return {
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
    // };

    // Line chart
    return {
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
    };
  }

  private getCaloricIntakeByMealChartDefinition(): any {
    // Line Chart
    // return {
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
    // };

    // Bar Chart
    return {
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
    };
  }

  private getMacronutrientsChartDefinition(): any {
    return {
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
        responsive: true,
        autosize: true,
        barmode: 'stack',
        xaxis: {
          title: 'Days of the Week',
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
    };
  }

  private getStepsChartDefinition(): any {
    return {
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
        responsive: true,
        autosize: true,
        xaxis: {
          title: 'Days of the Week',
        },
        yaxis: {
          title: 'Steps',
        },
      },
      config: {
        responsive: true,
        displayModeBar: false,
      } as Partial<Plotly.Config>,
    };
  }

  private getWeightBmiChartDefinition(): any {
    // Bar Chart
    return {
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
    };
  }
}
