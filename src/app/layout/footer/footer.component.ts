import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  applicationName: string = '';
  currentYear: number = 2022;
  url: string = '';

  privacyPolicyUrl: string = '';
  termOfUseUrl: string = '';
  copyRightNoticeUrl: string = '';

  constructor() {
  

  }

  ngOnInit(): void {
  }


  RouteUrl() {
  }

}
