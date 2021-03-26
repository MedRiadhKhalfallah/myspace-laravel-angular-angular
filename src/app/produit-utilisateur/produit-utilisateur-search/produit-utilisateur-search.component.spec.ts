import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUtilisateurSearchComponent } from './produit-utilisateur-search.component';

describe('ProduitUtilisateurSearchComponent', () => {
  let component: ProduitUtilisateurSearchComponent;
  let fixture: ComponentFixture<ProduitUtilisateurSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitUtilisateurSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitUtilisateurSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
