// components/clinic-outcomes/clinic-outcomes.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadOutcomesData } from '../../store/outcomes.actions';
import { 
  selectTimeInRangeData, 
  selectGmiData, 
  selectPatientCount, 
  selectDateRange, 
  selectLastUpdated,
  selectLoading,
  selectError 
} from '../../store/outcomes.selectors';
import { TimeInRangeData, GmiData } from '../../models/outcomes.model';

@Component({
  selector: 'app-clinic-outcomes',
  templateUrl: './clinic-outcomes.component.html',
  styleUrls: ['./clinic-outcomes.component.css']
})
export class ClinicOutcomesComponent implements OnInit {
  timeInRangeData$: Observable<TimeInRangeData | null>;
  gmiData$: Observable<GmiData | null>;
  patientCount$: Observable<number>;
  dateRange$: Observable<string>;
  lastUpdated$: Observable<string>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  selectedPeriod = '30 days';

  constructor(private store: Store) {
    this.timeInRangeData$ = this.store.select(selectTimeInRangeData);
    this.gmiData$ = this.store.select(selectGmiData);
    this.patientCount$ = this.store.select(selectPatientCount);
    this.dateRange$ = this.store.select(selectDateRange);
    this.lastUpdated$ = this.store.select(selectLastUpdated);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadOutcomesData({ period: this.selectedPeriod }));
  }

  selectTimePeriod(period: string): void {
    this.selectedPeriod = period;
    this.store.dispatch(loadOutcomesData({ period }));
  }
}