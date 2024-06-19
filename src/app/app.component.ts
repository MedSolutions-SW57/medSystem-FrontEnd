import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medSystem-FrontEnd';



  constructor() { }
  options = [
    { path: '/doctor/:id/appointments', title: 'Appointments', icon:'calendar_today'},
    { path: '/chat', title: 'Chat', icon:'chat'},
    { path: '/doctor/:id/treatments-patient', title: 'Treatments for patients', icon:'assignment'},
    { path: '/doctor/:id/request-history', title: 'Request History', icon:'history'},
    { path: '/doctor/:id/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
    { path: '/patients/:id/appointments', title: 'Appointments', icon:'calendar_today'},
    { path: '/chat', title: 'Chat', icon:'chat'},
    { path: '/patients/:id/treatments-patient', title: 'Treatments for patients', icon:'assignment'},
    { path: '/patients/:id/request-history', title: 'Request History', icon:'history'},
    { path: '/patients/:id/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
  ]
  getOptions() {
    const id = 1;
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
