import {Component, ViewChild} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Treatment} from "../../model/treatment.entity";

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient-treatments.component.html',
  styleUrl: './pacient-treatments.component.css'
})
export class PacientTreatmentsComponent {
  treatments !:Treatment[];
  dataSource: any;
  displayedColumns=["date","treatment-type","doctor","status"]
  constructor(private service:BaseService<any>) {
    this.service.getTreatments().subscribe(res => {
      this.treatments = res;
    });
  }
}

