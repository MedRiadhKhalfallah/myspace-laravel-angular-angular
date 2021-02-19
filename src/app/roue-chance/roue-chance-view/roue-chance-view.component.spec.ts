import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueChanceViewComponent } from './roue-chance-view.component';

describe('RoueChanceViewComponent', () => {
  let component: RoueChanceViewComponent;
  let fixture: ComponentFixture<RoueChanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueChanceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueChanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
