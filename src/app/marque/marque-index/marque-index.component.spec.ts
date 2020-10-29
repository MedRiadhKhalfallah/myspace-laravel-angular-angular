import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueIndexComponent } from './marque-index.component';

describe('MarqueIndexComponent', () => {
  let component: MarqueIndexComponent;
  let fixture: ComponentFixture<MarqueIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
