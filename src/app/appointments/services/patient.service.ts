import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../model/appointment.entity";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http:HttpClient) { }
  getAlPatientsPerId(id: any): Observable<any>{
    return this.http.get(`http://localhost:3000/patients/${id}`);
  }
  getAppointmentById(id:any): Observable<any>{
    return this.http.get(`http://localhost:3000/appointments/${id}`);
  }
  updateAppointment(appointment: Appointment): Observable<any> {
    return this.http.put(`http://localhost:3000/appointments/${appointment.id}`, appointment);
  }
}
