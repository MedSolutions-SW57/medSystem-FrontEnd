import {Component, OnInit} from '@angular/core';
import {Treatment} from "../../model/treatment.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {TreatmentsService} from "../../services/treatments.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient-treatments.component.html',
  styleUrl: './patient-treatments.component.css'
})
export class PatientTreatmentsComponent implements OnInit{
  treatments!: Treatment[];
  constructor(private treatmentsService: TreatmentsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTreatmentsByPatientId(Number(id));
  }

  getTreatmentsByPatientId(id: number) {
    this.treatmentsService.getAllById(id, "patientId").subscribe((data: any) => {
      this.treatments = data;
      console.log(this.treatments);
    });
  }
}

