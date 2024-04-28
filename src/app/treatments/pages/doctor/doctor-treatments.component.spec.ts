import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTreatmentsComponent } from './doctor-treatments.component';

describe('TreatmentsComponent', () => {
  let component: DoctorTreatmentsComponent;
  let fixture: ComponentFixture<DoctorTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorTreatmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
