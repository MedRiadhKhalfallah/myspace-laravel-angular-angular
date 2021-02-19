import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieListComponent } from './sous-categorie-list.component';

describe('SousCategorieListComponent', () => {
  let component: SousCategorieListComponent;
  let fixture: ComponentFixture<SousCategorieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCategorieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCategorieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
