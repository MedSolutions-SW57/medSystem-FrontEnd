import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorService} from "../../../appointments/services/doctor.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-doctor-register-form',
  templateUrl: './doctor-register-form.component.html',
  styleUrl: './doctor-register-form.component.css'
})
export class DoctorRegisterFormComponent implements OnInit{
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const doctorData = {
        ...this.formGroup.value,
        appointments: []
      }
      this.doctorService.create(doctorData).subscribe({
        next: (response) => {
          console.log('Doctor registered:', response);
          alert('Doctor registered successfully');
          this.route.navigate(['/login']);
        },
        error: (error) => {
          console.error('Failed to register doctor:', error);
          alert('ERROR: Doctor not registered. Please try again.');
        }
      });
    }
  }
}
