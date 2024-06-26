import {Component, ViewChild} from '@angular/core';
import {Result} from "../../../model/result.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BaseService} from "../../../../shared/services/base.service";

@Component({
  selector: 'app-patient-request-results',
  templateUrl: './patient-exam-results.component.html',
  styleUrl: './patient-exam-results.component.css'
})
export class PatientExamResultsComponent {
  resultsList !:Result[];
  dataSource:any;
  displayedColumns = ["id","doctorName","date","examType","result", "action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BaseService<Result>) {

  }


  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
  isResultAvailable(result: string): boolean {
    return result.toLowerCase() === 'available';
  }
}
