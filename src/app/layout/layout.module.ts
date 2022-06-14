import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { PanelMenuModule } from 'primeng/panelmenu';


// Primeng

import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Modules } from '../enums/enum';

const routes: Routes = [
    {
        path: '', component: BodyComponent,
        children: [
            { path: '', redirectTo:Modules.Dashboard },
            { path: Modules.Dashboard , loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: Modules.Requisitions, loadChildren: () => import('src/app/pages/requisitions/requisitions.module').then(m => m.RequisitionsModule) },
            { path: Modules.CollectionCenter, loadChildren: () => import('src/app/pages/collection-center/collection-center.module').then(m => m.CollectionCenterModule) },
            { path: Modules.Patients, loadChildren: () => import('src/app/pages/patients/patients.module').then(m => m.PatientsModule) },
            { path: Modules.Setting, loadChildren: () => import('src/app/pages/setting/setting.module').then(m => m.SettingModule) },
            { path: Modules.Support, loadChildren: () => import('src/app/pages/support/support.module').then(m => m.SupportModule) },
            

        ]
     
    }
];


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        SidenavComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatSidenavModule,
        PanelMenuModule,
        ToastModule,
        TieredMenuModule,
        MenubarModule
       
    ],
    providers: [MessageService]
})
export class LayoutModule { }
