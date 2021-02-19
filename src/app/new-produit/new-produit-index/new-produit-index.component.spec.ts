import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitIndexComponent } from './new-produit-index.component';

describe('NewProduitIndexComponent', () => {
  let component: NewProduitIndexComponent;
  let fixture: ComponentFixture<NewProduitIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProduitIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduitIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
