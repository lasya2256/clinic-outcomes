// store/outcomes.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ClinicOutcomesState } from '../models/outcomes.model';

export const selectOutcomesState = createFeatureSelector<ClinicOutcomesState>('outcomes');

export const selectTimeInRangeData = createSelector(
  selectOutcomesState,
  (state) => state.timeInRangeData
);

export const selectGmiData = createSelector(
  selectOutcomesState,
  (state) => state.gmiData
);

export const selectPatientCount = createSelector(
  selectOutcomesState,
  (state) => state.patientCount
);

export const selectDateRange = createSelector(
  selectOutcomesState,
  (state) => state.dateRange
);

export const selectLastUpdated = createSelector(
  selectOutcomesState,
  (state) => state.lastUpdated
);

export const selectLoading = createSelector(
  selectOutcomesState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectOutcomesState,
  (state) => state.error
);

export const selectPeriod = createSelector(
  selectOutcomesState,
  (state) => state.period
);

export const selectTrends = createSelector(
  selectOutcomesState,
  (state) => state.trends
);