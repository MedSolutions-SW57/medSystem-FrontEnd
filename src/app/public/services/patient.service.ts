import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../model/patient.entity";

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService<Patient>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/patients';
  }
}
