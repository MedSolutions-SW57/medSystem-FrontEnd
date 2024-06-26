import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {DoctorTreatmentsComponent} from "./treatments/pages/doctor/doctor-treatments.component";
import {ReviewAppointmentComponent} from "./appointments/components/review-appointment/review-appointment.component";
import {DoctorRequestHistoryComponent} from "./request-history/pages/doctor/doctor-request-history.component";
import {DoctorRequestResultsComponent} from "./request-results/pages/doctor/doctor-request-results.component";
import {PatientTreatmentsComponent} from "./treatments/pages/patient/patient-treatments.component";
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
import {LaboratorySampleComponent} from "./samples/pages/laboratory/laboratory-sample.component";
import {NewSampleComponent} from "./samples/components/new-sample/new-sample.component";
import {NewResultComponent} from "./request-results/components/new-result/new-result.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/appointments',component: DoctorAppointmentsComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/treatments-doctor',component: DoctorTreatmentsComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/request-history', component: DoctorRequestHistoryComponent, canActivate: [authenticationGuard]},
  { path: 'doctor/:id/request-results',component: DoctorRequestResultsComponent, canActivate: [authenticationGuard]},
  { path:'appointments/:id', component: ReviewAppointmentComponent, canActivate: [authenticationGuard]},
  { path: 'patient/:id/request-results',component: PatientExamResultsComponent, canActivate: [authenticationGuard]},
  { path: 'patient/:id/appointments', component: PatientAppointmentsComponent, canActivate: [authenticationGuard]},
  { path: 'patient/:id/new-appointment', component: NewAppointmentComponent, canActivate: [authenticationGuard]},
  { path: 'patient/:id/treatments-patient', component: PatientTreatmentsComponent, canActivate: [authenticationGuard]},
  { path: 'patient/:id/new-appointment', component: NewAppointmentComponent, canActivate: [authenticationGuard]},
  { path: 'consultant/:id/samples', component: LaboratorySampleComponent, canActivate: [authenticationGuard]},
  { path: 'consultant/:id/new-sample',component: NewSampleComponent, canActivate: [authenticationGuard]},
  { path: 'consultant/:id/analysis', component: LaboratoryAnalysisComponent, canActivate: [authenticationGuard]},
  { path: 'consultant/:id/new-analysis', component: NewAnalysisComponent, canActivate: [authenticationGuard]},
  { path: 'consultant/:id/new-result', component: NewResultComponent, canActivate:[authenticationGuard]},
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
