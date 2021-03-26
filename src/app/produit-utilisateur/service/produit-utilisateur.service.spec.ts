import { TestBed } from '@angular/core/testing';

import { ProduitUtilisateurService } from './produit-utilisateur.service';

describe('ProduitUtilisateurService', () => {
  let service: ProduitUtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitUtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
