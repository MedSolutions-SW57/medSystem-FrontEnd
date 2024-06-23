import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentsService} from "../../services/appointments.service";

@Component({
  selector: 'app-review-appointment',
  templateUrl: './review-appointment.component.html',
  styleUrl: './review-appointment.component.css'
})
export class ReviewAppointmentComponent implements OnInit{
  appointment: Appointment | undefined;
  note: string = '';

  constructor(private router: Router, private  route: ActivatedRoute, private appointmentsService: AppointmentsService) {
  }
  navigateBack() {
    this.router.navigate(['/doctor/2/appointments']);
  }

  ngOnInit() {

  }



  }
