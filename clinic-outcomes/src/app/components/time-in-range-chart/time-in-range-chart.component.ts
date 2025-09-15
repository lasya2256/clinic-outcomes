// components/time-in-range-chart/time-in-range-chart.component.ts
import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-in-range-chart',
  templateUrl: './time-in-range-chart.component.html',
  styleUrls: ['./time-in-range-chart.component.css']
})
export class TimeInRangeChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: any;
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef;
  chart: any;

  ngOnInit(): void {
    if (this.data) {
      setTimeout(() => this.createChart(), 100);
    }
  }

  ngOnChanges(): void {
    if (this.data) {
      if (this.chart) {
        this.updateChart();
      } else {
        this.createChart();
      }
    }
  }

  createChart() {
    if (!this.data || !this.chartCanvas) return;

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Very Low', 'Low', 'In Range', 'High'],
        datasets: [{
          data: [this.data.veryLow, this.data.low, this.data.inRange, this.data.high],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',    // Red for Very Low
            'rgba(255, 159, 64, 0.8)',    // Orange for Low
            'rgba(75, 192, 192, 0.8)',    // Teal for In Range
            'rgba(255, 205, 86, 0.8)'     // Yellow for High
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)'
          ],
          borderWidth: 1,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        }]
      },
      options: {
        // REMOVED indexAxis: 'y' to make bars vertical
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context: any) => `${context.raw}%`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: (value: any) => `${value}%`,
              stepSize: 20
            },
            grid: {
              display: true
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  updateChart() {
    if (!this.chart || !this.data) return;
    
    this.chart.data.datasets[0].data = [
      this.data.veryLow, 
      this.data.low, 
      this.data.inRange, 
      this.data.high
    ];
    
    this.chart.update();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}