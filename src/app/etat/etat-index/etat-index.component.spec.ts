import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatIndexComponent } from './etat-index.component';

describe('EtatIndexComponent', () => {
  let component: EtatIndexComponent;
  let fixture: ComponentFixture<EtatIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
