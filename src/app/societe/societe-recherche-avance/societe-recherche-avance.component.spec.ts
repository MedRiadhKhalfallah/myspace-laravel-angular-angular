import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteRechercheAvanceComponent } from './societe-recherche-avance.component';

describe('SocieteRechercheAvanceComponent', () => {
  let component: SocieteRechercheAvanceComponent;
  let fixture: ComponentFixture<SocieteRechercheAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteRechercheAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteRechercheAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
