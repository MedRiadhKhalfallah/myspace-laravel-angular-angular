import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieViewComponent } from './sous-categorie-view.component';

describe('SousCategorieViewComponent', () => {
  let component: SousCategorieViewComponent;
  let fixture: ComponentFixture<SousCategorieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCategorieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCategorieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
