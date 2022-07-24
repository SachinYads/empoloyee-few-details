import { TestBed } from '@angular/core/testing';

import { EmpoloyeService } from './empoloyee.service';

describe('EmpoloyeeService', () => {
  let service: EmpoloyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoloyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
