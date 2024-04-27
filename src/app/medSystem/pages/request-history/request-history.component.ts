import {Component, ViewChild, viewChild} from '@angular/core';
import {History} from "../../model/history.entity";
import {BaseService} from "../../../shared/services/base.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrl: './request-history.component.css'
})
export class RequestHistoryComponent {
  historyList !: History[];
  dataSource :any;
  displayedColumns = ['historyId','doctorName', 'historyReason', 'historyDate'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:BaseService) {
    this.service.getAppointmentsWithHistory().subscribe(res => {
      this.historyList = res.flatMap(appointment => appointment.requestHistory);
      this.dataSource = new MatTableDataSource<History>(this.historyList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
}
