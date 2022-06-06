import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  showSideNav: any = 'off';
  pageTitle:string='Dashboard';
  componentTitle:string='Reports & Statistics';

  navOptions:any={}
  ShowProfileSettingBox:boolean=false;
  constructor() { }
}
