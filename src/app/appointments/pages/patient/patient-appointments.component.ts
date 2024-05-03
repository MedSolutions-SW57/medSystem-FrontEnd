import {Component, ViewChild} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient-appointments.component.html',
  styleUrl: './patient-appointments.component.css'
})
export class PatientAppointmentsComponent {
  displayedColumns = ["appointmentId", "appointmentDay", "appointmentHour", "moreInfo"];
  dataSource!: MatTableDataSource<Appointment>;

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchAppointments(id);
  }

  fetchAppointments(id: any): void {
    this.patientService.getAlPatientsPerId(id).subscribe({
      next: (response) => {
        console.log('Patient appointments:', response.appointments);
        this.dataSource = new MatTableDataSource<Appointment>(response.appointments);
      },
      error: (error) => {
        console.error('Error fetching doctor appointments:', error);
      }
    });
  }

  Filterchange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToReviewAppointment(id: any): void {
    this.router.navigate(['/appointments', id]);
  }

  navigateToNew(): void {
    this.router.navigate(['/new-appointment']);
  }
}
