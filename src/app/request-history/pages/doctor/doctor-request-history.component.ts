import {Component, ViewChild, viewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../../profiles/services/patient.service";
import {Appointment} from "../../../appointments/model/appointment.entity";
import {ReportsService} from "../../services/reports.service";


@Component({
  selector: 'app-request-history',
  templateUrl: './doctor-request-history.component.html',
  styleUrl: './doctor-request-history.component.css'
})
export class DoctorRequestHistoryComponent {
  displayedColumns = ["patientId", "date", "reason"];
  dataSource!: MatTableDataSource<Appointment>;
  reports!: any[];
  patientNamesMap: Map<number, string> = new Map<number, string>();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private reportsService: ReportsService, private router: Router, private route: ActivatedRoute,
              private patientService: PatientService) {
  }
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.getAllReports();
  }

  getAllReports(){
    this.reportsService.getAll().subscribe((data:any)=>{
      this.reports = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<Appointment>(this.reports);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }





  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
}
