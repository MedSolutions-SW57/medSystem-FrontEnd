import {Component, ViewChild} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BaseService} from "../../../shared/services/base.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
  appointmentList !:Appointment[];
  dataSource:any;
  displayedColumns = ["appointmentId","patientName","appointmentDay","appointmentHour"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BaseService, private router:Router) {
    this.service.getAppointments().subscribe(res=>{
      this.appointmentList = res;
      this.dataSource= new MatTableDataSource<Appointment>(this.appointmentList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }

  navigateToReviewAppointment() {
    this.router.navigate(['/review-appointment']);
  }
}
