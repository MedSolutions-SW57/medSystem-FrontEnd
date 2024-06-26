import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Analysis} from "../../model/analysis.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AnalysisService} from "../../services/analysis.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-laboratory-analysis',
  templateUrl: './laboratory-analysis.component.html',
  styleUrl: './laboratory-analysis.component.css'
})
export class LaboratoryAnalysisComponent implements OnInit{
  displayedColumns = ["analysisId","examType","sampleId", "patientId", "analysisDate", "status"];
  dataSource!: MatTableDataSource<Analysis>;
  analysis!: Analysis[];
  consultantId = -1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private analysisService: AnalysisService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.consultantId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAllAnalysis()
  }

  getAllAnalysis() {
    this.analysisService.getAll().subscribe((response: any) => {
      this.analysis = response;
      console.log(response);
      this.dataSource = new MatTableDataSource<Analysis>(this.analysis);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  navigateToCreateAnalysis(): void {
    this.router.navigate([`/consultant/${this.consultantId}/new-analysis`]);
  }
}
