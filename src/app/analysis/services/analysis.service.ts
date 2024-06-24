import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Analysis} from "../models/analysis.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnalysisService extends BaseService<Analysis>{
  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/analysis';
  }
}
