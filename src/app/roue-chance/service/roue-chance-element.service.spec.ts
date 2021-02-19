import { TestBed } from '@angular/core/testing';

import { RoueChanceElementService } from './roue-chance-element.service';

describe('RoueChanceElementService', () => {
  let service: RoueChanceElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoueChanceElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
