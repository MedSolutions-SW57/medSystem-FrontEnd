import {Component, OnInit, ViewChild, viewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DoctorHistory} from "../../model/doctor/doctor-history.entity";
import {RequestHistoryService} from "../../services/request-history.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-request-history',
  templateUrl: './doctor-request-history.component.html',
  styleUrl: './doctor-request-history.component.css'
})
export class DoctorRequestHistoryComponent implements OnInit{
  displayedColumns = ['id','reason', 'date', 'patientId', 'doctorName'];
  dataSource!: MatTableDataSource<DoctorHistory>;
  reports!: DoctorHistory[];

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private historyService: RequestHistoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllReports()
  }

  getAllReports(){
    this.historyService.getAll().subscribe((response: any) => {
      this.reports = response;
      console.log(response);
      this.dataSource = new MatTableDataSource<DoctorHistory>(this.reports);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  Filterchange(event: Event): void {
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
