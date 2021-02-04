import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationViewComponent } from './reclamation-view.component';

describe('ReclamationViewComponent', () => {
  let component: ReclamationViewComponent;
  let fixture: ComponentFixture<ReclamationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
