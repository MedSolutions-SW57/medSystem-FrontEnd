import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SampleService} from "../../services/sample.service";

@Component({
  selector: 'app-new-sample',
  templateUrl: './new-sample.component.html',
  styleUrl: './new-sample.component.css'
})
export class NewSampleComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    type: ['', Validators.required],
    code: ['', Validators.required],
    patientId: ['', Validators.required],
    doctorId: ['', Validators.required],
    date: ['', Validators.required],
  })

  constructor(private _formBuilder: FormBuilder, private sampleService: SampleService) {
  }
  ngOnInit(): void {
  }

  submitSample(){
    const sample = {
      type: this.firstFormGroup.value.type,
      code: this.firstFormGroup.value.code,
      patientId: this.firstFormGroup.value.patientId,
      doctorId: this.firstFormGroup.value.doctorId,
      date: this.firstFormGroup.value.date,
    };
    this.sampleService.create(sample).subscribe(response => {
      console.log(response);
      alert("Analysis created successfully")
    }, error => {
      console.error(error);
    });
  }



}
