import {Component, OnInit, ViewChild} from '@angular/core';
import {Treatment} from "../../model/treatment.entity";
import {BaseService} from "../../../shared/services/base.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PatientService} from "../../../profiles/services/patient.service";

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

  constructor(private treatmentsService: BaseService<Treatment>, private route: ActivatedRoute, private patientService: PatientService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTreatmentsByDoctorId(Number(id));
  }

  getTreatmentsByDoctorId(id: number) {
    this.treatmentsService.getAllById(id, "doctorId").subscribe((data: any) => {
      this.treatments = data;
      this.dataSource = new MatTableDataSource<Treatment>(this.treatments);
      this.getPatientNamesForTreatments(this.treatments)
    });
  }


  getPatientNamesForTreatments(treatments: Treatment[]): void {
    const patientIds = treatments.map(treatment => treatment.patientId);
    for (const patientId of new Set(patientIds)) {
      this.patientService.getByUniqueId(patientId).subscribe(
        (patient: any) => {
          this.patientNamesMap.set(patient.id, patient.fullName);
          if (this.patientNamesMap.size === new Set(patientIds).size) {
            this.updateDataSource();
          }
        }
      );
    }
  }

  updateDataSource(): void {
    const appointmentsWithPatientNames = this.treatments.map(treatment => ({
      ...treatment,
      patientName: this.patientNamesMap.get(treatment.patientId)
    }));
    this.dataSource = new MatTableDataSource<Treatment>(appointmentsWithPatientNames);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}
