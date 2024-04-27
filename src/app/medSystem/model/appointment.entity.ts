export interface Appointment{
  appointmentId: string;
  patientName: string;
  appointmentDay: string;
  appointmentHour: string;
  moreInfo: string;
  requestHistory: Array<any>;
}
