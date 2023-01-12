import { TestBed } from '@angular/core/testing';

import { CompCommService } from './comp-comm.service';

describe('CompCommService', () => {
  let service: CompCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
