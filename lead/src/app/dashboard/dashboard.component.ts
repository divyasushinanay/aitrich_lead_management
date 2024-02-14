import { Component, OnInit } from '@angular/core';
import { Chart, registerables, ChartTypeRegistry } from 'chart.js/auto'; // Import from 'chart.js/auto'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.RenderChart('myChart1', 'line', ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], [12, 19, 3, 5, 2, 3]);
    this.RenderChart('myChart2', 'bar', ['A', 'B', 'C', 'D', 'E'], [10, 20, 30, 40, 50]);
    this.RenderChart('myChart3', 'bar', ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], [12, 19, 3, 5, 2, 3]);
    this.RenderChart('myChart4', 'line', ['A', 'B', 'C', 'D', 'E'], [10, 20, 30, 40, 50]);
  }

  RenderChart(id: string, chartType: keyof ChartTypeRegistry, labels: string[], data: number[]) {
    const ctx = document.getElementById(id) as HTMLCanvasElement;
    new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: [{
          label: '# of Votes',
          data: data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
