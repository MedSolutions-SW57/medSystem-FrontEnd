import { Component } from '@angular/core';
import {PacientTreatmentsComponent} from "./treatments/pages/pacient/pacient-treatments.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medSystem-FrontEnd';

  options = [
    { path: '/doctor/2/appointments', title: 'Appointments', icon:'calendar_today'},
    { path: '/chat', title: 'Chat', icon:'chat'},
    { path: '/treatments-doctor', title: 'Treatments for patients', icon:'assignment'},
    { path: '/request-history', title: 'Request History', icon:'history'},
    { path: '/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
  ]
}
