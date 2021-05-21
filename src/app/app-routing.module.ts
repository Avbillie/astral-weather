import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./routes/dashboard-view/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'sevenDayForecast',
    loadChildren: () => import('./routes/seven-day-forecast-view/seven-day-forecast.module').then(m => m.SevenDayForecastModule),
  },
  {
    path:'', redirectTo: 'dashboard', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
