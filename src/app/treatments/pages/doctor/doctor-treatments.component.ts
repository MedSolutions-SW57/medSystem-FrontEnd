import {Component, OnInit, ViewChild} from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Treatment} from "../../model/treatment.entity";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PatientService} from "../../../profiles/services/patient.service";
import {TreatmentsService} from "../../services/treatments.service";

@Component({
  selector: 'app-treatments',
  templateUrl: './doctor-treatments.component.html',
  styleUrls: ['./doctor-treatments.component.css']
})
export class DoctorTreatmentsComponent implements OnInit {
  dataSource!: MatTableDataSource<Treatment>;
  treatments!: Treatment[];
  patientNamesMap: Map<number, string> = new Map<number, string>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private treatmentsService: TreatmentsService , private route: ActivatedRoute, private patientService: PatientService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTreatmentsByDoctorId(Number(id));

  }

  getTreatmentsByDoctorId(id: number) {
    this.treatmentsService.getAll().subscribe((data: any) => {
      this.treatments = data;
      this.dataSource = new MatTableDataSource<Treatment>(this.treatments);
    });
  }

}
