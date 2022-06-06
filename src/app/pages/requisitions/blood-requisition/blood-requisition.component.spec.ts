import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequisitionComponent } from './blood-requisition.component';

describe('BloodRequisitionComponent', () => {
  let component: BloodRequisitionComponent;
  let fixture: ComponentFixture<BloodRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodRequisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
