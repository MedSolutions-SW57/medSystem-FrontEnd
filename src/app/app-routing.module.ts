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
import {authenticationGuard} from "./iam/services/authentication.guard";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {NewAnalysisComponent} from "./analysis/components/new-analysis/new-analysis.component";
import {LaboratoryAnalysisComponent} from "./analysis/pages/laboratory/laboratory-analysis.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/appointments',component: DoctorAppointmentsComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/treatments-patient',component: DoctorTreatmentsComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/request-history', component: DoctorRequestHistoryComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/request-results',component: DoctorRequestResultsComponent, canActivate: [authenticationGuard]},
  { path:'appointments/:id', component: ReviewAppointmentComponent, canActivate: [authenticationGuard]},
  { path: 'patients/:id/request-results',component: PatientExamResultsComponent, canActivate: [authenticationGuard]},
  { path: 'patients/:id/appointments', component: PatientAppointmentsComponent, canActivate: [authenticationGuard]},
  { path: 'patients/:id/new-appointment', component: NewAppointmentComponent, canActivate: [authenticationGuard]},
  { path: 'patients/:id/treatments-patient', component: PacientTreatmentsComponent, canActivate: [authenticationGuard]},
  { path: 'patients/:id/new-appointment', component: NewAppointmentComponent, canActivate: [authenticationGuard]},
  { path: 'laboratory/analysis', component: LaboratoryAnalysisComponent},
  { path: 'laboratory/new-analysis', component: NewAnalysisComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
