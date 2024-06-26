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
  displayedColumns = ["id", "date", "reason"];
  dataSource!: MatTableDataSource<Appointment>;
  appointments!: Appointment[];
  patientId = -1;

  constructor(private appointmentsService: AppointmentsService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAppointmentsByPatientId( this.patientId);
  }

  getAppointmentsByPatientId(id: number) {
    this.appointmentsService.getAllById(id, "patientId").subscribe((data: any) => {
      this.appointments = data;
      this.dataSource = new MatTableDataSource<Appointment>(this.appointments);

    });
  }
  navigateToNew(): void {
    this.router.navigate([`patient/${this.patientId}/new-appointment`]);
  }
}
