import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {DoctorTreatmentsComponent} from "./treatments/pages/doctor/doctor-treatments.component";
import {ReviewAppointmentComponent} from "./appointments/components/review-appointment/review-appointment.component";
import {DoctorRequestHistoryComponent} from "./request-history/pages/doctor/doctor-request-history.component";
import {DoctorRequestResultsComponent} from "./request-results/pages/doctor/doctor-request-results.component";
import {PacientTreatmentsComponent} from "./treatments/pages/pacient/pacient-treatments.component";

const routes: Routes = [
  {path: 'doctor/2/appointments',component: DoctorAppointmentsComponent},
  {path: 'treatments-doctor',component: DoctorTreatmentsComponent},
  {path: 'treatments-patient',component: PacientTreatmentsComponent},
  {path: 'request-history', component: DoctorRequestHistoryComponent},
  {path: 'request-results',component: DoctorRequestResultsComponent},
  {path:'review-appointment', component: ReviewAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
