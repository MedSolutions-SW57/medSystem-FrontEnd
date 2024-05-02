import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointment} from "../../../medSystem/model/appointment.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrl: './doctor-appointments.component.css'
})
export class DoctorAppointmentsComponent implements OnInit{
  displayedColumns = ["appointmentId", "patientName", "appointmentDay", "appointmentHour", "moreInfo"];
  dataSource!: MatTableDataSource<Appointment>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private doctorService: DoctorService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchAppointments(id);
  }

  fetchAppointments(id: any): void {
    this.doctorService.getAllDoctorPerId(id).subscribe({
      next: (response) => {
        console.log('Doctor appointments:', response.appointments);
        this.dataSource = new MatTableDataSource<Appointment>(response.appointments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
}
