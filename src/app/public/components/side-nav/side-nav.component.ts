import {Component, computed, signal} from '@angular/core';

export type MenuItem = {
  icon: string;
  label: string;
  route: any;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'calendar_today',
      label: 'Appointments',
      route: 'appointments'
    },
    {
      icon: 'chat',
      label: 'Chat',
      route: 'chat'
    },
    {
      icon: 'assignment',
      label: 'Treatments for patients',
      route: 'treatments-patient'
    },
    {
      icon: 'history',
      label: 'Request History',
      route: 'request-history'
    },
    {
      icon: 'swap_vertical_circle',
      label: 'Request Results',
      route: 'request-results'
    }
  ])

}
