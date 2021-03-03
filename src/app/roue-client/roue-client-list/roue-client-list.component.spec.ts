import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueClientListComponent } from './roue-client-list.component';

describe('RoueClientListComponent', () => {
  let component: RoueClientListComponent;
  let fixture: ComponentFixture<RoueClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueClientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
