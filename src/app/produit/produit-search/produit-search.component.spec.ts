import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSearchComponent } from './produit-search.component';

describe('ProduitSearchComponent', () => {
  let component: ProduitSearchComponent;
  let fixture: ComponentFixture<ProduitSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
