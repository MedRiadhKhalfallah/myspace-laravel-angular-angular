import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteSearchComponent } from './societe-search.component';

describe('SocieteSearchComponent', () => {
  let component: SocieteSearchComponent;
  let fixture: ComponentFixture<SocieteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
