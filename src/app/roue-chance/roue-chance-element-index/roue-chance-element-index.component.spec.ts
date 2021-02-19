import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueChanceElementIndexComponent } from './roue-chance-element-index.component';

describe('RoueChanceElementIndexComponent', () => {
  let component: RoueChanceElementIndexComponent;
  let fixture: ComponentFixture<RoueChanceElementIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueChanceElementIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueChanceElementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
