import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {DoctorTreatmentsComponent} from "./treatments/pages/doctor/doctor-treatments.component";
import {ReviewAppointmentComponent} from "./appointments/components/review-appointment/review-appointment.component";
import {DoctorRequestHistoryComponent} from "./request-history/pages/doctor/doctor-request-history.component";
import {DoctorRequestResultsComponent} from "./request-results/pages/doctor/doctor-request-results.component";
import {PatientExamResultsComponent} from "./request-results/pages/patient/patient-request-results/patient-exam-results.component";
import {PatientAppointmentsComponent} from "./appointments/pages/patient/patient-appointments.component";
import {NewAppointmentComponent} from "./appointments/components/new-appointment/new-appointment.component";
import {PatientRegisterFormComponent} from "./public/components/patient-register-form/patient-register-form.component";
import {DoctorRegisterFormComponent} from "./public/components/doctor-register-form/doctor-register-form.component";
import {Register} from "./public/pages/register-page/register";
import {LoginPageComponent} from "./public/pages/login-page/login-page.component";
import {PatientRequestHistoryComponent} from "./request-history/pages/patient/patient-request-history.component";


const routes: Routes = [
  {path: 'doctor/:id/appointments',component: DoctorAppointmentsComponent},
  {path: 'doctor/:id/treatments-patient',component: DoctorTreatmentsComponent},
  {path: 'doctor/:id/request-history', component: DoctorRequestHistoryComponent},
  {path: 'doctor/:id/request-results',component: DoctorRequestResultsComponent},
  {path:'appointments/:id', component: ReviewAppointmentComponent},
  {path: 'patients/:id/request-results',component: PatientExamResultsComponent},
  {path: 'patients/:id/appointments', component: PatientAppointmentsComponent},
  {path: 'patients/:id/new-appointment', component: NewAppointmentComponent},
  {path: 'patients/:id/request-history', component: PatientRequestHistoryComponent},
  {path: 'register', component: Register},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: '/login',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
