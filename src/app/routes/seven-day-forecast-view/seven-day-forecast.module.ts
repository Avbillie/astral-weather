
import { NgModule } from '@angular/core';

import '@angular/compiler'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SevenDayForecastComponent } from './seven-day-forecast/seven-day-forecast.component';
import { SevenDayForecastRoutingModule } from './seven-day-forecast-routing.module';

// get http service to work, the forecast service and model to hold the data from the forecast service has already been created
@NgModule({
  declarations: [
    SevenDayForecastComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SevenDayForecastRoutingModule
  ],
})
export class  SevenDayForecastModule { }
