import { Component, OnInit } from '@angular/core';
import { Modules } from 'src/app/enums/enum';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-manage-collection-center',
  templateUrl: './manage-collection-center.component.html',
  styleUrls: ['./manage-collection-center.component.css']
})
export class ManageCollectionCenterComponent implements OnInit {

  constructor(private layoutService:LayoutService) { }

  ngOnInit(): void {
    this.layoutService.pageTitle=Modules.CollectionCenter
    this.layoutService.componentTitle="Add Collection Center"
  }

}
