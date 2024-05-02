import {Appointment} from "./appointment.entity";

export interface Doctor{
  id: number;
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  appointment: Array<Appointment>
}
