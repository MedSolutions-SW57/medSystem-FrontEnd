import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {RequestResultsComponent} from "./medSystem/pages/request-results/request-results.component";
import {TreatmentsComponent} from "./medSystem/pages/treatments/treatments.component";
import {RequestHistoryComponent} from "./medSystem/pages/request-history/request-history.component";
import {
  ReviewAppointmentComponent
} from "./appointments/components/review-appointment/review-appointment.component";

const routes: Routes = [
  {path: 'appointments',component: DoctorAppointmentsComponent},
  {path: 'treatments-patient',component: TreatmentsComponent},
  {path: 'request-history', component: RequestHistoryComponent},
  {path: 'request-results',component: RequestResultsComponent},
  {path:'review-appointment', component: ReviewAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
