import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorService} from "../../../appointments/services/doctor.service";

@Component({
  selector: 'app-patient-login-form',
  templateUrl: './patient-login-form.component.html',
  styleUrl: './patient-login-form.component.css'
})
export class PatientLoginFormComponent {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService// Inyectar el servicio
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
          console.log('Patient registered:', response);

        },
        error: (error) => {
          console.error('Failed to register patient:', error);

        }
      });
    }
  }
}
