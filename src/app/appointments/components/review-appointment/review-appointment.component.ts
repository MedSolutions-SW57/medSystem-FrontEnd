import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../medSystem/model/appointment.entity";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-review-appointment',
  templateUrl: './review-appointment.component.html',
  styleUrl: './review-appointment.component.css'
})
export class ReviewAppointmentComponent{
  constructor(private router: Router) {
  }
  navigateToReviewAppointment() {
    this.router.navigate(['/appointments']);
  }
}
