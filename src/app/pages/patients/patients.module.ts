import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePatientsComponent } from './manage-patients/manage-patients.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';


const routes: Routes = [
  {
    path: "", component: PatientProfileComponent,
    // children: [
    //   { path: '', redirectTo: Modules.Requisitions },
    //   { path: Modules.InfectiousDeseaseRequisitions, component: InfectiousDeseaseRequisitionComponent },
    //   { path: Modules.BloodRequisitions, component: BloodRequisitionComponent },

    // ]
  }
]


@NgModule({
  declarations: [
    ManagePatientsComponent,
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
RouterModule.forChild(routes),
TabViewModule
  ]
})
export class PatientsModule { }
