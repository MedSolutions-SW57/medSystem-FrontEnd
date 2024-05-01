import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {DoctorTreatmentsComponent} from "./treatments/pages/doctor/doctor-treatments.component";
import {ReviewAppointmentComponent} from "./appointments/components/review-appointment/review-appointment.component";
import {DoctorRequestHistoryComponent} from "./request-history/pages/doctor/doctor-request-history.component";
import {DoctorRequestResultsComponent} from "./request-results/pages/doctor/doctor-request-results.component";
import {PatientExamResultsComponent} from "./request-results/pages/patient/patient-request-results/patient-exam-results.component";


const routes: Routes = [
  {path: 'doctor/2/appointments',component: DoctorAppointmentsComponent},
  {path: 'treatments-patient',component: DoctorTreatmentsComponent},
  {path: 'request-history', component: DoctorRequestHistoryComponent},
  {path: 'request-results',component: DoctorRequestResultsComponent},
  {path:'review-appointment', component: ReviewAppointmentComponent},
  {path: 'exam-results',component: PatientExamResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
