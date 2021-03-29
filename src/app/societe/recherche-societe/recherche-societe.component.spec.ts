import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSocieteComponent } from './recherche-societe.component';

describe('RechercheSocieteComponent', () => {
  let component: RechercheSocieteComponent;
  let fixture: ComponentFixture<RechercheSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
