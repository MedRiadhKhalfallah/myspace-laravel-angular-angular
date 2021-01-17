import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteListComponent } from './societe-list.component';

describe('SocieteListComponent', () => {
  let component: SocieteListComponent;
  let fixture: ComponentFixture<SocieteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
