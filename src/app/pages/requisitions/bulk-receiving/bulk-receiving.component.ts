import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-bulk-receiving',
  templateUrl: './bulk-receiving.component.html',
  styleUrls: ['./bulk-receiving.component.css']
})
export class BulkReceivingComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.pageTitle = "Bulk Receiving";
    this.layoutService.componentTitle = "Bulk Receiving Management";
  }

}
