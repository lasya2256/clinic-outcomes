// components/gmi-chart/gmi-chart.component.ts
import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gmi-chart',
  templateUrl: './gmi-chart.component.html',
  styleUrls: ['./gmi-chart.component.css']
})
export class GmiChartComponent implements OnInit, OnChanges, OnDestroy {
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
      type: 'doughnut',
      data: {
        labels: ['<7%', '7-8%', '≥8%'],
        datasets: [{
          data: [this.data.below7, this.data.between7and8, this.data.above8],
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)',    // Teal for <7%
            'rgba(255, 205, 86, 0.8)',    // Yellow for 7-8%
            'rgba(255, 99, 132, 0.8)'     // Red for ≥8%
          ],
          borderColor: [
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              usePointStyle: true,
              pointStyle: 'circle',
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context: any) => `${context.label}: ${context.raw}%`
            }
          }
        }
      }
    });
  }

  updateChart() {
    if (!this.chart || !this.data) return;
    
    this.chart.data.datasets[0].data = [
      this.data.below7, 
      this.data.between7and8, 
      this.data.above8
    ];
    
    this.chart.update();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}