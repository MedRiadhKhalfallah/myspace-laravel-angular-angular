import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeActiviteCreateComponent } from './type-activite-create.component';

describe('TypeActiviteCreateComponent', () => {
  let component: TypeActiviteCreateComponent;
  let fixture: ComponentFixture<TypeActiviteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeActiviteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeActiviteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
