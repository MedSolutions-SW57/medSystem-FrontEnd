import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Consultant} from "../model/consultant.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultantService extends BaseService<Consultant>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/consultants';
  }
}
