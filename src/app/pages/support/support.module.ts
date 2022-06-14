import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support/support.component';
import { RouterModule,Routes } from '@angular/router';
import { Modules } from 'src/app/enums/enum';
import {AccordionModule} from 'primeng/accordion';


const routes: Routes = [
  {
    path: "", component: SupportComponent,
    // children: [
    //   { path: "", redirectTo : Modules.Support },
    //   { path: Modules.Support, component: SupportComponent },
      
    // ]
  }

];

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AccordionModule
  ]
})
export class SupportModule { }
