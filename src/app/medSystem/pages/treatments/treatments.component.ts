import {Component} from '@angular/core';
import {Treatment} from "../../model/treatment.entity";
import {BaseService} from "../../../shared/services/base.service";

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.css'
})
export class TreatmentsComponent {
  treatments !:Treatment[];
  constructor(private service:BaseService) {
    this.service.getTreatments().subscribe(res=>{
      this.treatments = res;
    });
  }
}
