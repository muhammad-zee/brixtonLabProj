import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodRequisitionComponent } from './blood-requisition/blood-requisition.component';
import { InfectiousDeseaseRequisitionComponent } from './infectious-desease-requisition/infectious-desease-requisition.component';
import { ToxRequisitionComponent } from './tox-requisition/tox-requisition.component';
import { BulkReceivingComponent } from './bulk-receiving/bulk-receiving.component';
import { BillingComponent } from './billing/billing.component';
import { RouterModule, Routes } from '@angular/router';
import { Modules } from 'src/app/enums/enum';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageRequisitionsComponent } from './manage-requisitions/manage-requisitions.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RequisitionsComponent } from './requisitions/requisitions.component';


import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: "", component: RequisitionsComponent,
    children: [
      { path: "", redirectTo : Modules.ManageRequisitions },
      { path: Modules.ManageRequisitions, component: ManageRequisitionsComponent },
      { path: Modules.InfectiousDeseaseRequisitions, component: InfectiousDeseaseRequisitionComponent },
      { path: Modules.BloodRequisitions, component: BloodRequisitionComponent },
      { path: Modules.TOXRequisitions, component: ToxRequisitionComponent },
      { path: Modules.BulkReceiving, component: BulkReceivingComponent },
      { path: Modules.Billing, component: BillingComponent }

    ]
  }

];


@NgModule({
  declarations: [
    ManageRequisitionsComponent,
    BloodRequisitionComponent,
    InfectiousDeseaseRequisitionComponent,
    ToxRequisitionComponent,
    BulkReceivingComponent,
    BillingComponent,
    RequisitionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TabViewModule,
    SharedModule,
    MatMenuModule,
    MatIconModule,
    TableModule,
    MultiSelectModule,
    FormsModule
  ]
})
export class RequisitionsModule { }
