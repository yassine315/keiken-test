import { TestBed } from '@angular/core/testing';

import { ChargeDataService } from './charge.data.service';

describe('Charge.DataService', () => {
  let service: ChargeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
