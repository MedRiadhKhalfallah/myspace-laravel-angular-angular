import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitSearchComponent } from './new-produit-search.component';

describe('NewProduitSearchComponent', () => {
  let component: NewProduitSearchComponent;
  let fixture: ComponentFixture<NewProduitSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProduitSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
