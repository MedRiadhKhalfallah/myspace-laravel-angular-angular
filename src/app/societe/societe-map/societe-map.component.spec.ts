import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteMapComponent } from './societe-map.component';

describe('SocieteMapComponent', () => {
  let component: SocieteMapComponent;
  let fixture: ComponentFixture<SocieteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
