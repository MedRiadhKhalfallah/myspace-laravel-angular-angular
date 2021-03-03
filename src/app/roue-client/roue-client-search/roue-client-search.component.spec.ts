import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueClientSearchComponent } from './roue-client-search.component';

describe('RoueClientSearchComponent', () => {
  let component: RoueClientSearchComponent;
  let fixture: ComponentFixture<RoueClientSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueClientSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueClientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
