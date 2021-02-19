import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleCreateComponent } from './modele-create.component';

describe('ModeleCreateComponent', () => {
  let component: ModeleCreateComponent;
  let fixture: ComponentFixture<ModeleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
