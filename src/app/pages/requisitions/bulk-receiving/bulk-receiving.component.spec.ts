import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReceivingComponent } from './bulk-receiving.component';

describe('BulkReceivingComponent', () => {
  let component: BulkReceivingComponent;
  let fixture: ComponentFixture<BulkReceivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkReceivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
