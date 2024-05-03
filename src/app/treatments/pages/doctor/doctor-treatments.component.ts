import {Component} from '@angular/core';
import {Treatment} from "../../model/treatment.entity";
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-treatments',
  templateUrl: './doctor-treatments.component.html',
  styleUrls: ['./doctor-treatments.component.css']
})
export class DoctorTreatmentsComponent {
  treatments !: Treatment[];
  selectedTreatment!: string;

  newTreatment: Treatment = {
    name: '',
    patientName: '',
    dose: '',
    duration: '',
    frequency: '',
    notes: '',
    id:'',
    inTreatment: false,
  };

  constructor(private service: BaseService<Treatment>, private http: HttpClient) {
    this.service.getTreatments().subscribe(res => {
      this.treatments = res;
    });
  }

  addTreatment() {
    const treatment = {
      patientName: `${this.newTreatment.patientName}`,
      name: this.newTreatment.name,
      dose: this.newTreatment.dose,
      duration: this.newTreatment.duration,
      frequency: this.newTreatment.frequency,
      notes: this.newTreatment.notes,
      inTreatment: false,
      requestHistory: [],
    };
    this.http.post('https://663440e79bb0df2359a10772.mockapi.io/treatements', treatment).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

  removeTreatment(){
    const treatmentToRemove = this.treatments.find(treatment => treatment.name === this.selectedTreatment);
    if(treatmentToRemove){
      this.http.delete(`https://663440e79bb0df2359a10772.mockapi.io/treatements/${treatmentToRemove.id}`).subscribe(() => {
        this.treatments = this.treatments.filter(treatment => treatment !== treatmentToRemove)
      },error =>{
        console.error(error);
      });
    }
  }

  finishTreatment() {
    const treatmentToFinish = this.treatments.find(treatment => treatment.name === this.selectedTreatment);
    if(treatmentToFinish){
      treatmentToFinish.inTreatment = true;
      this.http.put(`https://663440e79bb0df2359a10772.mockapi.io/treatements/${treatmentToFinish.id}`, treatmentToFinish).subscribe(() => {
        console.log('Treatment finished');
      },error =>{
        console.error(error);
      });
    }
  }
}
