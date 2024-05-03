import {Component, ViewChild, viewChild} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRowDef, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PatientHistory} from "../../model/patient/patient-history";
import {DoctorHistory} from "../../model/doctor/doctor-history.entity";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatLabel} from "@angular/material/form-field";


@Component({
  selector: 'app-request-history',
  templateUrl: './patient-request-history.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatLabel,
    MatCellDef,
    MatCell,
    MatHeaderCell,
    MatSort,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatCardFooter,
    MatPaginator,
    MatCardHeader
  ],
  styleUrl: './patient-request-history.component.css'
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
