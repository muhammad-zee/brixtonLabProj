import {Component,HostListener,OnInit,Inject,ElementRef, ViewChild} from '@angular/core';
import {BehaviorSubject,Observable} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {



  constructor(@Inject(DOCUMENT) private document: Document,
  public layoutService:LayoutService) {
  }



  onWindowScroll(e: Event) {

    let scroll = (e.target as Element).scrollTop;
    let offsetHeight = document.getElementById('header')!.offsetHeight;
    var contentHeight = scroll - offsetHeight;
    if (contentHeight > 20) {
      let element = this.document.getElementById('header');
      let elem2 = this.document.getElementById('side-nav');
      element?.classList.add('fixed-header');
      if (elem2?.classList.contains('mat-drawer-opened')) {
        element?.classList.remove('w-full');
      } else {
        element?.classList.add('w-full');
      }
    }
    else if (scroll == 0) {
      let element = this.document.getElementById('header');
      element?.classList.remove('fixed-header');
      element?.classList.remove('w-full');
    }
  }


  


  ngOnInit(): void {

  }

}
