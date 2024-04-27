import { Component, ViewChild} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";


@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  standalone: true,
  styleUrl: './treatments.component.css'
})
export class TreatmentsComponent {
  constructor(private service:BaseService) {

  }
}
