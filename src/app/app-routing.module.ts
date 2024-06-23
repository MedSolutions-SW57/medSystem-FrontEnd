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
import {authenticationGuard} from "./iam/services/authentication.guard";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";


const routes: Routes = [
  {path: 'doctor/appointments',component: DoctorAppointmentsComponent, canActivate: [authenticationGuard]},
  {path: 'doctor/treatments-patient',component: DoctorTreatmentsComponent, canActivate: [authenticationGuard]},
  {path: 'doctor/request-history', component: DoctorRequestHistoryComponent, canActivate: [authenticationGuard]},
  {path: 'doctor/request-results',component: DoctorRequestResultsComponent, canActivate: [authenticationGuard]},
  {path:'appointments', component: ReviewAppointmentComponent, canActivate: [authenticationGuard]},
  {path: 'patients/request-results',component: PatientExamResultsComponent, canActivate: [authenticationGuard]},
  {path: 'patients/appointments', component: PatientAppointmentsComponent, canActivate: [authenticationGuard]},
  {path: 'patients/new-appointment', component: NewAppointmentComponent, canActivate: [authenticationGuard]},
  {path: 'patients/request-history', component: PatientRequestHistoryComponent, canActivate: [authenticationGuard]},
  {path: 'patients/treatments-patient', component: PacientTreatmentsComponent, canActivate: [authenticationGuard]},
  {path: 'patients/new-appointment', component: NewAppointmentComponent, canActivate: [authenticationGuard]},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {path: '', redirectTo: 'doctor/appointments',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
