import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueClientViewComponent } from './roue-client-view.component';

describe('RoueClientViewComponent', () => {
  let component: RoueClientViewComponent;
  let fixture: ComponentFixture<RoueClientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueClientViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueClientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
