import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Appointment} from "../model/appointment.entity";
import {Patient} from "../../public/model/patient.entity";


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http:HttpClient) { }

  create(patient:Patient): Observable<any>{
    return this.http.post('https://663440e79bb0df2359a10772.mockapi.io/patients', patient);
  }

  login(dni: string, password: string): Observable<any> {
    return this.http.get<any[]>('https://663440e79bb0df2359a10772.mockapi.io/patients', {
      params: new HttpParams().set('dni', dni).set('password', password)
    }).pipe(
      map(patients => patients.find(patient => patient.dni === dni && patient.password === password))
    );
  }

  getAlPatientsPerId(id: any): Observable<any>{
    return this.http.get(`https://663440e79bb0df2359a10772.mockapi.io/patients/${id}`);
  }

  getAppointmentById(id:any): Observable<any>{
    return this.http.get(`https://663440e79bb0df2359a10772.mockapi.io/appointments/${id}`);
  }

  updateAppointment(appointment: Appointment): Observable<any> {
    return this.http.put(`https://663440e79bb0df2359a10772.mockapi.io/appointments${appointment.id}`, appointment);
  }
}
