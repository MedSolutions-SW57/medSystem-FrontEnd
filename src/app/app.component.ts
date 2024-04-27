import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medSystem-FrontEnd';

  options = [
    { path: '/appointments', title: 'Appointments', icon:'calendar_today'},
    { path: '/chat', title: 'Chat', icon:'chat'},
    { path: '/treatments-patient', title: 'Treatments for patients', icon:'assignment'},
    { path: '/request-history', title: 'Request History', icon:'history'},
    { path: '/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
  ]
}
