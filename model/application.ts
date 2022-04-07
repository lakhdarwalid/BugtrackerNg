import { Bug } from "./bug";

export class Application{
    app_id! : number;
    name! : string;
    description! : string;
    bugs : Bug[] = new Array<Bug>();
}