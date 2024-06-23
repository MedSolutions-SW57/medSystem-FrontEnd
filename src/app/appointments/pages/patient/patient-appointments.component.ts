import {Component,} from '@angular/core';
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
  appointments!: Appointment[];

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAppointmentsByPatientId(Number(id));
  }

  getAppointmentsByPatientId(id: number) {
    this.patientService.getAllById(id, "patient").subscribe((response: any) => {
      this.appointments = response.results.find((appointment: any) => appointment.id === id);
      this.dataSource = new MatTableDataSource<Appointment>(response.appointments);
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
    this.router.navigate(['patients/:id/new-appointment']);
  }
}
