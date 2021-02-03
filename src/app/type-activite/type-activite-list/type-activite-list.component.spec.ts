import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeActiviteListComponent } from './type-activite-list.component';

describe('TypeActiviteListComponent', () => {
  let component: TypeActiviteListComponent;
  let fixture: ComponentFixture<TypeActiviteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeActiviteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeActiviteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
