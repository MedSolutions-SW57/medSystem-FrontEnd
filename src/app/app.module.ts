import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {RequestResultsComponent} from "./medSystem/pages/request-results/request-results.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {BaseService} from "./shared/services/base.service";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {TreatmentsComponent} from "./medSystem/pages/treatments/treatments.component";
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";
import {MatOption, MatSelect} from "@angular/material/select";
import { DoctorRequestHistoryComponent } from './request-history/pages/doctor/doctor-request-history.component';
import { ReviewAppointmentComponent } from './appointments/components/review-appointment/review-appointment.component';
import {MatSlider} from "@angular/material/slider";
import { ComponentsComponent } from './request-history/components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    RequestResultsComponent,
    DoctorAppointmentsComponent,
    PageNotFoundComponent,
    TreatmentsComponent,
    DoctorRequestHistoryComponent,
    ReviewAppointmentComponent,
    ComponentsComponent
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
    MatSlider
  ],
  providers: [
    BaseService,provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
