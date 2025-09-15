// store/outcomes.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { ClinicOutcomesState } from '../models/outcomes.model';
import { 
  loadOutcomesData, 
  loadOutcomesDataSuccess, 
  loadOutcomesDataFailure,
  loadAdditionalStatisticsSuccess
} from './outcomes.actions';

export const initialState: ClinicOutcomesState = {
  timeInRangeData: null,
  gmiData: null,
  patientCount: 0,
  dateRange: '',
  lastUpdated: '',
  period: '30 days',
  trends: null,
  loading: false,
  error: null
};

export const outcomesReducer = createReducer(
  initialState,
  on(loadOutcomesData, (state, { period }) => ({ 
    ...state, 
    loading: true,
    period,
    error: null 
  })),
  on(loadOutcomesDataSuccess, (state, { timeInRangeData, gmiData, patientCount, dateRange, lastUpdated, period }) => ({
    ...state,
    loading: false,
    timeInRangeData,
    gmiData,
    patientCount,
    dateRange,
    lastUpdated,
    period,
    error: null
  })),
  on(loadOutcomesDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(loadAdditionalStatisticsSuccess, (state, { trends }) => ({
    ...state,
    trends
  }))
);