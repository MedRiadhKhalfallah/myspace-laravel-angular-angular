import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueEtatComponent } from './statistique-etat.component';

describe('StatistiqueEtatComponent', () => {
  let component: StatistiqueEtatComponent;
  let fixture: ComponentFixture<StatistiqueEtatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueEtatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
