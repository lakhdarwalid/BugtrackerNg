import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function userExist(users : string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = users.includes(control.value?.toLowerCase());
      return forbidden ? {userExistInDb : true} : null;
    };
  }

  export function RoleExist(roles : string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = roles.includes(control.value?.toLowerCase());
      return forbidden ? {roleExistInDb : true} : null;
    };
  }