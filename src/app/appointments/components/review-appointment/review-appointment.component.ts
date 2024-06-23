import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-review-appointment',
  templateUrl: './review-appointment.component.html',
  styleUrl: './review-appointment.component.css'
})
export class ReviewAppointmentComponent implements OnInit{
  appointment: Appointment | undefined;
  note: string = '';

  constructor(private router: Router, private  route: ActivatedRoute, private doctorService: DoctorService) {
  }
  navigateBack() {
    this.router.navigate(['/doctor/2/appointments']);
  }

  ngOnInit() {

  }



  }
