import {Component, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {Treatment} from "../../model/treatment.entity";
import {BaseService} from "../../../shared/services/base.service";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {Appointment} from "../../../appointments/model/appointment.entity";
import {PatientService} from "../../../profiles/services/patient.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-patient',
  templateUrl: './patient-treatments.component.html',
  styleUrl: './patient-treatments.component.css'
})
export class PatientTreatmentsComponent implements OnInit{
  dataSource!: MatTableDataSource<Treatment>;
  treatments!: Treatment[];



  constructor(private treatmentsService: BaseService<Treatment>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTreatmentsByPatientId(Number(id));
  }

  getTreatmentsByPatientId(id: number) {
    this.treatmentsService.getAllById(id, "patientId").subscribe((data: any) => {
      this.treatments = data;
      this.dataSource = new MatTableDataSource<Treatment>(this.treatments);

    });
  }

}

