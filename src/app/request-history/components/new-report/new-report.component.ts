import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SampleService} from "../../../samples/services/sample.service";
import {ReportsService} from "../../services/reports.service";

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrl: './new-report.component.css'
})
export class NewReportComponent {
  firstFormGroup = this._formBuilder.group({
    reason: ['', Validators.required],
    date: ['', Validators.required],
    patientId: ['', Validators.required],
  })

  constructor(private _formBuilder: FormBuilder, private reportsService: ReportsService) {
  }
  ngOnInit(): void {
  }

  submitReport(){
    const report = {
      reason: this.firstFormGroup.value.reason,
      date: this.firstFormGroup.value.date,
      patientId: this.firstFormGroup.value.patientId,
    };
    this.reportsService.create(report).subscribe(response => {
      console.log(response);
      alert("Report created successfully")
    }, error => {
      console.error(error);
    });
  }
}
