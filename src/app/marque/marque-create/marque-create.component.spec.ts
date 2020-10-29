import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueCreateComponent } from './marque-create.component';

describe('MarqueCreateComponent', () => {
  let component: MarqueCreateComponent;
  let fixture: ComponentFixture<MarqueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
