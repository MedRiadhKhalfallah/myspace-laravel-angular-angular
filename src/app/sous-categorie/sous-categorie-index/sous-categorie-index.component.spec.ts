import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieIndexComponent } from './sous-categorie-index.component';

describe('SousCategorieIndexComponent', () => {
  let component: SousCategorieIndexComponent;
  let fixture: ComponentFixture<SousCategorieIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCategorieIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCategorieIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
