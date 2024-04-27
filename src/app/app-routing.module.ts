import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppointmentsComponent} from "./medSystem/pages/appointments/appointments.component";
import {RequestResultsComponent} from "./medSystem/pages/request-results/request-results.component";
import {TreatmentsComponent} from "./medSystem/pages/treatments/treatments.component";

const routes: Routes = [
  {path: 'appointments',component: AppointmentsComponent},
  {path: 'chat',redirectTo:'appointments', pathMatch: "full"},
  {path: 'treatments-patient',component: TreatmentsComponent},
  {path: 'request-results',component: RequestResultsComponent},
  {path: 'request-history',redirectTo:'appointments', pathMatch: "full"},
  {path: '',redirectTo:'appointments', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
