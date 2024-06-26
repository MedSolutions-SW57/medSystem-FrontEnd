import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AnalysisService} from "../../services/analysis.service";

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrl: './new-analysis.component.css'
})
export class NewAnalysisComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    analysisType: ['', Validators.required],
    sampleId: ['', Validators.required],
    patientDni: ['', Validators.required],
    date: ['', Validators.required],
    status: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private analysisService: AnalysisService) {
  }
  ngOnInit() {
  }

  submitAnalysis(){
    const analysis = {
      analysisType: this.firstFormGroup.value.analysisType,
      sampleId: this.firstFormGroup.value.sampleId,
      patientDni: this.firstFormGroup.value.patientDni,
      date: this.firstFormGroup.value.date,
      status: this.firstFormGroup.value.status,
    };
    this.analysisService.create(analysis).subscribe(response => {
      console.log(response);
      alert("Analysis created successfully")
    }, error => {
      console.error(error);
    });
  }
}
