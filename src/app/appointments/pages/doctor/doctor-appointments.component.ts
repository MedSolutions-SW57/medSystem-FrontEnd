import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentsService} from "../../services/appointments.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrl: './doctor-appointments.component.css'
})
export class DoctorAppointmentsComponent implements OnInit{
  displayedColumns = ["appointmentId", "patientName", "appointmentDate", "moreInfo"];
  dataSource!: MatTableDataSource<Appointment>;
  appointments!: Appointment[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private appointmentsService: AppointmentsService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAppointmentsByDoctorId(Number(id));
  }
  getAppointmentsByDoctorId(id: number) {
    this.appointmentsService.getAllById(id, "doctor").subscribe((response: any) => {
      this.appointments = response.results.find((appointment: any) => appointment.id === id);
      console.log(response.results);
      this.dataSource = new MatTableDataSource<Appointment>(response.appointments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToReviewAppointment(id: any): void {
    this.router.navigate(['/appointments', id]);
  }
}
