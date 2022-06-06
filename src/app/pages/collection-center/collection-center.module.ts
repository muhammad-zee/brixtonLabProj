import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCollectionCenterComponent } from './manage-collection-center/manage-collection-center.component';
import { RouterModule, Routes } from '@angular/router';
import { Modules } from 'src/app/enums/enum';
import { CollectionCenterComponent } from './collection-center/collection-center.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: "", component: ManageCollectionCenterComponent,
    children:[
      {path:"", redirectTo: Modules.ManageCollectionCenter},
      {path:Modules.ManageCollectionCenter ,component:ManageCollectionCenterComponent},
      {path:Modules.Users ,component:UsersComponent}
    ]
  }
]


@NgModule({
  declarations: [
    ManageCollectionCenterComponent,
    CollectionCenterComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CollectionCenterModule { }
