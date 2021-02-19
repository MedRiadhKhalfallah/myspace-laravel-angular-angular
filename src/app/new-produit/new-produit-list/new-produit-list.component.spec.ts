import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitListComponent } from './new-produit-list.component';

describe('NewProduitListComponent', () => {
  let component: NewProduitListComponent;
  let fixture: ComponentFixture<NewProduitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProduitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
