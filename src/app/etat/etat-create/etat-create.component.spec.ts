import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatCreateComponent } from './etat-create.component';

describe('EtatCreateComponent', () => {
  let component: EtatCreateComponent;
  let fixture: ComponentFixture<EtatCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
