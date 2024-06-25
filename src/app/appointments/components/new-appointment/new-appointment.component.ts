import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    moreInfo: ['', Validators.required],
    doctor: ['', Validators.required],
    date: ['', Validators.required],
    hour: ['', Validators.required],
  });
  isLinear = false;
  doctors: any[] = [];

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.http.get('https://663440e79bb0df2359a10772.mockapi.io/doctors').subscribe((data: any) => {
      this.doctors = data;
    }, error => {
      console.error(error);
    });
  }

  submitAppointment(){
    const appointment={
      patientName:`${this.firstFormGroup.value.firstName} ${this.firstFormGroup.value.lastName}`,
      appointmentDay: this.secondFormGroup.value.date,
      appointmentHour: this.secondFormGroup.value.hour,
      inTreatment: false,
      moreInfo: this.secondFormGroup.value.moreInfo,
      requestHistory:[],
    };
    this.http.post('https://663440e79bb0df2359a10772.mockapi.io/appointments', appointment).subscribe(response =>{
      console.log(response);
      alert('Appointment created successfully')
    },error => {
      console.error(error);
    });
    this.http.get(`https://663440e79bb0df2359a10772.mockapi.io/patients?lastName=${this.firstFormGroup.value.lastName}`).subscribe((data: any) => {
      if (data.length > 0) {
        const patient = data[0];
        // Agregar la cita al array de citas del paciente
        patient.appointments.push(appointment);
        // Actualizar el paciente con la nueva cita
        this.http.put(`https://663440e79bb0df2359a10772.mockapi.io/patients/${patient.id}`, patient).subscribe(response => {
          console.log(response);
        }, error => {
          console.error(error);
        });
      } else {
        console.log('No se encontró el paciente');
      }
    }, error => {
      console.error(error);
    });
    // Buscar el doctor por apellido
    this.http.get(`https://663440e79bb0df2359a10772.mockapi.io/doctors?lastName=${this.secondFormGroup.value.doctor}`).subscribe((data: any) => {
      if (data.length > 0) {
        const doctor = data[0];
        // Agregar la cita al array de citas del doctor
        doctor.appointments.push(appointment);
        // Actualizar el doctor con la nueva cita
        this.http.put(`https://663440e79bb0df2359a10772.mockapi.io/doctors/${doctor.id}`, doctor).subscribe(response => {
          console.log(response);
        }, error => {
          console.error(error);
        });
      } else {
        console.log('No se encontró el doctor');
      }
    }, error => {
      console.error(error);
    });

  }
}
