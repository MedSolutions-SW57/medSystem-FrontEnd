import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Result} from "../model/result.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultsService extends BaseService<Result>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/results'
  }
}
