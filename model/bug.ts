import { Activity } from "./activity";
import { Application } from "./application";
import { User } from "./user";

export class Bug{
    bug_id! : number;
    title! : string;
    description! : string;
    createdDate! : Date;
    pickedDate! : Date | null;
    doneDate! : Date | null;
    app! : Application;
    user! : User | null;
    creator! : User | null;
    users : User[] = [];
    activities : Activity[] = [];
    status : Status = Status.STAGING;
    progress! : number;
}

export enum Status {STAGING, PROCESSING, DONE};