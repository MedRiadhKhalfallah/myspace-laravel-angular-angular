import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeActiviteIndexComponent } from './type-activite-index.component';

describe('TypeActiviteIndexComponent', () => {
  let component: TypeActiviteIndexComponent;
  let fixture: ComponentFixture<TypeActiviteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeActiviteIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeActiviteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
