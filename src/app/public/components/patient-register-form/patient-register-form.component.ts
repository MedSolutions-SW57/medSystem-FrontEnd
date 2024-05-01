import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient-register-form',
  templateUrl: './patient-register-form.component.html',
  styleUrl: './patient-register-form.component.css'
})
export class PatientRegisterFormComponent implements OnInit{
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService // Inyectar el servicio
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
      const patientData = {
        ...this.formGroup.value,
        appointments: []
      }
      this.patientService.create(patientData).subscribe({
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
