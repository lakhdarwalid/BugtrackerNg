import { MatSnackBar } from "@angular/material/snack-bar";

export function openSnackBar(snackbar : MatSnackBar, message: string, action : any){
        snackbar.open(message, action,{ duration : 2000, 
        panelClass: ['blue-snackbar']}
        );
}