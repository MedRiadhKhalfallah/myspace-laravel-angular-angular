import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitIndexComponent } from './produit-index.component';

describe('ProduitIndexComponent', () => {
  let component: ProduitIndexComponent;
  let fixture: ComponentFixture<ProduitIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
