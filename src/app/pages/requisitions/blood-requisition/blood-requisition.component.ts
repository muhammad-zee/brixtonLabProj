import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-blood-requisition',
  templateUrl: './blood-requisition.component.html',
  styleUrls: ['./blood-requisition.component.css']
})
export class BloodRequisitionComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.pageTitle = "Blood Requisition";
    this.layoutService.componentTitle = "Add Blood Requisition";
  }

}
