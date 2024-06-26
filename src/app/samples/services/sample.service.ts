import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Sample} from "../model/sample.entity";

@Injectable({
  providedIn: 'root'
})
export class SampleService extends BaseService<Sample>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/samples';
  }
}
