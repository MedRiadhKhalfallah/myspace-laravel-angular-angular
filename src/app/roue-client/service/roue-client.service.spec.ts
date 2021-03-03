import { TestBed } from '@angular/core/testing';

import { RoueClientService } from './roue-client.service';

describe('RoueClientService', () => {
  let service: RoueClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoueClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
