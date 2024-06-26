import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentsService} from "../../services/appointments.service";
import {DoctorService} from "../../../profiles/services/doctor.service";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {PatientService} from "../../../profiles/services/patient.service";

@Component({
  selector: 'app-review-appointment',
  templateUrl: './review-appointment.component.html',
  styleUrl: './review-appointment.component.css'
})
export class ReviewAppointmentComponent implements OnInit {
  appointment: Appointment | undefined;
  note = '';
  doctorId = -1;
  patientId = -1;
  patientName = '';

  constructor(private router: Router, private route: ActivatedRoute, private appointmentsService: AppointmentsService,
              private patientService: PatientService, private doctorService: DoctorService, private authenticationService: AuthenticationService) {
  }

  navigateBack() {
    this.authenticationService.currentUserId.subscribe(currentUserId => {
      this.doctorId = currentUserId;
    });
    this.router.navigate([`/patient/${this.patientId}/appointments`]);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.appointmentsService.getByUniqueId(Number(id)).subscribe((data: any) => {
      this.appointment = data;
      this.patientId = data.patientId;
      this.note = data.reason;
      console.log(this.patientId);
      console.log(this.appointment);

      this.patientService.getByUniqueId(this.patientId).subscribe((data: any) => {
        this.patientName = data.fullName;
        console.log(this.patientName);
      })
    });
  }

  addNote(): void {
    if (this.appointment?.reason != this.note) {
      const reasonUpdated = { reason: this.note };
      this.appointmentsService.update(this.appointment?.id, reasonUpdated).subscribe({
        next: (response) => {
          console.log('Appointment updated:', response);
          alert("Appointment updated successfully");
        },
        error: (error) => {
          console.error('Error updating appointment:', error);
        }
      });
    }

  }
}
