import { Bug } from "./bug";
import { User } from "./user";

export class Activity{
    act_id! : number;
	description! : string;
	activityDate! : Date;
	user! : User;
	bug! : Bug;
}