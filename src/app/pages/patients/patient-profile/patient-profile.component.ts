import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  accountInfoTabName:string="personalInfoTab";
  constructor(private layoutService:LayoutService) { }


  ngOnInit(): void {
    
    this.layoutService.pageTitle="Patients";
    this.layoutService.componentTitle="Patient Profile";
  }
  
  changeAccountInfoTab(tabName:any){
    this.accountInfoTabName=tabName;
  }
}
