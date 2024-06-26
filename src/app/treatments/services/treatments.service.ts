import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Treatment} from "../model/treatment.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService extends BaseService<Treatment>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/treatments';
  }
}
