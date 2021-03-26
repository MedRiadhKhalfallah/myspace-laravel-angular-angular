import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUtilisateurListComponent } from './produit-utilisateur-list.component';

describe('ProduitUtilisateurListComponent', () => {
  let component: ProduitUtilisateurListComponent;
  let fixture: ComponentFixture<ProduitUtilisateurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitUtilisateurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitUtilisateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
