// services/chart.service.ts
import { Injectable } from '@angular/core';
import { Chart, ChartType, ChartData, ChartOptions, registerables } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  constructor() {
    // Register all Chart.js components
    Chart.register(...registerables);
  }
  
  createBarChart(
    canvas: HTMLCanvasElement, 
    labels: string[], 
    data: number[], 
    colors: string[]
  ): Chart {
    const chartData: ChartData = {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.7', '1')),
        borderWidth: 1,
        barPercentage: 0.6,
      }]
    };

    const options: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label}: ${context.raw}%`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value) => `${value}%`
          }
        },
        x: {
          grid: { display: false }
        }
      }
    };

    return new Chart(canvas, {
      type: 'bar',
      data: chartData,
      options: options
    });
  }

  createPieChart(
    canvas: HTMLCanvasElement,
    labels: string[],
    data: number[],
    colors: string[]
  ): Chart {
    const chartData: ChartData = {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.7', '1')),
        borderWidth: 1
      }]
    };

    const options: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            usePointStyle: true,
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label}: ${context.raw}%`
          }
        }
      }
    };

    return new Chart(canvas, {
      type: 'pie',
      data: chartData,
      options: options
    });
  }
}