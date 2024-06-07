import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientTreatmentsComponent } from './pacient-treatments.component';

describe('PacientComponent', () => {
  let component: PacientTreatmentsComponent;
  let fixture: ComponentFixture<PacientTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacientTreatmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
