import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Result} from "../../model/result.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DetailResultComponent} from "../../components/detail-result/detail-result.component";
import {ActivatedRoute} from "@angular/router";
import {ResultsService} from "../../services/results.service";

@Component({
  selector: 'app-request-results',
  templateUrl: './doctor-request-results.component.html',
  styleUrl: './doctor-request-results.component.css'
})
export class DoctorRequestResultsComponent {
  resultsList !:Result[];
  dataSource !:MatTableDataSource<Result>;
  displayedColumns = ["id","patientId","typeOfExam","result","ResultDateTime", "action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private resultsService:ResultsService, private dialog: MatDialog,private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAllResultsByDoctorId(Number(id));
  }

  getAllResultsByDoctorId(id: number) {
    this.resultsService.getAllById(id, "doctorId").subscribe((data: any) => {
      this.resultsList = data;
      this.dataSource = new MatTableDataSource<Result>(this.resultsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  FilterChange(data:any){
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
