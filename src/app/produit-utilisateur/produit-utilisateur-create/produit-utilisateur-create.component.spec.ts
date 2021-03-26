import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUtilisateurCreateComponent } from './produit-utilisateur-create.component';

describe('ProduitUtilisateurCreateComponent', () => {
  let component: ProduitUtilisateurCreateComponent;
  let fixture: ComponentFixture<ProduitUtilisateurCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitUtilisateurCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitUtilisateurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
