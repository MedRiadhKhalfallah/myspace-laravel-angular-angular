import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleSearchComponent } from './modele-search.component';

describe('ModeleSearchComponent', () => {
  let component: ModeleSearchComponent;
  let fixture: ComponentFixture<ModeleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
