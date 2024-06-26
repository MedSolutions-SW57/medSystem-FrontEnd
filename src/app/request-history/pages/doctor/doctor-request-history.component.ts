import {Component, ViewChild, viewChild} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DoctorHistory} from "../../model/doctor/doctor-history.entity";


@Component({
  selector: 'app-request-history',
  templateUrl: './doctor-request-history.component.html',
  styleUrl: './doctor-request-history.component.css'
})
export class DoctorRequestHistoryComponent {
  historyList !: DoctorHistory[];
  dataSource :any;
  displayedColumns = ['historyId','doctorName', 'historyReason', 'historyDate'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:BaseService<DoctorHistory>) {
  }
  onInit(){

  }
  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
}
