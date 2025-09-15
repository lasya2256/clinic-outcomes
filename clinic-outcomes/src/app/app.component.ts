// app.component.ts
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clinic Outcomes';

  constructor() {
    // Register Chart.js components and the datalabels plugin
    Chart.register(...registerables, ChartDataLabels);
  }
}