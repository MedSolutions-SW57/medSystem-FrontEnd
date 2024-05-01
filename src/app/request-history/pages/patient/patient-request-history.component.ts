import {Component, ViewChild, viewChild} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PatientHistory} from "../../model/patient/patient-history";
import {DoctorHistory} from "../../model/doctor/doctor-history.entity";


@Component({
  selector: 'app-request-history',
  templateUrl: './doctor-request-history.component.html',
  standalone: true,
  styleUrl: './doctor-request-history.component.css'
})
export class PatientRequestHistoryComponent {
  historyList !: DoctorHistory[];
  dataSource :any;
  displayedColumns = ['patientName','campus', 'speciality', 'doctorName', 'dateTime'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:BaseService<DoctorHistory>) {
    this.service.getAppointmentsWithHistory().subscribe(res => {
      this.historyList = res.flatMap(appointment => appointment.requestHistory);
      this.dataSource = new MatTableDataSource<DoctorHistory>(this.historyList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }

}
