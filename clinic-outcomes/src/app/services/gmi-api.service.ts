// services/gmi-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GmiApiResponse } from '../models/outcomes.model';
import { ClinicOutcomesData } from '../../assets/data/clinic-outcomes-data';

@Injectable({
  providedIn: 'root'
})
export class GmiApiService {

  constructor(private http: HttpClient) { }

  // HTTP CALL (B) - For GMI chart with period parameter
  getGmiData(period: string = '30 days'): Observable<GmiApiResponse> {
    // Find data for the selected period
    const periodData = ClinicOutcomesData.timePeriods.find(p => p.period === period);
    
    if (!periodData) {
      throw new Error(`Data not found for period: ${period}`);
    }

    const mockResponse: GmiApiResponse = {
      data: periodData.gmi,
      patientCount: periodData.patientCount,
      dateRange: periodData.dateRange,
      lastUpdated: periodData.lastUpdated
    };

    // Simulate API delay with random response time
    const delayTime = Math.random() * 1000 + 500; // 500-1500ms
    return of(mockResponse).pipe(delay(delayTime));
  }

  // Additional method to get GMI trends
  getGmiTrends(): Observable<any> {
    const trends = ClinicOutcomesData.patientStatistics.trends.gmi;
    return of(trends).pipe(delay(800));
  }
}