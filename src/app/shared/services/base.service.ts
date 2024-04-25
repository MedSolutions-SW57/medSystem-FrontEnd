import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Results} from "../../medSystem/model/results.entity";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient){
  }

  getResults():Observable<Results[]>{
    return this.http.get<Results[]>('http://localhost:3000/results');
  }
}
