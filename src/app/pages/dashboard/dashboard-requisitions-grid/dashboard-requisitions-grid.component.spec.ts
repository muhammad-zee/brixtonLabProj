import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequisitionsGridComponent } from './dashboard-requisitions-grid.component';

describe('DashboardRequisitionsGridComponent', () => {
  let component: DashboardRequisitionsGridComponent;
  let fixture: ComponentFixture<DashboardRequisitionsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRequisitionsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequisitionsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
