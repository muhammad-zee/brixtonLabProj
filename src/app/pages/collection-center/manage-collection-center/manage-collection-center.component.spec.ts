import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCollectionCenterComponent } from './manage-collection-center.component';

describe('ManageCollectionCenterComponent', () => {
  let component: ManageCollectionCenterComponent;
  let fixture: ComponentFixture<ManageCollectionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCollectionCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCollectionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
