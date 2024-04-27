import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Results} from "../../medSystem/model/results.entity";
import {Appointment} from "../../medSystem/model/appointment.entity";
import {environment} from "../../../environments/environment";
import {Treatment} from "../../medSystem/model/treatment.entity";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient){
  }

  getResults():Observable<Results[]>{
    return this.http.get<Results[]>('http://localhost:3000/results');
  }
  getAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>('http://localhost:3000/appointments');
  }
  getAppointmentsWithHistory():Observable<Appointment[]>{
    return this.http.get<Appointment[]>('http://localhost:3000/appointments');
  }
  getTreatments():Observable<Treatment[]>{
    return this.http.get<Treatment[]>('http://localhost:3000/treatments');
  }
}
