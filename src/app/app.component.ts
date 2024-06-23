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
    { path: '/home', title: 'Home', icon: 'home'},
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
