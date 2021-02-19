import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitViewComponent } from './new-produit-view.component';

describe('NewProduitViewComponent', () => {
  let component: NewProduitViewComponent;
  let fixture: ComponentFixture<NewProduitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProduitViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
