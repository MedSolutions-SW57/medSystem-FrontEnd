import {Appointment} from "../../medSystem/model/appointment.entity";

export interface Doctor{
  id: number;
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  appointment: Array<Appointment>
}
