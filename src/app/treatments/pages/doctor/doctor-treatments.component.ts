import {Component} from '@angular/core';
import {Treatment} from "../../model/treatment.entity";
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-treatments',
  templateUrl: './doctor-treatments.component.html',
  styleUrls: ['./doctor-treatments.component.css']
})
export class DoctorTreatmentsComponent {
  treatments !: Treatment[];
  selectedTreatment!: string;
  doctorId!: string;

  newTreatment: Treatment = {
    name: '',
    patientName: '',
    dose: '',
    duration: '',
    frequency: '',
    notes: '',
    id:'',
    doctorId: '',
    patientId: '',
    inTreatment: false,
  };

  constructor(private service: BaseService<Treatment>, private http: HttpClient, private route: ActivatedRoute) {
    this.doctorId = this.route.snapshot.paramMap.get('id')!;
    this.service.getTreatments().subscribe(res => {
      this.treatments = res.filter(treatment =>treatment.doctorId === this.doctorId);
      console.log(this.treatments);
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
      doctorId: this.doctorId, // Añade el doctorId al tratamiento
      inTreatment: false,
      requestHistory: [],
    };

    // Primero, verifica si el patientName proporcionado coincide con el dni de algún paciente existente
    this.http.get<any[]>('https://663440e79bb0df2359a10772.mockapi.io/patients').subscribe((patients: any[]) => {
      const patient = patients.find(patient => patient.dni === this.newTreatment.patientName);
      if (patient) {
        // Si el paciente existe, añade el tratamiento
        this.http.post('https://663440e79bb0df2359a10772.mockapi.io/treatements', treatment).subscribe(response => {
          console.log(response);
          // Añade el tratamiento al paciente
          if (!patient.treatments) {
            patient.treatments = [];
          }
          patient.treatments.push(response);
          this.http.put(`https://663440e79bb0df2359a10772.mockapi.io/patients/${patient.id}`, patient).subscribe(() => {
            console.log('Treatment added to patient');
          });

// Añade el tratamiento al doctor
          this.http.get(`https://663440e79bb0df2359a10772.mockapi.io/doctors/${this.doctorId}`).subscribe((doctor: any) => {
            if (!doctor.treatments) {
              doctor.treatments = [];
            }
            doctor.treatments.push(response);
            this.http.put(`https://663440e79bb0df2359a10772.mockapi.io/doctors/${this.doctorId}`, doctor).subscribe(() => {
              console.log('Treatment added to doctor');
            });
          });
        }, error => {
          console.error(error);
        });
      } else {
        console.log('No patient found with the provided dni');
      }
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
