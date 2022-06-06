import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectiousDeseaseRequisitionComponent } from './infectious-desease-requisition.component';

describe('InfectiousDeseaseRequisitionComponent', () => {
  let component: InfectiousDeseaseRequisitionComponent;
  let fixture: ComponentFixture<InfectiousDeseaseRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectiousDeseaseRequisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectiousDeseaseRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
