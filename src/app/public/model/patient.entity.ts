export interface Patient{
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  appointments: Array<any>;
  treatments: Array<any>;
}
