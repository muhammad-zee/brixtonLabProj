import { Component, OnInit } from '@angular/core';
import { Modules } from 'src/app/enums/enum';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-collection-center',
  templateUrl: './collection-center.component.html',
  styleUrls: ['./collection-center.component.css']
})
export class CollectionCenterComponent implements OnInit {

  constructor(
    private layoutService:LayoutService
  ) {
  }
  
  ngOnInit(): void {
   
  }

}
