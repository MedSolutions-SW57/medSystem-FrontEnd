import {Component} from '@angular/core';
import {Treatment} from "../../../medSystem/model/treatment.entity";
import {BaseService} from "../../../shared/services/base.service";

@Component({
  selector: 'app-treatments',
  templateUrl: './doctor-treatments.component.html',
  styleUrl: './doctor-treatments.component.css'
})
export class DoctorTreatmentsComponent {
  treatments !:Treatment[];
  constructor(private service:BaseService) {
    this.service.getTreatments().subscribe(res=>{
      this.treatments = res;
    });
  }
}
