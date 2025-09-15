// store/outcomes.actions.ts
import { createAction, props } from '@ngrx/store';
import { TimeInRangeData, GmiData } from '../models/outcomes.model';

export const loadOutcomesData = createAction(
  '[Outcomes] Load Data',
  props<{ period: string }>()
);

export const loadOutcomesDataSuccess = createAction(
  '[Outcomes] Load Data Success',
  props<{ 
    timeInRangeData: TimeInRangeData; 
    gmiData: GmiData;
    patientCount: number;
    dateRange: string;
    lastUpdated: string;
    period: string;
  }>()
);

export const loadOutcomesDataFailure = createAction(
  '[Outcomes] Load Data Failure',
  props<{ error: string }>()
);

export const loadAdditionalStatistics = createAction('[Outcomes] Load Additional Statistics');
export const loadAdditionalStatisticsSuccess = createAction(
  '[Outcomes] Load Additional Statistics Success',
  props<{ trends: any }>()
);