import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieIndexComponent } from './categorie-index.component';

describe('CategorieIndexComponent', () => {
  let component: CategorieIndexComponent;
  let fixture: ComponentFixture<CategorieIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
