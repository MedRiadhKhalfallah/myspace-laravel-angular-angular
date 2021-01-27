import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueSearchComponent } from './historique-search.component';

describe('HistoriqueSearchComponent', () => {
  let component: HistoriqueSearchComponent;
  let fixture: ComponentFixture<HistoriqueSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
