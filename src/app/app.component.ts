import {Component, ViewChild} from '@angular/core';
import {AuthenticationService} from "./iam/services/authentication.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medSystem-FrontEnd';
  options = [
    { path: '/doctor/appointments', title: 'Appointments', icon:'calendar_today'},
    { path: '/chat', title: 'Chat', icon:'chat'},
    { path: '/doctor/treatments-patient', title: 'Treatments for patients', icon:'assignment'},
    { path: '/doctor/request-history', title: 'Request History', icon:'history'},
    { path: '/doctor/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
    { path: '/patients/appointments', title: 'Appointments', icon:'calendar_today'},
    { path: '/chat', title: 'Chat', icon:'chat'},
    { path: '/patients/treatments-patient', title: 'Treatments for patients', icon:'assignment'},
    { path: '/patients/request-history', title: 'Request History', icon:'history'},
    { path: '/patients/request-results', title: 'Request Results', icon: 'swap_vertical_circle'},
  ]
  isSignedIn: boolean = false;
  username: string = "";
  userId: number = -1;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.isSignedIn.subscribe(isSignedIn => this.isSignedIn = isSignedIn);
    if (this.isSignedIn) {
      this.sidenav.open();
    }
  }
  getName(){
    this.authenticationService.currentUsername.subscribe(username => this.username = username);
    console.log(this.username);
  }
  getId(){
    this.authenticationService.currentUserId.subscribe(id => this.userId = id);
    console.log(this.userId);
  }
}
