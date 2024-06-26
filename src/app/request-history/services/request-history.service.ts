import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {DoctorHistory} from "../model/doctor/doctor-history.entity";

@Injectable({
  providedIn: 'root'
})
export class RequestHistoryService extends BaseService<DoctorHistory> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/history';
  }
}
