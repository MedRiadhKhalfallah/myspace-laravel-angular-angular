import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueIndexComponent } from './historique-index.component';

describe('HistoriqueIndexComponent', () => {
  let component: HistoriqueIndexComponent;
  let fixture: ComponentFixture<HistoriqueIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
