import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestaffComponent } from './managestaff.component';

describe('ManagestaffComponent', () => {
  let component: ManagestaffComponent;
  let fixture: ComponentFixture<ManagestaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagestaffComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ManagestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
