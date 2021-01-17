import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteIndexComponent } from './societe-index.component';

describe('SocieteIndexComponent', () => {
  let component: SocieteIndexComponent;
  let fixture: ComponentFixture<SocieteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
