import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleIndexComponent } from './modele-index.component';

describe('ModeleIndexComponent', () => {
  let component: ModeleIndexComponent;
  let fixture: ComponentFixture<ModeleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
