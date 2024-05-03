import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userType!: string;
  private id!: any;

  constructor() { }

  setUserType(userType: string): void {
    this.userType = userType;
  }

  getUserType(): string {
    return this.userType;
  }

  isLoggedIn(): boolean {
    return !!this.userType; // Devuelve true si userType está definido, false en caso contrario
  }

  setUserId(id: any): void {
    this.id = id;
  }

  getUserId(): string {
    return this.id;
  }
}
