// services/outcomes.service.ts
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TimeInRangeApiService } from './time-in-range-api.service';
import { GmiApiService } from './gmi-api.service';

@Injectable({
  providedIn: 'root'
})
export class OutcomesService {

  constructor(
    private timeInRangeApi: TimeInRangeApiService,
    private gmiApi: GmiApiService
  ) { }

  // Combined API call for both charts with period parameter
  getOutcomesData(period: string = '30 days') {
    return forkJoin({
      timeInRange: this.timeInRangeApi.getTimeInRangeData(period),
      gmi: this.gmiApi.getGmiData(period)
    });
  }

  // Get additional statistics
  getAdditionalStatistics() {
    return forkJoin({
      timeInRangeTrends: this.timeInRangeApi.getTimeInRangeTrends(),
      gmiTrends: this.gmiApi.getGmiTrends()
    });
  }
}