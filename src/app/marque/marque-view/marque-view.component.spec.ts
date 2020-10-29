import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueViewComponent } from './marque-view.component';

describe('MarqueViewComponent', () => {
  let component: MarqueViewComponent;
  let fixture: ComponentFixture<MarqueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
