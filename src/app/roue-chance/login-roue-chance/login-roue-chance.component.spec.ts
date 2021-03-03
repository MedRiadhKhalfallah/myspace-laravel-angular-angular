import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRoueChanceComponent } from './login-roue-chance.component';

describe('LoginRoueChanceComponent', () => {
  let component: LoginRoueChanceComponent;
  let fixture: ComponentFixture<LoginRoueChanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRoueChanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRoueChanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
