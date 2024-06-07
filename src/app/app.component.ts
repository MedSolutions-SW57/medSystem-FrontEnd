import { Component } from '@angular/core';

import {PacientTreatmentsComponent} from "./treatments/pages/pacient/pacient-treatments.component";
import { UserService } from './public/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medSystem-FrontEnd';



  constructor(protected userService: UserService) { }

  getOptions() {
    const id = this.userService.getUserId();
    console.log('id', id);
    const userType = this.userService.getUserType();
    const options = userType === 'doctor' ? this.getDoctorOptions() : this.getPatientOptions();
    return options.map(option => ({
      ...option,
      path: option.path.replace(':id', id)
    }));
  }

  getDoctorOptions() {
    return [
      { path: '/doctor/:id/appointments', title: 'Appointments', icon:'calendar_today'},
      { path: '/chat', title: 'Chat', icon:'chat'},
      { path: '/doctor/:id/treatments-patient', title: 'Treatments for patients', icon:'assignment'},
      { path: '/doctor/:id/request-history', title: 'Request History', icon:'history'},
      { path: '/doctor/:id/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
    ];
  }

  getPatientOptions() {
    return [
      { path: '/patients/:id/appointments', title: 'Appointments', icon:'calendar_today'},
      { path: '/chat', title: 'Chat', icon:'chat'},
      { path: '/patients/:id/treatments-patient', title: 'Treatments for patients', icon:'assignment'},
      { path: '/patients/:id/request-history', title: 'Request History', icon:'history'},
      { path: '/patients/:id/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
    ];
  }
}
