// services/time-in-range-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { TimeInRangeApiResponse } from '../models/outcomes.model';
import { ClinicOutcomesData } from '../../assets/data/clinic-outcomes-data';

@Injectable({
  providedIn: 'root'
})
export class TimeInRangeApiService {

  constructor(private http: HttpClient) { }

  // HTTP CALL (A) - For Time in Range chart with period parameter
  getTimeInRangeData(period: string = '30 days'): Observable<TimeInRangeApiResponse> {
    // Find data for the selected period
    const periodData = ClinicOutcomesData.timePeriods.find(p => p.period === period);
    
    if (!periodData) {
      throw new Error(`Data not found for period: ${period}`);
    }

    const mockResponse: TimeInRangeApiResponse = {
      data: periodData.timeInRange,
      patientCount: periodData.patientCount,
      dateRange: periodData.dateRange,
      lastUpdated: periodData.lastUpdated
    };

    // Simulate API delay with random response time
    const delayTime = Math.random() * 1000 + 500; // 500-1500ms
    return of(mockResponse).pipe(delay(delayTime));
  }

  // Additional method to get time series data for trends
  getTimeInRangeTrends(): Observable<any> {
    const trends = ClinicOutcomesData.patientStatistics.trends.timeInRange;
    return of(trends).pipe(delay(800));
  }
}