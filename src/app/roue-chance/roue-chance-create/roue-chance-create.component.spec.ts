import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueChanceCreateComponent } from './roue-chance-create.component';

describe('RoueChanceCreateComponent', () => {
  let component: RoueChanceCreateComponent;
  let fixture: ComponentFixture<RoueChanceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueChanceCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueChanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
