import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  selectedComponent: string = '';

  selectComponent(component: string) {
    this.selectedComponent = component;
  }
}
