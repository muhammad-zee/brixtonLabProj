import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-infectious-desease-requisition',
  templateUrl: './infectious-desease-requisition.component.html',
  styleUrls: ['./infectious-desease-requisition.component.css']
})
export class InfectiousDeseaseRequisitionComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.pageTitle = "ID Requisition";
    this.layoutService.componentTitle = "Add ID Requisition";
  }

}
