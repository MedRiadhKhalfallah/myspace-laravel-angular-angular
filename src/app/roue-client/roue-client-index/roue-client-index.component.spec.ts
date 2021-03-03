import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueClientIndexComponent } from './roue-client-index.component';

describe('RoueClientIndexComponent', () => {
  let component: RoueClientIndexComponent;
  let fixture: ComponentFixture<RoueClientIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueClientIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueClientIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
