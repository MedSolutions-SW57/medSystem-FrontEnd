import {Component, ViewChild} from '@angular/core';
import {Result} from "../../../model/result.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ResultsService} from "../../../services/results.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {DetailResultComponent} from "../../../components/detail-result/detail-result.component";

@Component({
  selector: 'app-patient-request-results',
  templateUrl: './patient-exam-results.component.html',
  styleUrl: './patient-exam-results.component.css'
})
export class PatientExamResultsComponent {
  resultsList !:Result[];
  dataSource !:MatTableDataSource<Result>;
  displayedColumns = ["id","doctorId","typeOfExam","result","ResultDateTime", "action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private resultsService:ResultsService, private dialog: MatDialog,private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAllResultsByPatientId(Number(id));
  }

  getAllResultsByPatientId(id: number) {
    this.resultsService.getAllById(id, "patientId").subscribe((data: any) => {
      this.resultsList = data;
      this.dataSource = new MatTableDataSource<Result>(this.resultsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
  isResultAvailable(result: boolean): boolean {
    return result;
  }
  openDetailsDialog(result: Result): void {
    this.dialog.open(DetailResultComponent, {
      data: result,
    });
  }
}
