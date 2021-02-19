import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueChanceElementListComponent } from './roue-chance-element-list.component';

describe('RoueChanceElementListComponent', () => {
  let component: RoueChanceElementListComponent;
  let fixture: ComponentFixture<RoueChanceElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueChanceElementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueChanceElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
