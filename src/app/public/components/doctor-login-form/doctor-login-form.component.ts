import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorService} from "../../../appointments/services/doctor.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-doctor-login-form',
  templateUrl: './doctor-login-form.component.html',
  styleUrl: './doctor-login-form.component.css'
})
export class DoctorLoginFormComponent {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,// Inyectar el servicio
    private router: Router,
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
      this.doctorService.login(dni, password).subscribe({
        next: (doctor) => {
          if (doctor) {
            console.log('Doctor logged in:', doctor.id);
            this.userService.setUserType('doctor');
            this.userService.setUserId(doctor.id); // Asegúrate de que doctor.id no es undefined
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
