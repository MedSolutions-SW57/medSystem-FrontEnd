import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {DoctorTreatmentsComponent} from "./treatments/pages/doctor/doctor-treatments.component";
import {ReviewAppointmentComponent} from "./appointments/components/review-appointment/review-appointment.component";
import {DoctorRequestHistoryComponent} from "./request-history/pages/doctor/doctor-request-history.component";
import {DoctorRequestResultsComponent} from "./request-results/pages/doctor/doctor-request-results.component";

import {PacientTreatmentsComponent} from "./treatments/pages/pacient/pacient-treatments.component";
import {PatientExamResultsComponent} from "./request-results/pages/patient/patient-request-results/patient-exam-results.component";
import {PatientAppointmentsComponent} from "./appointments/pages/patient/patient-appointments.component";
import {NewAppointmentComponent} from "./appointments/components/new-appointment/new-appointment.component";
import {PatientRequestHistoryComponent} from "./request-history/pages/patient/patient-request-history.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {authenticationGuard} from "./iam/services/authentication.guard";


const routes: Routes = [
  {path: 'doctor/:id/appointments',component: DoctorAppointmentsComponent , canActivate: [authenticationGuard]},
  {path: 'doctor/:id/treatments-patient',component: DoctorTreatmentsComponent},
  {path: 'doctor/:id/request-history', component: DoctorRequestHistoryComponent},
  {path: 'doctor/:id/request-results',component: DoctorRequestResultsComponent},
  {path:'appointments/:id', component: ReviewAppointmentComponent},
  {path: 'patients/:id/request-results',component: PatientExamResultsComponent},
  {path: 'patients/:id/appointments', component: PatientAppointmentsComponent},
  {path: 'patients/:id/new-appointment', component: NewAppointmentComponent},
  {path: 'patients/:id/request-history', component: PatientRequestHistoryComponent},
  {path: 'patients/:id/treatments-patient', component: PacientTreatmentsComponent},
  {path: 'patients/:id/new-appointment', component: NewAppointmentComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'doctor/:id/appointments',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
