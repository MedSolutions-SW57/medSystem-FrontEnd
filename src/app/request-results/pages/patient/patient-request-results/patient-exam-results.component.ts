import {Component, ViewChild} from '@angular/core';
import {Results} from "../../../../medSystem/model/results.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BaseService} from "../../../../shared/services/base.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-patient-request-results',
  templateUrl: './patient-exam-results.component.html',
  styleUrl: './patient-exam-results.component.css'
})
export class PatientExamResultsComponent {
  resultsList !:Results[];
  dataSource:any;
  displayedColumns = ["id","doctorName","date","examType","result", "action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BaseService<Results>) {
    this.service.getResults().subscribe(res=>{
      this.resultsList = res;
      this.dataSource= new MatTableDataSource<Results>(this.resultsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
  isResultAvailable(result: string): boolean {
    return result.toLowerCase() === 'available';
  }
}
