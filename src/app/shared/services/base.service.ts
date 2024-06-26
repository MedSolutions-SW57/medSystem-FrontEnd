import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

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
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), item, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getByUniqueId(id: number): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getByOtherId(id: number, idType: string): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${idType}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getAll(): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getAllById(id: number, idType: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.resourcePath()}/${idType}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: any):Observable<T> {
    return this.http.delete<T>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  deleteByAttribute(attribute : any, attributeType : any):Observable<T> {
    return this.http.delete<T>(`${this.resourcePath()}/${attributeType}/${attribute}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  update(id: any, item: any) {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


}
