import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrl: './new-analysis.component.css'
})
export class NewAnalysisComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    examType: ['', Validators.required],
    sampleId: ['', Validators.required],
    patientDni: ['', Validators.required],
    analysisDate: ['', Validators.required],
    status: ['', Validators.required],
  });

  analysis: any[] = [];

  constructor(private _formBuilder: FormBuilder,private http: HttpClient) {
  }
  ngOnInit() {
  }

  submitAnalysis(){
    const analysis = {
      examType: this.firstFormGroup.value.examType,
      sampleId: this.firstFormGroup.value.sampleId,
      patientDni: this.firstFormGroup.value.patientDni,
      analysisDate: this.firstFormGroup.value.analysisDate,
      status: this.firstFormGroup.value.status,
    };
    this.http.post('link del backend', analysis).subscribe(response => {
      console.log(response);
      alert("Analysis created successfully")
    }, error => {
      console.error(error);
    });
  }
}
