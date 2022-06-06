import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardRequisitionsGridComponent } from './dashboard-requisitions-grid/dashboard-requisitions-grid.component';



const routes: Routes = [
  { path: '', component: DashboardLayoutComponent }
]


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardCardsComponent,
    DashboardChartsComponent,
    DashboardLayoutComponent,
    DashboardRequisitionsGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HighchartsChartModule
  ]
})
export class DashboardModule { }
