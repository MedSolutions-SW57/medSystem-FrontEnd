import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Doctor} from "../model/doctor.entity";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends BaseService<Doctor>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/doctors';
  }
}
