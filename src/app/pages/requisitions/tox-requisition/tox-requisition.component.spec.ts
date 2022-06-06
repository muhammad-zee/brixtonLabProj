import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxRequisitionComponent } from './tox-requisition.component';

describe('ToxRequisitionComponent', () => {
  let component: ToxRequisitionComponent;
  let fixture: ComponentFixture<ToxRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToxRequisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
