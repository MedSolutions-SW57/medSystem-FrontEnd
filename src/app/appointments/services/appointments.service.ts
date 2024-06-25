import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../model/appointment.entity";
import {BaseService} from "../../shared/services/base.service";


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService extends BaseService<Appointment>{
  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/appointments';
  }
}
