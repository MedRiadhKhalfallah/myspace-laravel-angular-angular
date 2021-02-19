import { TestBed } from '@angular/core/testing';

import { NewProduitService } from './new-produit.service';

describe('NewProduitService', () => {
  let service: NewProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
