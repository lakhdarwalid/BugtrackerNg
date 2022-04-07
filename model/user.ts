import { Activity } from "./activity";
import { Bug } from "./bug";
import { Role } from "./role";

export class User{
     user_id! : number;
     userName!: string;
     password!: string;
     active! : boolean;
     role : Role = new Role();
     email!: string;
     phone!: string;
     bugsForUser : Bug[] = new Array<Bug>();
     activities : Activity[] = new Array<Activity>();
     secretQuestion1! : string;
     secretAnswer1! : string;
     secretQuestion2! : string;
     secretAnswer2! : string;
}