
import { NgModule } from '@angular/core';

import '@angular/compiler'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// get http service to work, the forecast service and model to hold the data from the forecast service has already been created
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule { }
