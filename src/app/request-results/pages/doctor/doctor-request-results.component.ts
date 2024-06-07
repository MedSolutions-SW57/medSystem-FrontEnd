import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {BaseService} from "../../../shared/services/base.service";
import {Results} from "../../model/results.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DetailResultComponent} from "../../components/detail-result/detail-result.component";

@Component({
  selector: 'app-request-results',
  templateUrl: './doctor-request-results.component.html',
  styleUrl: './doctor-request-results.component.css'
})
export class DoctorRequestResultsComponent {
  resultsList !:Results[];
  dataSource:any;
  displayedColumns = ["id","patientName","date","examType","result", "action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BaseService<Results>, private dialog: MatDialog) {
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

  openDetailsDialog(result: Results): void {
    this.dialog.open(DetailResultComponent, {
      data: result,
    });
  }
}
