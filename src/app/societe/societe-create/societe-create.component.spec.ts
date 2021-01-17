import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteCreateComponent } from './societe-create.component';

describe('SocieteCreateComponent', () => {
  let component: SocieteCreateComponent;
  let fixture: ComponentFixture<SocieteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
