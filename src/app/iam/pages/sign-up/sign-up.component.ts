import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";
import {DoctorService} from "../../../profiles/services/doctor.service";
import {Doctor} from "../../../profiles/model/doctor.entity";
import {Patient} from "../../../profiles/model/patient.entity";
import {PatientService} from "../../../profiles/services/patient.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  formDoctor!: FormGroup;
  formPatient!: FormGroup;
  userId : number = -1;

  submitted = false;
  roleSelected : string = '';
  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService, private doctorService:DoctorService, private patientService: PatientService) {
    super();

  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      phoneNumber : ['', Validators.required],
    });
    this.formDoctor = this.builder.group({
      specialty : ['', Validators.required],
      licenseNumber : ['', Validators.required],
    });
    this.formPatient = this.builder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.form.invalid) console.log("invalid");
    if (this.form.invalid || this.roleSelected === '') return;
    if (this.formDoctor.invalid && this.roleSelected === 'DOCTOR') return;
    if (this.formPatient.invalid && this.roleSelected === 'PATIENT') return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signUpRequest = new SignUpRequest(username, password, this.roleSelected);
    this.submitted = true;
    this.authenticationService.signUp(signUpRequest)
      .then(() =>{
        this.authenticationService.currentUserId.subscribe(id => this.userId = id);
        this.createProfile();
      })
      .catch(error => {
        console.error('Sign-up failed:', error);
      });
  }
  createProfile(){
    //CREATE PROFILE
    let firstName = this.form.value.firstName;
    let lastName = this.form.value.lastName;
    let email = this.form.value.email;
    let phoneNumber = this.form.value.phoneNumber;
    if (this.getRole() === 1) {
      let specialty = this.formDoctor.value.specialty;
      let licenseNumber = this.formDoctor.value.licenseNumber;
      this.createDoctor(new Doctor(firstName, lastName, email, phoneNumber, specialty, licenseNumber,
        this.userId));
    }
    else {
      let street = this.formPatient.value.street;
      let number = this.formPatient.value.number;
      let city = this.formPatient.value.city;
      let postalCode = this.formPatient.value.postalCode;
      let country = this.formPatient.value.country;
      this.createPatient(new Patient(firstName, lastName, email, phoneNumber, street, number, city, postalCode, country,
        this.userId));
    }
  }
  doctorSelected(){
    this.roleSelected = 'DOCTOR';
    console.log("DOCTOR SELECTED");
  }
  patientSelected(){
    this.roleSelected = 'PATIENT';
    console.log("PATIENT SELECTED")
  }
  createDoctor(doctor : Doctor){
    this.doctorService.create(doctor).subscribe(
      response => console.log('Item created successfully:', response),
      error => console.error('Error creating item:', error)
    );
  }
  createPatient(patient: Patient){
    this.patientService.create(patient).subscribe(
      response => console.log('Item created successfully:', response),
      error => console.error('Error creating item:', error)
    );

  }
  getRole() {
    if (this.roleSelected === 'DOCTOR') return 1;
    else if (this.roleSelected === 'PATIENT') return 2;
    else return 0;
  }
}
