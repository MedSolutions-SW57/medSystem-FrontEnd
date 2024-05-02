import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getAllDoctorPerId(id: any): Observable<any>{
    return this.http.get(`http://localhost:3000/doctor/${id}`);
  }
  getAppointmentById(id:any): Observable<any>{
    return this.http.get(`http://localhost:3000/appointments/${id}`);
  }
}
