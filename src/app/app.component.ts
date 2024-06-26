import {Component, ViewChild} from '@angular/core';
import {AuthenticationService} from "./iam/services/authentication.service";
import {MatSidenav} from "@angular/material/sidenav";
import {OptionsService} from "./public/services/options.service";
import {PatientService} from "./profiles/services/patient.service";
import {DoctorService} from "./profiles/services/doctor.service";
import {ConsultantService} from "./profiles/services/consultant.service";

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
  constructor(private authenticationService: AuthenticationService, private optionsService: OptionsService,
              private patientService: PatientService, private doctorService: DoctorService, private consultantService: ConsultantService) {}

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
    this.getName();
    let userIdForPath = -1;
    if (this.userRole == 'DOCTOR') {
      this.doctorService.getByOtherId(this.userId, "userId").subscribe((data:any) =>{
        const doctor = data;
        userIdForPath = doctor.id;
        this.options = [
          { path: '/home', title: 'Home', icon: 'home'},
          { path: '/doctor/:id/appointments'.replace(':id', userIdForPath.toString()), title: 'Appointments', icon:'calendar_today'},
          { path: '/doctor/:id/treatments-doctor'.replace(':id', userIdForPath.toString()), title: 'Treatments for patients', icon:'assignment'},
          { path: '/doctor/:id/request-history'.replace(':id', userIdForPath.toString()), title: 'Request History', icon:'history'},
          { path: '/doctor/:id/request-results'.replace(':id', userIdForPath.toString()), title: 'Request Results', icon: 'swap_vertical_circle'},
        ];
      })

    }
    else if (this.userRole == 'PATIENT') {
      this.patientService.getByOtherId(this.userId, "userId").subscribe((data:any)=>{
        const patient = data;
        userIdForPath = patient.id;
        this.options = [
          { path: '/home', title: 'Home', icon: 'home'},
          { path: '/patient/:id/appointments'.replace(':id', userIdForPath.toString()), title: 'Appointments', icon:'calendar_today'},
          { path: '/patient/:id/treatments-patient'.replace(':id', userIdForPath.toString()), title: 'Treatments for patients', icon:'assignment'},
          { path: '/patient/:id/request-results'.replace(':id', userIdForPath.toString()), title: 'Request Results', icon: 'swap_vertical_circle'},
        ]
      })

    }
    else {
      this.consultantService.getByOtherId(this.userId, "userId").subscribe((data:any)=>{
        const consultant =data;
        userIdForPath = consultant.id;
        this.options = [
          { path: '/home', title: 'Home', icon: 'home'},
          { path: '/consultant/:id/samples'.replace(':id', userIdForPath.toString()), title: 'Samples', icon: 'labs' },
          { path: '/consultant/:id/analysis'.replace(':id', userIdForPath.toString()), title: 'Analysis', icon: 'science'},
          { path: 'consultant/:id/new-result'.replace(':id', userIdForPath.toString()), title: 'Results', icon: "experiment" }

        ]
      })

    }
  }
  updateOptions() {
    this.setOptionsBasedOnRole();
  }
}
