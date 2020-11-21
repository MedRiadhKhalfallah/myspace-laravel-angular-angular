import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleViewComponent } from './modele-view.component';

describe('ModeleViewComponent', () => {
  let component: ModeleViewComponent;
  let fixture: ComponentFixture<ModeleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
