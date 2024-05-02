import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Results} from "../../request-results/model/results.entity";
import {Appointment} from "../../appointments/model/appointment.entity";
import {environment} from "../../../environments/environment";
import {Treatment} from "../../treatments/model/treatment.entity";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = '/resources';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient){
  }
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.error.message}`);
    } else {
      console.log(`Backend returned code ${error.status}, body was ${error}`);
    }
    return throwError(() => new Error('Something happened with request. Please try again later.'));
  }

  private resourcePath() {
    return `http://localhost:3000${this.resourceEndpoint}`;
  }

  create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


  getResults():Observable<Results[]>{
    return this.http.get<Results[]>('http://localhost:3000/results');
  }
  getAppointmentsWithHistory():Observable<Appointment[]>{
    return this.http.get<Appointment[]>('http://localhost:3000/appointments');
  }
  getTreatments():Observable<Treatment[]>{
    return this.http.get<Treatment[]>('http://localhost:3000/treatments');
  }
}
