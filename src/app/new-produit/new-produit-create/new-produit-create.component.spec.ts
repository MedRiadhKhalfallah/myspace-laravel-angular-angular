import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitCreateComponent } from './new-produit-create.component';

describe('NewProduitCreateComponent', () => {
  let component: NewProduitCreateComponent;
  let fixture: ComponentFixture<NewProduitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProduitCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
