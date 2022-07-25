import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverloginComponent } from './approverlogin.component';

describe('ApproverloginComponent', () => {
  let component: ApproverloginComponent;
  let fixture: ComponentFixture<ApproverloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproverloginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApproverloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
