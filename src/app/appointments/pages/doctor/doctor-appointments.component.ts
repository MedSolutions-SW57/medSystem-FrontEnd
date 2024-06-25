import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentsService} from "../../services/appointments.service";
import {PatientService} from "../../../profiles/services/patient.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrl: './doctor-appointments.component.css'
})
export class DoctorAppointmentsComponent implements OnInit{
  displayedColumns = ["id", "patientName", "date", "moreInfo"];
  dataSource!: MatTableDataSource<Appointment>;
  appointments!: Appointment[];
  patientNamesMap: Map<number, string> = new Map<number, string>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private appointmentsService: AppointmentsService, private router: Router, private route: ActivatedRoute,
              private patientService: PatientService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAppointmentsByDoctorId(Number(id));
  }
  getAppointmentsByDoctorId(id: number) {
    this.appointmentsService.getAllById(id, "doctorId").subscribe((data: any) => {
      this.appointments = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<Appointment>(this.appointments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.getPatientNamesForAppointments(this.appointments);

    });
  }
  getPatientNamesForAppointments(appointments: Appointment[]): void {
    const patientIds = appointments.map(appointment => appointment.patientId);
    for (const patientId of new Set(patientIds)) {
      this.patientService.getByUniqueId(patientId).subscribe(
        (patient: any) => {
          this.patientNamesMap.set(patient.id, patient.fullName);
          if (this.patientNamesMap.size === new Set(patientIds).size) {
            this.updateDataSource();
          }
        }
      );
    }
  }

  updateDataSource(): void {
    const appointmentsWithPatientNames = this.appointments.map(appointment => ({
      ...appointment,
      patientName: this.patientNamesMap.get(appointment.patientId)
    }));
    this.dataSource = new MatTableDataSource<Appointment>(appointmentsWithPatientNames);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  Filterchange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToReviewAppointment(id: any): void {
    this.router.navigate(['/appointments', id]);
  }
}
