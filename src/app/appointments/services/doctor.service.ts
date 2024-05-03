import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../model/appointment.entity";
import {Doctor} from "../model/doctor.entity";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  create(doctor:Doctor): Observable<any>{
    return this.http.post('https://663440e79bb0df2359a10772.mockapi.io/doctors', doctor);
  }

  login(dni: string, password: string): Observable<Doctor> {
    return this.http.get<Doctor>('https://663440e79bb0df2359a10772.mockapi.io/doctors', {
      params: new HttpParams().set('dni', dni).set('password', password)
    });
  }

  getAllDoctorPerId(id: any): Observable<any>{
    return this.http.get(`https://663440e79bb0df2359a10772.mockapi.io/doctors/${id}`);
  }
  getAppointmentById(id:any): Observable<any>{
    return this.http.get(`https://663440e79bb0df2359a10772.mockapi.io/appointments/${id}`);
  }
  updateAppointment(appointment: Appointment): Observable<any> {
  return this.http.put(`https://663440e79bb0df2359a10772.mockapi.io/appointments/${appointment.id}`, appointment);
  }
}
