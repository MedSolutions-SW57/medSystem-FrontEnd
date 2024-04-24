export class Appointment{
  id: number;
  patientName: string;
  day: Date;
  hour: string;
  moreInfo: string;

  constructor() {
    this.id = -1;
    this.patientName = '';
    this.day = new Date();
    this.hour = '';
    this.moreInfo = '';
  }
}
