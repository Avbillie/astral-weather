import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SevenDayForecastComponent } from './seven-day-forecast/seven-day-forecast.component';


const sevenDayForecastRoutes: Routes = [
  {
    path: '',
    component: SevenDayForecastComponent,
  },
  // {
  //   path:'', redirectTo: 'dashboard', pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(sevenDayForecastRoutes)],
  exports: [RouterModule],
})
export class SevenDayForecastRoutingModule {}
