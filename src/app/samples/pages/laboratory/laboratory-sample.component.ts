import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Sample} from "../../model/sample.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SampleService} from "../../services/sample.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory-sample.component.html',
  styleUrl: './laboratory-sample.component.css'
})
export class LaboratorySampleComponent implements OnInit  {
  displayColumns = ["sampleId", "sampleType","sampleCode", "patientId", "doctorId", "sampleDate"];
  dataSource!: MatTableDataSource<Sample>;
  samples!: Sample[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sampleService: SampleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllSamples()
  }

  getAllSamples(){
    this.sampleService.getAll().subscribe((response: any) => {
      this.samples = response.results;
      console.log(response.results);
      this.dataSource = new MatTableDataSource<Sample>(response.samples);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  FilterChange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
