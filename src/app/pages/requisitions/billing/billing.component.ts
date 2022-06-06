import { Component, OnInit } from '@angular/core';
import { Modules } from 'src/app/enums/enum';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private layoutService: LayoutService) {
   }

  ngOnInit(): void {
    debugger
    this.layoutService.pageTitle = Modules.Billing;
    this.layoutService.componentTitle = "Billing Management";
  }

}
