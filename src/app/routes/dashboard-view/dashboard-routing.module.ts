import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // {
  //   path:'', redirectTo: 'dashboard', pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
