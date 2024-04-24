import { Component } from '@angular/core';
import {Appointment} from "../../model/appointment.entity";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
  appointments: Array<Appointment> = [];
  displayedColumns: string[] = ['id', 'patientName', 'day', 'hour', 'moreInfo']
  constructor() {}
}
