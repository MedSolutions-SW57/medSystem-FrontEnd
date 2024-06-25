import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTreatmentsComponent } from './patient-treatments.component';

describe('PacientComponent', () => {
  let component: PatientTreatmentsComponent;
  let fixture: ComponentFixture<PatientTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientTreatmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
