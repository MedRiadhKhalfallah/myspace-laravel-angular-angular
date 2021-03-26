import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUtilisateurIndexComponent } from './produit-utilisateur-index.component';

describe('ProduitUtilisateurIndexComponent', () => {
  let component: ProduitUtilisateurIndexComponent;
  let fixture: ComponentFixture<ProduitUtilisateurIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitUtilisateurIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitUtilisateurIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
