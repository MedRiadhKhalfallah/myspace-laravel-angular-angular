import { TestBed } from '@angular/core/testing';

import { RoueChanceService } from './roue-chance.service';

describe('RoueChanceService', () => {
  let service: RoueChanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoueChanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
