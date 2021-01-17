import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSearshComponent } from './produit-searsh.component';

describe('ProduitSearshComponent', () => {
  let component: ProduitSearshComponent;
  let fixture: ComponentFixture<ProduitSearshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitSearshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitSearshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
