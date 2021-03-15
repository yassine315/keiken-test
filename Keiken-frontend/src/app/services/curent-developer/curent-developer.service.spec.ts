import { TestBed } from '@angular/core/testing';

import { CurentDeveloperService } from './curent-developer.service';

describe('CurentDeveloperService', () => {
  let service: CurentDeveloperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurentDeveloperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
