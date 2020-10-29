import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueSearchComponent } from './marque-search.component';

describe('MarqueSearchComponent', () => {
  let component: MarqueSearchComponent;
  let fixture: ComponentFixture<MarqueSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
