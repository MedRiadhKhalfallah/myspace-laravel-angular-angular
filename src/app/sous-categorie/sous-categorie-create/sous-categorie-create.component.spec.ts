import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieCreateComponent } from './sous-categorie-create.component';

describe('SousCategorieCreateComponent', () => {
  let component: SousCategorieCreateComponent;
  let fixture: ComponentFixture<SousCategorieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCategorieCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCategorieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
