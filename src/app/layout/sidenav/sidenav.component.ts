import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Modules } from 'src/app/enums/enum';
import { LayoutService } from '../services/layout.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

   
    finalMenu: any;
    applicationName: string = '';
    url: string = '';
    navOptList:any=Modules;
    constructor(private router: Router,
        public layoutService:LayoutService,
        private activatedRoute: ActivatedRoute) {


    }

    items: MenuItem[]=[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                            {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                        ]
                    },
                    {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'pi pi-fw pi-times'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search', 
                        icon: 'pi pi-pi pi-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];
        this.finalMenu=this.mainMenu;
    }
 

    ngOnDestroy(): void {
       
    }

    toggleSideNav(){
        debugger
        if(this.layoutService.showSideNav == 'on'){
            this.layoutService.showSideNav = 'off'
        }
        else{
            this.layoutService.showSideNav = 'on'
        }
    }
    changeRouter(value: any) {
        this.router.navigate([value])
    }
   
    navClick(option:string){
        this.layoutService.navOptions[option]=!this.layoutService.navOptions[option]
    }
    get navOptions(){
       return this.layoutService.navOptions;
    }

    requisitionMenu: MenuItem[] = [

        {
            label: 'View Requisitions',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Requisitions}/${Modules.ManageRequisitions}`)
        },
        {
            label: 'Blood',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Requisitions}/${Modules.BloodRequisitions}`)
        },
        {
            label: 'Infectious Desease',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Requisitions}/${Modules.InfectiousDeseaseRequisitions}`)
        },
        {
            label: 'TOX',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Requisitions}/${Modules.TOXRequisitions}`)
        },
        {
            label: 'Bulk Receiving',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Requisitions}/${Modules.BulkReceiving}`)
        },
        {
            label: 'Billing',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Requisitions}/${Modules.Billing}`)
        },
    ]
    
    settingMenu: MenuItem[] = [

        {
            label: 'Users',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Setting}/${Modules.UserSettings}`)
        },
        {
            label: 'Blood',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Setting}/${Modules.NotificationSettings}`)
        },
        {
            label: 'Infectious Desease',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Setting}/${Modules.PerformingLabSettings}`)
        },
    ]
       
    LISMenu: MenuItem[] = [

        {
            label: 'Blood',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            items: [
                {
                    label: 'Resulting',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.Blood}/${Modules.Resulting}`)
                },
                {
                    label: 'Compendium',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.Blood}/${Modules.Compendium}`)
                },
                {
                    label: 'Setting',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.Blood}/${Modules.Setting}`)
                }
            ]
        },
        {
            label: 'Infectious Desease',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            items: [
                {
                    label: 'Resulting',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.InfectiousDesease}/${Modules.Resulting}`)
                },
                {
                    label: 'Compendium',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.InfectiousDesease}/${Modules.Compendium}`)
                },
                {
                    label: 'Setting',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.InfectiousDesease}/${Modules.Setting}`)
                }
            ]
        },
        {
            label: 'TOX',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            items: [
                {
                    label: 'Resulting',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.TOX}/${Modules.Resulting}`)
                },
                {
                    label: 'Compendium',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.TOX}/${Modules.Compendium}`)
                },
                {
                    label: 'Setting',
                    // icon: 'pi pi-desktop',
                    icon: 'dashboard-icon side-icons',
                    styleClass: 'custom-design',
                    command: e => this.changeRouter(`/${Modules.LIS}/${Modules.TOX}/${Modules.Setting}`)
                }
            ]
        },
    ]

      
    patientsMenu: MenuItem[] = [

        {
            label: 'Users',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Patients}`)
        }
    ]  
    collectionCenterMenu: MenuItem[] = [

        {
            label: 'Manage',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.CollectionCenter}/${Modules.ManageCollectionCenter}`)
        },
        
        {
            label: 'Users',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.CollectionCenter}/${Modules.Users}`)
        }
    ]
    mainMenu: MenuItem[] = [
        {
            label: 'Dashboard',
            // icon: 'pi pi-desktop',
            icon: 'dashboard-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Dashboard}`),
        },
        {
            label: 'Collection Center',
            // icon: 'pi pi-calendar-plus',
            icon: 'schedule-icon side-icons',
            styleClass: 'custom-design',
            items:this.collectionCenterMenu
        },
        {
            label: 'Requisitions',
            // icon: 'pi pi-comment',
            icon: 'chat-icon side-icons',
            styleClass: 'custom-design',
            // command: e => this.changeRouter(`/${Modules.Requisitions}`)
            items:this.requisitionMenu
        },
        {
            label: 'Settings',
            // icon: 'pi pi-slack',
            icon: 'consult-icon side-icons',
            styleClass: 'custom-design',
            items:this.settingMenu
        },
        {
            label: 'LIS',
            // icon: 'pi pi-car',
            icon: 'ems-icon side-icons',
            styleClass: 'custom-design',
           items:this.LISMenu
        }
        ,
        {
            label: 'Patients',
            // icon: 'pi pi-code',
            icon: 'activate-code-icon side-icons',
            styleClass: 'custom-design',
            items:this.patientsMenu
        }
        ,
        {
            label: 'Support',
            // icon: 'pi pi-code',
            icon: 'communication-log-icon side-icons',
            styleClass: 'custom-design',
            command: e => this.changeRouter(`/${Modules.Support}`)
        }
    ]

    activeMenu(event: any) {
        let node;
        if (event.target.classList.contains("p-submenu-header") == true) {
            node = "submenu";
        }
        else if (event.target.tagName === "SPAN") {
            node = event.target.parentNode.parentNode;
        } else {
            node = event.target.parentNode;
        }
        if (node != "submenu") {
            let menuitem = document.getElementsByClassName("p-menuitem");
            for (let i = 0; i < menuitem.length; i++) {
                menuitem[i].classList.remove("active");
            }
            node.classList.add("active");
        }
        // this.activeCodeService._showPopUp = true;
        /////////// InHouse Codes Component ///////////////////
        // if (event.target.classList.contains("activate-code-icon") == true && this.dataService.activeCodeComponent && this.dataService.activeCodeComponent.router._routerState.snapshot.url == this.router.url) {
        //     this.dataService.activeCodeComponent.ngOnInit();
        // }
    }
}
