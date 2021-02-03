import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietePayementComponent } from './societe-payement.component';

describe('SocietePayementComponent', () => {
  let component: SocietePayementComponent;
  let fixture: ComponentFixture<SocietePayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietePayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
