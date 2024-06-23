import {FormGroup} from "@angular/forms";

export class BaseFormComponent {

  protected isInvalidControl(form: FormGroup, controlName: string ) {
    const control = form.controls[controlName];
    return control.invalid && control.touched;
  }

  private errorMessageForControl(controlName: string, errorKey: string) {
    switch (errorKey) {
      case 'required':  return `The field ${controlName} is required`;
      default:          return `The field ${controlName} is invalid`;
    }
  }

  protected errorMessagesForControl(form: FormGroup, controlName: string) {
    const control = form.controls[controlName];
    let errorMessages = "";
    let errors = control.errors;
    if (errors) Object.keys(errors).forEach(errorKey => errorMessages += this.errorMessageForControl(controlName, errorKey));
    return errorMessages;
  }
}
