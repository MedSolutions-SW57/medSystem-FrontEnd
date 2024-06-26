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
  displayedColumns = ["type","code", "patientId", "doctorId", "date"];
  dataSource!: MatTableDataSource<Sample>;
  samples!: Sample[];
  consultantId = -1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sampleService: SampleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.consultantId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAllSamples()
  }

  getAllSamples(){
    this.sampleService.getAll().subscribe((response: any) => {
      this.samples = response;
      console.log(response.results);
      this.dataSource = new MatTableDataSource<Sample>(this.samples);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  FilterChange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  navigateToCreateSample(): void {
    this.router.navigate([`/consultant/${this.consultantId}/new-sample`]);
  }
}
