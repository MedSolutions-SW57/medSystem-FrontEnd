import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Result} from "../../model/result.entity";

@Component({
  selector: 'app-detail-result',
  templateUrl: './detail-result.component.html',
  styleUrl: './detail-result.component.css'
})
export class DetailResultComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Result) {}
}
