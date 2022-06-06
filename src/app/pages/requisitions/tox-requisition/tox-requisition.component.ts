import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-tox-requisition',
  templateUrl: './tox-requisition.component.html',
  styleUrls: ['./tox-requisition.component.css']
})
export class ToxRequisitionComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.pageTitle = "TOX Requisition";
    this.layoutService.componentTitle = "Add TOX Requisition";
  }

}
