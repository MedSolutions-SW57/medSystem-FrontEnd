import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Patient} from "../model/patient.entity";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService<Patient>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/patients';
  }
}
