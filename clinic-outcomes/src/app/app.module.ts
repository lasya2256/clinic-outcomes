// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ClinicOutcomesComponent } from './components/clinic-outcomes/clinic-outcomes.component';
import { TimeInRangeChartComponent } from './components/time-in-range-chart/time-in-range-chart.component';
import { GmiChartComponent } from './components/gmi-chart/gmi-chart.component';

import { outcomesReducer } from './store/outcomes.reducer';
import { OutcomesEffects } from './store/outcomes.effects';
import { OutcomesService } from './services/outcomes.service';
import { TimeInRangeApiService } from './services/time-in-range-api.service';
import { GmiApiService } from './services/gmi-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ClinicOutcomesComponent,
    TimeInRangeChartComponent,
    GmiChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ outcomes: outcomesReducer }),
    EffectsModule.forRoot([OutcomesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [
    OutcomesService,
    TimeInRangeApiService,
    GmiApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }