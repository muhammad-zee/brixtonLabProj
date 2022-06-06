import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, HostListener, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LayoutService } from '../services/layout.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  elem: any; isFullScreen!: boolean;

  username!: string;
  initials!: string;
  role!: string;
  dropdown: boolean = false;
  _userData!: any;
  organizations: any;
  selectedOrganizationId: any;
  subscriptions: Subscription[] = [];
  imageUrl = 'assets/images/dashboard-images/doctor-1.jpg';

  isMDRouteCall: boolean = false;

  applicationName: string = '';
  url: string = '';

  @Input() showToggle!: boolean;

  @Output() sideNavToggle = new EventEmitter<any>();


  isUserProfile: boolean = false;
  // isChangePassword: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any,
  public layoutService:LayoutService) {

  }

  ngOnInit(): void {
    this.elem = document.documentElement;
  }


  ngOnDestroy() {
    this.subscriptions.forEach(x => {
      x.unsubscribe();
    });
  }

showProfileSettingBox(){
  this.layoutService.ShowProfileSettingBox=!this.layoutService.ShowProfileSettingBox; 
}
 
toggleSideNav(){
  if(this.layoutService.showSideNav == 'on'){
      this.layoutService.showSideNav = 'off'
  }
  else{
      this.layoutService.showSideNav = 'on'
  }
}
}
