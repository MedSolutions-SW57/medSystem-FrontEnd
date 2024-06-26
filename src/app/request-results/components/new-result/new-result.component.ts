import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ResultsService} from "../../services/results.service";

@Component({
  selector: 'app-new-result',
  templateUrl: './new-result.component.html',
  styleUrl: './new-result.component.css'
})
export class NewResultComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    patientId: ['', Validators.required],
    doctorId: ['', Validators.required],
    ResultDateTime: ['', Validators.required],
    typeOfExam: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private resultService: ResultsService) {
  }
  ngOnInit(): void {
  }

  submitResult(){
    const result = {
      patientId: this.firstFormGroup.value.patientId,
      doctorId: this.firstFormGroup.value.doctorId,
      resultDateTime: this.firstFormGroup.value.ResultDateTime,
      typeOfExam: this.firstFormGroup.value.typeOfExam,
      result: true,
    };
    this.resultService.create(result).subscribe(response => {
      console.log(response);
      alert("Result created successfully")
    }, error =>{
      console.error(error);
    });
  }
}
