import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentsComponent } from './doctor-appointments.component';

describe('AppointmentsComponent', () => {
  let component: DoctorAppointmentsComponent;
  let fixture: ComponentFixture<DoctorAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
