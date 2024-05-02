export interface Appointment{
  id: string;
  patientName: string;
  appointmentDay: string;
  appointmentHour: string;
  inTreatment: boolean;
  requestHistory: Array<any>;
}
