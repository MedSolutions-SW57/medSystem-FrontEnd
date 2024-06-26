import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {AppointmentsService} from "../../services/appointments.service";
import {DoctorService} from "../../../profiles/services/doctor.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  formGroup = this._formBuilder.group({
    doctorName: ['', Validators.required],
    date: ['', Validators.required],
    reason: ['', Validators.required],
  });
  doctors: any[] = [];
  patientId = -1;
  doctorId = -1;
  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private appointmentsService: AppointmentsService,
              private doctorService: DoctorService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDoctors();
  }

  getDoctors() {
    this.doctorService.getAll().subscribe((data: any) => {
      this.doctors = data;
      console.log(this.doctors);
    }, error => {
      console.error(error);
    });
  }

  submitAppointment(){
    for (let doctorToSelect of this.doctors){
      if (doctorToSelect.fullName === this.formGroup.value.doctorName) {
        this.doctorService.getByUniqueId(doctorToSelect.id).subscribe({
          next: (response:any) => {
            this.doctorId = response.id;
            const appointment={
              date: this.formGroup.value.date,
              reason: this.formGroup.value.reason,
              doctorId: this.doctorId,
              patientId: this.patientId,
            };
            this.appointmentsService.create(appointment).subscribe(response =>{
              console.log(response);
              alert('Appointment created successfully');
              this.router.navigate([`patient/${this.patientId}/appointments`]);
            },error => {
              console.error(error);
            });
          },
          error: (error) =>{
            console.error(error);
          }
        })
      }
    }

  }
}
