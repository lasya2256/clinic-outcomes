// store/outcomes.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OutcomesService } from '../services/outcomes.service';
import { 
  loadOutcomesData, 
  loadOutcomesDataSuccess, 
  loadOutcomesDataFailure,
  loadAdditionalStatistics,
  loadAdditionalStatisticsSuccess
} from './outcomes.actions';

@Injectable()
export class OutcomesEffects {
  loadOutcomesData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOutcomesData),
      mergeMap(({ period }) =>
        this.outcomesService.getOutcomesData(period).pipe(
          map(({ timeInRange, gmi }) => {
            return loadOutcomesDataSuccess({ 
              timeInRangeData: timeInRange.data,
              gmiData: gmi.data,
              patientCount: timeInRange.patientCount,
              dateRange: timeInRange.dateRange,
              lastUpdated: timeInRange.lastUpdated,
              period
            });
          }),
          catchError((error) => of(loadOutcomesDataFailure({ error: error.message })))
        )
      )
    )
  );

  loadAdditionalStatistics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAdditionalStatistics),
      mergeMap(() =>
        this.outcomesService.getAdditionalStatistics().pipe(
          map(({ timeInRangeTrends, gmiTrends }) => {
            return loadAdditionalStatisticsSuccess({
              trends: { timeInRangeTrends, gmiTrends }
            });
          }),
          catchError((error) => of(loadOutcomesDataFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private outcomesService: OutcomesService
  ) {}
}