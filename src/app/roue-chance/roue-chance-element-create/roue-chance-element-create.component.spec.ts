import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueChanceElementCreateComponent } from './roue-chance-element-create.component';

describe('RoueChanceElementCreateComponent', () => {
  let component: RoueChanceElementCreateComponent;
  let fixture: ComponentFixture<RoueChanceElementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueChanceElementCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueChanceElementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
