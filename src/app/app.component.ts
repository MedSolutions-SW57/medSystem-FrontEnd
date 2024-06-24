import {Component, ViewChild} from '@angular/core';
import {AuthenticationService} from "./iam/services/authentication.service";
import {MatSidenav} from "@angular/material/sidenav";
import {OptionsService} from "./public/services/options.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medSystem-FrontEnd';
  randomNumber: number = Math.floor(Math.random() * 2 + 1);
  options = [
    { path: '/home', title: 'Home', icon: 'home'},
  ]
  isSignedIn: boolean = false;
  username: string = "";
  userId: number = -1;
  userRole: string = '';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private authenticationService: AuthenticationService, private optionsService: OptionsService) {}

  ngOnInit() {
    this.optionsService.updateOptions$.subscribe(() => {
      this.updateOptions();
    });

    this.authenticationService.isSignedIn.subscribe(isSignedIn => {
      this.isSignedIn = isSignedIn;
    });
  }

  getName(){
    this.authenticationService.currentUsername.subscribe(username => this.username = username);
    console.log(this.username);
  }
  getId(){
    this.authenticationService.currentUserId.subscribe(id => this.userId = id);
  }
  setOptionsBasedOnRole(){
    this.authenticationService.currentRole.subscribe(role => this.userRole = role);
    this.getId();
    const userIdForPath = this.userId;
    if (this.userRole == 'DOCTOR') {
      this.options = [
        { path: '/home', title: 'Home', icon: 'home'},
        { path: '/doctor/:id/appointments'.replace(':id', userIdForPath.toString()), title: 'Appointments', icon:'calendar_today'},
        { path: '/doctor/:id/treatments-patient'.replace(':id', userIdForPath.toString()), title: 'Treatments for patients', icon:'assignment'},
        { path: '/doctor/:id/request-history'.replace(':id', userIdForPath.toString()), title: 'Request History', icon:'history'},
        { path: '/doctor/:id/request-results'.replace(':id', userIdForPath.toString()), title: 'Request Results', icon: 'swap_vertical_circle'},
      ];
    }
    else {
      this.options = [
        { path: '/home', title: 'Home', icon: 'home'},
        { path: '/patients/:id/appointments'.replace(':id', userIdForPath.toString()), title: 'Appointments', icon:'calendar_today'},
        { path: '/patients/:id/treatments-patient'.replace(':id', userIdForPath.toString()), title: 'Treatments for patients', icon:'assignment'},
        { path: '/patients/:id/request-history'.replace(':id', userIdForPath.toString()), title: 'Request History', icon:'history'},
        { path: '/patients/:id/request-results'.replace(':id', userIdForPath.toString()), title: 'Request Results', icon: 'swap_vertical_circle'},
      ]
    }
  }
  updateOptions() {
    this.setOptionsBasedOnRole();
  }
}
