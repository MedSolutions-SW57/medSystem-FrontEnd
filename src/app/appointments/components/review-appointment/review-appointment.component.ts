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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchAppointmentById(id);
    }
  }

  fetchAppointmentById(id: string): void {
    this.doctorService.getAppointmentById(id).subscribe({
      next: (response) => {
        console.log('Appointment:', response);
        this.appointment = response;
      },
      error: (error) => {
        console.error('Error fetching appointment:', error);
      }
    });
  }

  addNote():void {
    if(this.appointment && this.note) {
      this.appointment.moreInfo = this.note;
      this.doctorService.updateAppointment(this.appointment).subscribe({
        next: (response) => {
          console.log('Appointment updated:', response);
        },
        error: (error) => {
          console.error('Error updating appointment:', error);
        }
      });
      }
    }
  }
