import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';


// Primeng
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SpeedDialModule } from 'primeng/speeddial';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { OrderListModule } from 'primeng/orderlist';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
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
