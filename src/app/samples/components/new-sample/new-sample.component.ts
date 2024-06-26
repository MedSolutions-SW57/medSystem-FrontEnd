import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-new-sample',
  templateUrl: './new-sample.component.html',
  styleUrl: './new-sample.component.css'
})
export class NewSampleComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    sampleType: ['', Validators.required],
    sampleCode: ['', Validators.required],
    patientId: ['', Validators.required],
    doctorId: ['', Validators.required],
    sampleDate: ['', Validators.required],
  })

  samples: any[] = [];

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
  }
  ngOnInit(): void {
  }

  submitSample(){
    const sample = {
      sampleType: this.firstFormGroup.value.sampleType,
      sampleCode: this.firstFormGroup.value.sampleCode,
      patientId: this.firstFormGroup.value.patientId,
      doctorId: this.firstFormGroup.value.doctorId,
      sampleDate: this.firstFormGroup.value.sampleDate,
    };
    this.http.post('link del backend', sample).subscribe(response => {
      console.log(response);
      alert("Analysis created successfully")
    }, error => {
      console.error(error);
    });
  }



}
