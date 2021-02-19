import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieSearchComponent } from './sous-categorie-search.component';

describe('SousCategorieSearchComponent', () => {
  let component: SousCategorieSearchComponent;
  let fixture: ComponentFixture<SousCategorieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCategorieSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCategorieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
