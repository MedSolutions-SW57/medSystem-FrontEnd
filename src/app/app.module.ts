import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormField, MatInputModule} from "@angular/material/input";
import {DoctorRequestResultsComponent} from "./request-results/pages/doctor/doctor-request-results.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {BaseService} from "./shared/services/base.service";
import {DoctorTreatmentsComponent} from "./treatments/pages/doctor/doctor-treatments.component";
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";
import {MatOption, MatSelect} from "@angular/material/select";
import { DoctorRequestHistoryComponent } from './request-history/pages/doctor/doctor-request-history.component';
import { ReviewAppointmentComponent } from './appointments/components/review-appointment/review-appointment.component';
import {MatSlider} from "@angular/material/slider";
import { PatientTreatmentsComponent } from './treatments/pages/patient/patient-treatments.component';
import { PatientExamResultsComponent } from './request-results/pages/patient/patient-request-results/patient-exam-results.component';
import {MatMenuModule} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import { PatientAppointmentsComponent } from './appointments/pages/patient/patient-appointments.component';
import {NewAppointmentComponent} from "./appointments/components/new-appointment/new-appointment.component";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatDialogModule} from "@angular/material/dialog";
import { DetailResultComponent } from './request-results/components/detail-result/detail-result.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { AuthenticationSectionComponent } from './iam/components/authentication-section/authentication-section.component';
import {authenticationInterceptor} from "./iam/services/authentication.interceptor";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {HomeComponent} from "./public/pages/home/home.component";
import { NewAnalysisComponent } from './analysis/components/new-analysis/new-analysis.component';
import { LaboratoryAnalysisComponent } from './analysis/pages/laboratory/laboratory-analysis.component';
import { NewSampleComponent } from './samples/components/new-sample/new-sample.component';
import { LaboratorySampleComponent } from './samples/pages/laboratory/laboratory-sample.component';
import {MatDatepicker} from "@angular/material/datepicker";
import { NewResultComponent } from './request-results/components/new-result/new-result.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorRequestResultsComponent,
    DoctorAppointmentsComponent,
    PageNotFoundComponent,
    DoctorTreatmentsComponent,
    DoctorRequestHistoryComponent,
    ReviewAppointmentComponent,
    PatientTreatmentsComponent,
    PatientExamResultsComponent,
    PatientAppointmentsComponent,
    NewAppointmentComponent,
    DetailResultComponent,
    SignInComponent,
    SignUpComponent,
    AuthenticationSectionComponent,
    HomeComponent,
    PageNotFoundComponent,
    NewAnalysisComponent,
    LaboratoryAnalysisComponent,
    NewSampleComponent,
    LaboratorySampleComponent,
    NewResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
    CdkDragPlaceholder,
    MatSelect,
    MatOption,
    MatSlider,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatMenuModule,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatStepperPrevious,
    MatStepperNext,
    MatToolbar,
    MatDialogModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatFormField,
    MatDatepicker
  ],
  providers: [
    BaseService,provideAnimationsAsync(), provideHttpClient(withInterceptors([authenticationInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
