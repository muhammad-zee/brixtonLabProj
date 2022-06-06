import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.css']
})
export class ManagePatientsComponent implements OnInit {

  constructor(private layoutService:LayoutService) { }

  ngOnInit(): void {
    this.layoutService.pageTitle="Patients";
    this.layoutService.componentTitle="View Patients";
  }

}
