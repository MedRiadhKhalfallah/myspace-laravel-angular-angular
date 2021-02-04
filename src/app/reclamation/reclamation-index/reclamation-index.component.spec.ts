import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationIndexComponent } from './reclamation-index.component';

describe('ReclamationIndexComponent', () => {
  let component: ReclamationIndexComponent;
  let fixture: ComponentFixture<ReclamationIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
