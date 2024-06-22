export interface Appointment{
  id: string;
  patientName: string;
  appointmentDay: string;
  appointmentHour: string;
  inTreatment: boolean;
  moreInfo: string;
  requestHistory: Array<any>;
}
