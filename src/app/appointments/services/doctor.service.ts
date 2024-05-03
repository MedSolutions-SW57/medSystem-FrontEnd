import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../model/appointment.entity";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

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
