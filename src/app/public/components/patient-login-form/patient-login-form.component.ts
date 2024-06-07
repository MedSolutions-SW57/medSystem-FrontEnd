import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PatientService} from "../../../appointments/services/patient.service";



@Component({
  selector: 'app-patient-login-form',
  templateUrl: './patient-login-form.component.html',
  styleUrl: './patient-login-form.component.css'
})
export class PatientLoginFormComponent {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService:PatientService, // Inyectar el servicio
    private router:Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      dni: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const { dni, password } = this.formGroup.value;
      this.patientService.login(dni, password).subscribe({
        next: (patient) => {
          if (patient) {
            console.log('Patient logged in:', patient.id);
            this.userService.setUserType('patient');
            this.userService.setUserId(patient.id); // Asegúrate de que patient.id no es undefined
          } else {
            alert('Invalid credentials');
          }
        },
        error: (error) => {
          console.error('Failed to login:', error);
        }
      });
    }
  }
}
