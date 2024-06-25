import {Component, ViewChild,} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentsService} from "../../services/appointments.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-patient',
  templateUrl: './patient-appointments.component.html',
  styleUrl: './patient-appointments.component.css'
})
export class PatientAppointmentsComponent {
  displayedColumns = ["id", "date", "moreInfo"];
  dataSource!: MatTableDataSource<Appointment>;
  appointments!: Appointment[];


  constructor(private appointmentsService: AppointmentsService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAppointmentsByPatientId(Number(id));
  }

  getAppointmentsByPatientId(id: number) {
    this.appointmentsService.getAllById(id, "patientId").subscribe((data: any) => {
      this.appointments = data;
      this.dataSource = new MatTableDataSource<Appointment>(this.appointments);

    });
  }

  navigateToReviewAppointment(id: any): void {
    this.router.navigate(['/appointments', id]);
  }

  navigateToNew(): void {
    this.router.navigate(['patients/:id/new-appointment']);
  }
}
