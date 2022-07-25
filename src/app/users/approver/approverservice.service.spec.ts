import { TestBed } from '@angular/core/testing';

import { ApproverserviceService } from './approverservice.service';

describe('ApproverserviceService', () => {
  let service: ApproverserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproverserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
