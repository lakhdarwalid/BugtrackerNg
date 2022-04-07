import { AbstractControl, ValidationErrors} from "@angular/forms";

export class NameValidator {
    users : string[] = new Array<string>();
    static noWhiteSpace(control: AbstractControl) : ValidationErrors | null {
      if((control.value as string)?.indexOf(" ") >= 0){
        return {noWhiteSpace: true}
    }
      return null;
    }


    static noStartWhiteSpace(control: AbstractControl) : ValidationErrors | null {
      if((control.value as string)?.indexOf(" ") == 0){
        return {noStartWhiteSpace: true}
    }
      return null;
    }

    static passwordMatch(control : AbstractControl) : ValidationErrors | null {
      if (control.value as string != control.parent?.get('pass')?.value as string)
     
             return {passwordMatch : true};
     
      return null;    
    }

    static secretQstMatch(control : AbstractControl) : ValidationErrors | null {
      if (control.value as string == control.parent?.get('qst1')?.value as string)
     
             return {secretQstMatch : true};
     
      return null;    
    }

    
}
