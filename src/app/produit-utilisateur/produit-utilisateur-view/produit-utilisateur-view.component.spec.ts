import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUtilisateurViewComponent } from './produit-utilisateur-view.component';

describe('ProduitUtilisateurViewComponent', () => {
  let component: ProduitUtilisateurViewComponent;
  let fixture: ComponentFixture<ProduitUtilisateurViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitUtilisateurViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitUtilisateurViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
